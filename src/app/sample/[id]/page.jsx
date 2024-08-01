'use client'
import { useEffect } from "react"

export default function ProductId({ params }) {
    useEffect(() => {
        localStorage.setItem('name', 'omid')
    })

    return (
        <h1>{params.id}</h1>
    )
}