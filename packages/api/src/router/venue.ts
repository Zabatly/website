import { z } from 'zod';
import { protectedProcedure, publicProcedure, router } from '../trpc';
import { RouterOutputs } from '../../../app/utils/trpc.web';

export const venueRouter = router({
  getVenue: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    console.log(input);
    const venue = await ctx.prisma.venues.findFirst({
      where: {
        name: input,
      },
    });

    console.log(venue);

    return venue;
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
