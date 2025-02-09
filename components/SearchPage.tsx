"use client"
import {useDebouncedCallback} from "use-debounce"
import { usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SearchPage(){
  const [isTyping, setIsTyping] = useState(false)
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const handleSearch =useDebouncedCallback((searchTerm:string) =>{
    const params = new  URLSearchParams(searchParams);
    setIsTyping(searchTerm.trim() !== "")
    if (searchTerm){
      params.set("query", searchTerm)
    }else{
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300)
  return(
      <input data-test="search-input"
      defaultValue={searchParams.get('query')?.toString()}
      type="text" placeholder="Search products...." className="p-2 ml-7 mr-5 placeholder:italic text-slate-800 placeholder:text-slate-400 
      min-w-96 rounded-full"
      onChange={(e) =>{handleSearch(e.target.value)}}/>
  )
}