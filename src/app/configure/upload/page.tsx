'use client'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { Image, LoaderPinwheel } from 'lucide-react'
import { useState } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'



function Page() {
    const [onDrag, setOnDrag] = useState<boolean>(false)
    const [progress, setProgress] = useState<number>(0)
    const dropAccepted = () => {
        console.log("file accepted");
        setOnDrag(false)
    }
    const dropRejected = () => { }

    const isUpload = true

    return (
        <div className={"w-full p-5 min-h-[calc(100vh_-_9.5rem)] flex justify-center"}>

            <Dropzone
                onDropAccepted={dropAccepted}
                onDropRejected={dropRejected}
                accept={{ "image/png": [".png"], "image/jpeg": [".jpeg"], "image/jpg": [".jpg"] }}
                onDragEnter={() => setOnDrag(true)}
                onDragLeave={() => setOnDrag(false)}
            >

                {
                    ({ getRootProps, getInputProps }) => (
                        <div className={cn("relative w-10/12 h-10/12 text-gray-600 bg-slate-100 border border-gray-300 rounded-2xl flex flex-col items-center justify-center",
                            {
                                'bg-gray-200 border-gray-600': onDrag
                            }
                        )}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {
                                isUpload ? (<div className='flex flex-col items-center'>
                                    <LoaderPinwheel className='animate-spin m-2' />
                                    <p className='text-gray-600'>Uploading...</p>
                                     <Progress value={progress} className='mt-2 w-40' /></div>) : 
                                     (<div className='flex flex-col items-center'>
                                        <Image  className={cn('m-2', {'animate-bounce': onDrag})}/>
                                        <p> <span className='font-semibold'>Click to upload</span> or drag and drop</p>
                                        <p>PNG, JPG, JPEG</p>
                                     </div>)
                            }
                            
                            
                        </div>
                    )
                }

            </Dropzone>
        </div>



    );
}

export default Page;
