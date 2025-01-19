import { Toaster } from "@/components/ui/toaster";
import Steps from "../components/UI/Steps";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full h-auto flex justify-center">
            <Steps />
            </div>
            {children}
            <Toaster />
        </>
    );
}