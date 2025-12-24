import React, { useEffect, useState } from 'react'

const BearersSlider = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const API_URL = import.meta.env.VITE_API_URL

    const fetchBearers = async () => {
        try {
            setLoading(true)
            const res = await fetch(`${API_URL}/api/bearers`)
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBearers()
    }, [])

    if(loading) {
       return <div>Data is loading...</div>
    }

    if(!data || data.length === 0) {
        return <div>No data!</div>
    }

  return (
    <div>
        {
            data.map((item) => (
                <div key={item._id}>
                    <h2>{item.name}</h2>
                    <img alt={item.name} src={`${API_URL}${item.image}`}/>
                    <p>{item.duration}</p>
                    <p>{item.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default BearersSlider