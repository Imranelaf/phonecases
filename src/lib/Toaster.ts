import { useToast } from "@/hooks/use-toast";

export default function Toaster(type:any){
    const { toast } = useToast()

    toast({
        title:`${type} type is not supported`,
        description:'Please choose JPEG, JPG or PNG image',
        variant:'destructive'
    })

}