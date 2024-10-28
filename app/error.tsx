"use client"
import React, { useEffect } from 'react'

function Error({error, reset}:{
    error: Error & {digest?: string}
    reset: () => void
}) {

    
  return (
    <div className="flex items-center justify-center flex-col">
        <h2>Something went wrong at the root level!</h2>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default Error