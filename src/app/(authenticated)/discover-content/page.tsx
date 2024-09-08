'use client'

import { useState } from 'react'
import { Typography, Row, Col, Card, Button, Space } from 'antd'
import {
  PlayCircleOutlined,
  ShareAltOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function GetWindOfPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: characterOfTheDay, isLoading: isLoadingCharacter } =
    Api.character.findFirst.useQuery({})
  const { data: quoteOfTheDay, isLoading: isLoadingQuote } =
    Api.banner.findFirst.useQuery({})
  const { data: wellnessTip, isLoading: isLoadingTip } =
    Api.wellnessTip.findFirst.useQuery({})
  const { data: recommendations, isLoading: isLoadingRecommendations } =
    Api.recommendation.findMany.useQuery({ include: { user: true } })
  const { data: socialSharing, isLoading: isLoadingSocial } =
    Api.socialSharing.findMany.useQuery({})

  const [showDescription, setShowDescription] = useState(false)

  const handleShare = (platform: string, url: string) => {
    if (platform === 'WhatsApp') {
      window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank')
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Character of the Day</Title>
      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Card
            cover={
              <div style={{ position: 'relative' }}>
                <video width="100%" height="auto" controls>
                  <source src={characterOfTheDay?.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Title
                  level={2}
                  style={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                    color: 'white',
                  }}
                >
                  {characterOfTheDay?.name}
                </Title>
              </div>
            }
            actions={[
              <Button
                type="link"
                icon={<PlayCircleOutlined />}
                onClick={() => setShowDescription(!showDescription)}
              >
                {showDescription ? 'Hide Description' : 'Show Description'}
              </Button>,
            ]}
          >
            {showDescription && (
              <Paragraph>{characterOfTheDay?.description}</Paragraph>
            )}
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col span={12}>
          <Card>
            <Title level={3}>Quote of the Day</Title>
            <Paragraph>{quoteOfTheDay?.description}</Paragraph>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Title level={3}>Wellness Tip</Title>
            <Paragraph>{wellnessTip?.tip}</Paragraph>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Card>
            <Title level={3}>Song Recommendations</Title>
            <Space direction="horizontal" wrap>
              {recommendations?.map(rec => (
                <Card
                  key={rec.id}
                  cover={<img alt={rec.title} src={rec.imageUrl} />}
                  actions={[
                    <Button
                      type="link"
                      onClick={() =>
                        router.push(`/powerhouse?songId=${rec.id}`)
                      }
                    >
                      Save to Powerhouse
                    </Button>,
                  ]}
                >
                  <Card.Meta title={rec.title} description={rec.description} />
                </Card>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <Card>
            <Title level={3}>Share Content</Title>
            <Space direction="horizontal">
              {socialSharing?.map(share => (
                <Button
                  key={share.id}
                  type="primary"
                  icon={
                    share.platform === 'WhatsApp' ? (
                      <WhatsAppOutlined />
                    ) : (
                      <ShareAltOutlined />
                    )
                  }
                  onClick={() => handleShare(share.platform, share.url)}
                >
                  Share on {share.platform}
                </Button>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
