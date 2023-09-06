import { router } from '../trpc';
import { reserveRouter } from './reserve';
import { userRouter } from './user';
import { venueRouter } from './venue';

export const appRouter = router({
  user: userRouter,
  reserve: reserveRouter,
  venue: venueRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
