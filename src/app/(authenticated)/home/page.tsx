'use client'

import { Typography, Row, Col, Button, Card } from 'antd'
import { Prisma } from '@prisma/client'
import { useEffect, useState } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: wellnessTips, isLoading: isLoadingTips } =
    Api.wellnessTip.findMany.useQuery({ take: 3 })
  const { data: recommendations, isLoading: isLoadingRecommendations } =
    Api.recommendation.findMany.useQuery({ take: 3, include: { user: true } })

  return (
    <PageLayout layout="narrow">
      <Title level={1}>Welcome to Your Wellness Hub</Title>
      <Paragraph>
        Explore wellness tips, song recommendations, and more to enhance your
        well-being.
      </Paragraph>

      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source
            src="https://sunilthanu789.wistia.com/medias/f9sli8xkfy?embedType=async&seo=true&videoFoam=true&videoWidth=640"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
          }}
        >
          <Title level={1} style={{ color: 'white' }}>
            Life isn't about finding yourself, Life is about creating yourself
          </Title>
        </div>
      </div>

      <Title level={2}>Wellness Tips</Title>
      <Row gutter={[16, 16]} justify="center">
        {wellnessTips
          ?.slice(0, 3)
          .map((tip: Prisma.WellnessTipGetPayload<{}>) => (
            <Col span={8} key={tip.id}>
              <Card title={tip.category}>
                <Text>{tip.tip}</Text>
              </Card>
            </Col>
          ))}
      </Row>

      <Title level={2}>Song Recommendations</Title>
      <Row gutter={[16, 16]} justify="center">
        {recommendations
          ?.slice(0, 3)
          .map(
            (
              rec: Prisma.RecommendationGetPayload<{ include: { user: true } }>,
            ) => (
              <Col span={8} key={rec.id}>
                <Card
                  cover={<img alt={rec.title} src={rec.imageUrl} />}
                  actions={[
                    <Button
                      type="primary"
                      icon={<PlayCircleOutlined />}
                      onClick={() => window.open(rec.description, '_blank')}
                    >
                      Listen
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={rec.title}
                    description={`Recommended by ${rec.user?.name}`}
                  />
                </Card>
              </Col>
            ),
          )}
      </Row>

      <Title level={2}>Introduction to Powerhouse</Title>
      <div style={{ position: 'relative', textAlign: 'left', color: 'white' }}>
        <img
          src="https://i.postimg.cc/L83n9M21/ab872141c38e8b520491c2474b0dde5f.gif"
          alt="Powerhouse Introduction"
          style={{ width: '100%', filter: 'brightness(50%)' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '10%',
            transform: 'translateY(-50%)',
          }}
        >
          <Title level={3}>Discover Powerhouse</Title>
          <Paragraph>
            Join us at Powerhouse to unlock your full potential.
          </Paragraph>
          <Button type="primary" onClick={() => router.push('/powerhouse')}>
            Go to Powerhouse
          </Button>
        </div>
      </div>

      <Title level={2}>Mood Graph</Title>
      <div style={{ position: 'relative', paddingBottom: '52.63%', height: 0 }}>
        <img
          src="https://i.postimg.cc/9Qv34DbR/Picsart-24-09-08-13-44-26-793.jpg"
          alt="Mood Graph Background"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            color: 'white',
          }}
        >
          <Title level={2}>
            Generates a mood graph that visually represents the user’s emotional
            trends over time with AI powered text understanding analysis
          </Title>
        </div>
      </div>
    </PageLayout>
  )
}
