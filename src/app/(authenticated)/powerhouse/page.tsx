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
  Modal,
  Upload,
} from 'antd'
import {
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
  PlusOutlined,
  UploadOutlined,
} from '@ant-design/icons'
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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')
  const [savedSongs, setSavedSongs] = useState<string[]>([])
  const [recommendedSongs, setRecommendedSongs] = useState<string[]>([])
  const [currentPlaylist, setCurrentPlaylist] = useState<string[]>([])

  const [form] = Form.useForm()

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

  const handleAddToPlaylist = (song: string) => {
    setCurrentPlaylist([...currentPlaylist, song])
  }

  const handleSavePlaylist = async () => {
    if (playlistName && currentPlaylist.length > 0) {
      await createPlaylist({
        where: { id: user?.id },
        data: {
          playlists: {
            create: {
              name: playlistName,
              songs: currentPlaylist,
              coverImage: imageUrl,
            },
          },
        },
      })
      enqueueSnackbar('Playlist saved successfully!', { variant: 'success' })
      setPlaylistName('')
      setCurrentPlaylist([])
      setImageUrl('')
    }
  }

  const handleModalOk = () => {
    form.validateFields().then(values => {
      setPlaylistName(values.playlistName)
      setIsModalVisible(false)
    })
  }

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      enqueueSnackbar('You can only upload JPG/PNG file!', { variant: 'error' })
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      enqueueSnackbar('Image must smaller than 2MB!', { variant: 'error' })
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = (info: any) => {
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.url)
    }
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

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

  useEffect(() => {
    // Fetch saved songs and recommended songs
    // This is a placeholder. Replace with actual API calls.
    setSavedSongs(['Saved Song 1', 'Saved Song 2', 'Saved Song 3'])
    setRecommendedSongs([
      'Recommended Song 1',
      'Recommended Song 2',
      'Recommended Song 3',
    ])
  }, [])

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

      <div style={{ aspectRatio: '16/9', marginTop: 20 }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={() => setIsModalVisible(true)}
              style={{ width: '100%', height: '100%' }}
            >
              Create Playlist
            </Button>
          </Col>
          <Col span={16}>
            <List
              header={<div>Saved Songs</div>}
              bordered
              dataSource={savedSongs}
              renderItem={item => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                  <Button onClick={() => handleAddToPlaylist(item)}>
                    Add to Playlist
                  </Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col span={12}>
            <Card title="Recommended Songs">
              <List
                dataSource={recommendedSongs}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{item}</Typography.Text>
                    <Button onClick={() => handleAddToPlaylist(item)}>
                      Add to Playlist
                    </Button>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Current Playlist">
              <List
                dataSource={currentPlaylist}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text>{item}</Typography.Text>
                  </List.Item>
                )}
              />
              <Button
                type="primary"
                onClick={handleSavePlaylist}
                style={{ marginTop: 16 }}
              >
                Save Playlist
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      <Modal
        title="Create New Playlist"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="playlistName"
            label="Playlist Name"
            rules={[
              { required: true, message: 'Please input the playlist name!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="coverImage" label="Cover Image">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>

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
