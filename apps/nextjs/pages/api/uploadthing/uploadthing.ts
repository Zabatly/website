import { createNextPageApiHandler } from 'uploadthing/next-legacy';

import { uploadFileRouter } from './uploadRouter';

const handler = createNextPageApiHandler({
  router: uploadFileRouter,
});

export default handler;
