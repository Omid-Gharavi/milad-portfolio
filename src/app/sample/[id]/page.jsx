'use client'
import { useEffect, use } from "react";

export default function ProductId(props) {
    const params = use(props.params);
    useEffect(() => {
        localStorage.setItem('name', 'omid')
    })

    return (
        <h1>{params.id}</h1>
    )
}