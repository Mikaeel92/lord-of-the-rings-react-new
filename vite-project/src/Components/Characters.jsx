import React, { useEffect, useState } from 'react'
import Card from './Card'

const Characters = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchApi = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://lotrapi.co/api/v1/characters')
            const data = await response.json()
            console.log(data)
            if(data && data.results) {
                setData(data.results)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            setErrorMsg(error)
        } 
    }

    useEffect(() => {
        fetchApi()
    },[])
  return (
    <div className='flex w-[500px]'>
            {loading && <div>Loading, Please Wait...</div>}
            {errorMsg && <div>Error: {errorMsg}</div>}
        {data.map((item, index) => (
            <Card key={index} item={item}/>
        ))}
    </div>
  )
}

export default Characters