import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';

export const venueRouter = router({
  getVenue: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.venues.findFirst({
      where: {
        name: input,
      },
    });
  }),
  getVenueFeatures: publicProcedure
    .input(z.number())
    .query(({ ctx, input }) => {
      return ctx.prisma.features.findMany({
        where: {
          venueID: input,
        },
      });
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return 'you can see this secret message!';
  }),
});
