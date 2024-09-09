import { Trpc } from '@/core/trpc/server'
import { z } from 'zod'
import { DatabaseUnprotected } from '@/core/database/internal/unprotected'

export const PlaylistRouter = Trpc.createRouter({
  createPlaylist: Trpc.procedure
    .input(
      z.object({
        name: z.string(),
        coverImage: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return DatabaseUnprotected.playlist.create({
        data: {
          name: input.name,
          coverImage: input.coverImage,
          userId: input.userId,
        },
      })
    }),

  addSongToPlaylist: Trpc.procedure
    .input(
      z.object({
        playlistId: z.string(),
        songId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return DatabaseUnprotected.playlistSong.create({
        data: {
          playlistId: input.playlistId,
          songId: input.songId,
        },
      })
    }),

  getUserSavedSongs: Trpc.procedure
    .input(
      z.object({
        userId: z.string(),
      }),
    )
    .query(async ({ input }) => {
      return DatabaseUnprotected.song.findMany({
        where: {
          playlists: {
            some: {
              playlist: {
                userId: input.userId,
              },
            },
          },
        },
      })
    }),

  getRecommendedSongs: Trpc.procedure.query(async () => {
    return DatabaseUnprotected.song.findMany({
      take: 10,
      orderBy: {
        popularity: 'desc',
      },
    })
  }),
})
