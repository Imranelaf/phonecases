'use client'

/*
 * This code handles image uploads using `react-dropzone` for drag-and-drop functionality.
 * Features:
 * - Uses `onDropAccepted` and `onDropRejected` for file validation.
 * - Displays error notifications for invalid files using `toast` from shadcn.
 * - Redirects to a configuration page (design) after successful upload.
 * - Uses `useUploadThing` for cloud storage of uploaded images.
 */


import { Progress } from '@/components/ui/progress'
import { useToast } from '@/hooks/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { useImageStore } from '@/Zustand/store'
import { Image, Loader2, LoaderPinwheel } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { startTransition, useState } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'

function Page() {
    const [onDrag, setOnDrag] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const [isPending, setIsPending] = useState(false)

    const router = useRouter()
    const { toast } = useToast()
    const { setImageUrl, setConfigId } = useImageStore()

    const { startUpload, isUploading } = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
            setImageUrl(data.url)
            setConfigId(data.key) // Save `configId` in the store
            setIsPending(true)
            startTransition(() => {
                router.push(`/configure/design?id=${data.key}`)
            })
        },
        onUploadProgress(p) {
            setProgress(p)
        },
    })

    const dropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles, { configId: undefined })
        setOnDrag(false)
    }

    const dropRejected = (fileRejections: FileRejection[]) => {
        const [file] = fileRejections
        toast({
            title: `${file.file.name} type is not supported`,
            description: 'Please choose JPEG, JPG, or PNG type image',
            variant: 'destructive',
        })
        setOnDrag(false)
    }

    return (
        <div className="w-full p-5 min-h-[calc(100vh_-_16.5rem_-_1px)] flex justify-center">
            <Dropzone
                onDropAccepted={dropAccepted}
                onDropRejected={dropRejected}
                accept={{ "image/png": [".png"], "image/jpeg": [".jpeg"], "image/jpg": [".jpg"] }}
                onDragEnter={() => setOnDrag(true)}
                onDragLeave={() => setOnDrag(false)}
            >
                {({ getRootProps, getInputProps }) => (
                    <div
                        className={cn(
                            "relative w-10/12 h-10/12 text-gray-600 bg-slate-100 border border-gray-300 rounded-2xl flex flex-col items-center justify-center",
                            {
                                'bg-gray-200 border-gray-600': onDrag,
                            }
                        )}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        {isUploading ? (
                            <div className="flex flex-col items-center">
                                <LoaderPinwheel className="animate-spin m-2" />
                                <p className="text-gray-600">Uploading...</p>
                                <Progress value={progress} className="mt-2 w-40" />
                            </div>
                        ) : (isPending ? 
                            (<><Loader2 className='animate-spin m-2' />
                            <p>you well be redirecting you soon ...</p>
                            </>


                        ) : (
                            <div className="flex flex-col items-center">
                                <Image className={cn('m-2', { 'animate-bounce': onDrag })} />
                                <p>
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p>PNG, JPG, JPEG</p>
                            </div>
                        ))}
                    </div>
                )}
            </Dropzone>
        </div>
    )
}

export default Page
