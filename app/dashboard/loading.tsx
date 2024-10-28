import { Skeleton } from "@/components/ui/skeleton"
 
export default function Loading(){
    return(
        <div className="p-10">
            <h1>Loading products....</h1>
            <div className="m-2 flex flex-wrap justify-between h-auto items-center space-y-4">
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
                <Skeleton className="w-[100px] h-[450px] rounded-md" />
            </div>
        </div>
    )
}