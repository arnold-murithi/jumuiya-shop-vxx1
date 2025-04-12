import Signup from "@/components/SignupForm";
import { Suspense } from "react";

export default function page(){
    return (
        <Suspense fallback={<h2 className="text-lg font-semibold">Signing up...</h2>}>
        <Signup/>
        </Suspense>
    )
}