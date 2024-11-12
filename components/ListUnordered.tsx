import React from "react";

export default function List({children}:{children:React.ReactNode}){
    return(
        <ul className="flex flex-wrap divide-y divide-slate-100">
            {children}
        </ul>
    )
}