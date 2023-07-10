import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const uploadFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: '16MB', maxFileCount: 4 } })
    // Set permissions and file types for this FileRoute

    .onUploadComplete(({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('[SERVER] Image upload complete: file url', file.url);
    }),
} satisfies FileRouter;

export type uploadFileRouter = typeof uploadFileRouter;
