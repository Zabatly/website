import { router } from '../trpc';
import { entryRouter } from './entry';
import { authRouter } from './auth';
import { userRouter } from './user';
import { venueRouter } from './venue';

export const appRouter = router({
  entry: entryRouter,
  user: userRouter,
  auth: authRouter,
  venue: venueRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
