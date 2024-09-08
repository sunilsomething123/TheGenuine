'use client'

import React, { useState, useEffect } from 'react'
import { Prisma } from '@prisma/client'
import {
  Typography,
  Select,
  Calendar,
  Input,
  Button,
  List,
  Form,
  Radio,
  Row,
  Col,
  Card,
  Space,
} from 'antd'
import { SmileOutlined, MehOutlined, FrownOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
const { TextArea } = Input
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function PowerhousePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedTheme, setSelectedTheme] = useState<string>('breeze')
  const [selectedDate, setSelectedDate] = useState<string>(
    dayjs().format('YYYY-MM-DD'),
  )
  const [notes, setNotes] = useState<string>('')
  const [playlists, setPlaylists] = useState<
    { name: string; songs: string[] }[]
  >([])
  const [playlistName, setPlaylistName] = useState<string>('')
  const [song, setSong] = useState<string>('')
  const [wellnessTip, setWellnessTip] = useState<string>('')
  const [mood, setMood] = useState<string>('neutral')

  const {
    data: userMoodGraphs,
    isLoading: isLoadingMoodGraphs,
    refetch: refetchMoodGraphs,
  } = Api.user.findUnique.useQuery({
    where: { id: user?.id },
    include: { moodGraphs: true },
  })

  const { mutateAsync: createMoodGraph } = Api.moodGraph.create.useMutation()
  const { mutateAsync: createPlaylist } = Api.user.update.useMutation()

  const handleThemeChange = (value: string) => {
    setSelectedTheme(value)
  }

  const handleDateChange = (date: any) => {
    setSelectedDate(dayjs(date).format('YYYY-MM-DD'))
  }

  const handleNoteSave = () => {
    // Save note logic here
    enqueueSnackbar('Note saved successfully!', { variant: 'success' })
  }

  const handleAddSong = () => {
    if (playlistName && song) {
      const updatedPlaylists = playlists.map(playlist =>
        playlist.name === playlistName
          ? { ...playlist, songs: [...playlist.songs, song] }
          : playlist,
      )
      setPlaylists(updatedPlaylists)
      setSong('')
    }
  }

  const handleCreatePlaylist = () => {
    if (playlistName) {
      setPlaylists([...playlists, { name: playlistName, songs: [] }])
      setPlaylistName('')
    }
  }

  const handleWellnessTipShare = async () => {
    await createMoodGraph({
      data: {
        moodLevel:
          mood === 'neutral'
            ? 5
            : mood === 'optimistic'
              ? 8
              : mood === 'frustrated'
                ? 2
                : 5,
        date: selectedDate,
        userId: user?.id,
      },
    })
    enqueueSnackbar('Wellness tip shared successfully!', { variant: 'success' })
    refetchMoodGraphs()
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Powerhouse</Title>
      <Paragraph>
        Manage your themes, notes, playlists, and wellness tips here.
      </Paragraph>

      <Card title="Change Powerhouse Theme">
        <Select
          defaultValue={selectedTheme}
          style={{ width: 200 }}
          onChange={handleThemeChange}
        >
          <Option value="breeze">Breeze</Option>
          <Option value="rainstorm">Rainstorm</Option>
          <Option value="murkiness">Murkiness</Option>
          <Option value="spaces">Spaces</Option>
        </Select>
        <div style={{ marginTop: 20 }}>
          <img
            src={`https://i.postimg.cc/${selectedTheme === 'breeze' ? 'nVYvm3cF/5a8a2cf75378b239872b275ee99d5787.gif' : selectedTheme === 'rainstorm' ? 'HsCtDDwX/lv-0-20240908132519.gif' : selectedTheme === 'murkiness' ? 'FHkFjq6C/5a987d8fab6ac10fa10351b54c6efe83.gif' : 'L83n9M21/ab872141c38e8b520491c2474b0dde5f.gif'}`}
            alt="Theme GIF"
            style={{ width: '100%' }}
          />
        </div>
      </Card>

      <Card title="Calendar and Notes" style={{ marginTop: 20 }}>
        <Calendar fullscreen={false} onSelect={handleDateChange} />
        <TextArea
          rows={4}
          value={notes}
          onChange={e => setNotes(e.target.value)}
          placeholder="Write your notes here..."
          style={{ marginTop: 20 }}
        />
        <Button
          type="primary"
          onClick={handleNoteSave}
          style={{ marginTop: 10 }}
        >
          Save Note
        </Button>
      </Card>

      <Card title="Spotify Playlists" style={{ marginTop: 20 }}>
        <Input
          value={playlistName}
          onChange={e => setPlaylistName(e.target.value)}
          placeholder="Playlist Name"
        />
        <Button
          type="primary"
          onClick={handleCreatePlaylist}
          style={{ marginTop: 10 }}
        >
          Create Playlist
        </Button>
        <Select
          value={playlistName}
          style={{ width: 200, marginTop: 10 }}
          onChange={value => setPlaylistName(value)}
        >
          {playlists.map(playlist => (
            <Option key={playlist.name} value={playlist.name}>
              {playlist.name}
            </Option>
          ))}
        </Select>
        <Input
          value={song}
          onChange={e => setSong(e.target.value)}
          placeholder="Add Song"
          style={{ marginTop: 10 }}
        />
        <Button
          type="primary"
          onClick={handleAddSong}
          style={{ marginTop: 10 }}
        >
          Add Song
        </Button>
        <List
          header={<div>Songs</div>}
          bordered
          dataSource={
            playlists.find(playlist => playlist.name === playlistName)?.songs ||
            []
          }
          renderItem={item => <List.Item>{item}</List.Item>}
          style={{ marginTop: 20 }}
        />
      </Card>

      <Card title="Share Wellness Tip" style={{ marginTop: 20 }}>
        <TextArea
          rows={4}
          value={wellnessTip}
          onChange={e => setWellnessTip(e.target.value)}
          placeholder="Share your wellness tip..."
        />
        <Radio.Group
          onChange={e => setMood(e.target.value)}
          value={mood}
          style={{ marginTop: 10 }}
        >
          <Radio.Button value="neutral">
            <MehOutlined /> Neutral
          </Radio.Button>
          <Radio.Button value="frustrated">
            <FrownOutlined /> Frustrated
          </Radio.Button>
          <Radio.Button value="optimistic">
            <SmileOutlined /> Optimistic
          </Radio.Button>
        </Radio.Group>
        <Button
          type="primary"
          onClick={handleWellnessTipShare}
          style={{ marginTop: 10 }}
        >
          Share Tip
        </Button>
      </Card>

      <Card title="Mood Graph" style={{ marginTop: 20 }}>
        {isLoadingMoodGraphs ? (
          <Text>Loading...</Text>
        ) : (
          <List
            header={<div>Mood Graph</div>}
            bordered
            dataSource={userMoodGraphs?.moodGraphs || []}
            renderItem={item => (
              <List.Item>
                {dayjs(item.date).format('YYYY-MM-DD')}: {item.moodLevel}
              </List.Item>
            )}
          />
        )}
      </Card>
    </PageLayout>
  )
}
