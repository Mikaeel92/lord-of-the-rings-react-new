import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://lotrapi.co/api/v1/characters')
            const data = await response.json()
            if(data && data.results) {
                setData(data.results)
                setLoading(false)
            }
        } catch (error) {
            setErrorMsg(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])


    if (data.length === 0) {
        return <div>there is no data!</div>
    }

    const randomIndex = Math.floor(Math.random() * data.length)
    const randomCharacter = data[randomIndex]
    console.log(randomCharacter)

  return (
    <div>
        <img 
        alt='cover' 
        src='/public/cover.webp'
        className='w-full h-full object-cover'/>
        {errorMsg && <di>{errorMsg}</di>}
        {loading && <div>data is loading...</div> }
    <div className='bg-gray-200 shadow-lg rounded-lg p-4 m-4 w-64 text-center absolute top-1.5 left-1/2'>
        <h1 className="text-xl font-bold text-gray-800">{randomCharacter.name}</h1>
        <p>{randomCharacter.height}</p>
        <p>{randomCharacter.hair_color}</p>
    </div>
    </div>
  )
}

export default Home