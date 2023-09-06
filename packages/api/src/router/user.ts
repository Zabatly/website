/* create user */
//grab the images for the corresponding user
import { router, publicProcedure, protectedProcedure } from '../trpc';
import { z } from 'zod';

export const userRouter = router({
  current: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findFirst({ where: { clerkID: ctx.user.id } });
  }),
  create: protectedProcedure
    .input(
      z.object({
        username: z.string(),
        email: z.string(),
        clerkID: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      //create user and link it to the user
      return ctx.prisma.users.create({
        data: {
          clerkID: input.clerkID,
          username: input.username,
          email: input.email,
        },
      });
    }),
  updateDetails: protectedProcedure
    .input(
      z.object({
        userID: z.number(),
        firstName: z.string(),
        lastName: z.string(),
        address: z.string(),
        phoneNumber: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.userID,
        },
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          address: input.address,
          phoneNumber: input.phoneNumber,
        },
      });
    }),
});

//question: can we get the id from ctx instead of input?
//or will there be no ctx yet because the user is not created yet?
//answer: no, ctx is not available yet because the user is not created yet
