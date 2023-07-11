import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const reserveRouter = router({
  create: publicProcedure
    .input(
      z.object({
        userID: z.number(),
        venueID: z.number(),
        cost: z.number(),
        startTime: z.string(),
        endTime: z.string(),
        guestsNumber: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.reservations.create({
        data: {
          userID: input.userID,
          venueID: input.venueID,
          cost: input.cost,
          startTime: input.startTime,
          endTime: input.endTime,
          guestsNumber: input.guestsNumber,
        },
      });
    }),

  getReservations: protectedProcedure
    .input(z.number())
    .query(({ ctx, input }) => {
      return ctx.prisma.reservations.findMany({
        where: {
          userID: input,
        },
        include: {
          venues: {
            include: {
              categories: true,
              cities: true,
            },
          },
        },
      });
    }),
});
