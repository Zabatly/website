import { router } from '../trpc';
import { entryRouter } from './entry';
import { reserveRouter } from './reserve';
import { userRouter } from './user';
import { venueRouter } from './venue';

export const appRouter = router({
  entry: entryRouter,
  user: userRouter,
  reserve: reserveRouter,
  venue: venueRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
