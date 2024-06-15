'use client'
import { useEffect } from "react"

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('An error occurred:', error)
    }, [])

    return (
        <div style={{ padding: '10rem' }}>
            <h1>:c</h1>
            <p>There was an Error</p>
            <button onClick={reset}>Try again</button>
        </div>
    )
}