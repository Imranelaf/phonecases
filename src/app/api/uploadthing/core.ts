/* 
  This code sets up a file upload route for images with a maximum size of 4MB.
  It uses valibot for input validation and uploadthing to handle the file upload process.
  The configId is passed as metadata and returned after the upload is complete.
  This setup is lightweight and efficient, leveraging valibot for validation 
  instead of the more commonly used Zod.
*/

import { createUploadthing, type FileRouter } from "uploadthing/next";
import { object, string, optional } from "valibot";

 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
  .input(object({ configId: optional(string()),}))
    .middleware(async ({input }) => {
      return { input};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const configId = metadata.input
      return { configId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;