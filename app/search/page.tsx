"use client"
import React, { useEffect, useState } from 'react'
import  fetchSearch  from '../lib/fetchSearch'
import { Result } from '../types/searchTypes'

type Props ={
    searchParams:{
        q:string,
    }
}
//q is the search term
 function SearchPage({searchParams:{q}}:Props) {
  const [results, setResults] = useState<Result>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  useEffect(() =>{
    const getSearchResults = async() =>{
      setLoading(true)
      try {
        const data:any =await fetchSearch(q)
      setResults(data);
      } catch (error) {
        setError("Results not fetched")
      }
    }
    getSearchResults();
  },[q])

  console.log(results);

  console.log("Hello There")

  return (
    <div className='font-semibold'>
     <h1>Results for {q}</h1>
     <h2>
      {results?.content.total_results}
     </h2>
    </div>
  )
}

export default SearchPage;