import React, { useEffect, useState } from 'react'
import Card from './Card'

const Characters = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [input, setInput] = useState('')
    const [filteredData ,setFilteredData] = useState([])

    const fetchApi = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://lotrapi.co/api/v1/characters')
            const data = await response.json()
            console.log(data)
            if(data && data.results) {
                setData(data.results)
                setFilteredData(data.results)
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

    const handleSearch = () => {
        if(input.trim() === '') {
            setFilteredData(data)
        } else {
            const filtred = data.filter((item) => (
                item.name.toLowerCase().includes(input.toLowerCase())
            ))
            setFilteredData(filtred)
        }
    }

  return (
    <div className='flex flex-col'>
        <div className='mt-6 p-4'>
        <input 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder='Search Character...'
        className='p-2 bg-gray-200 rounded-md'/>
        <button 
        className='bg-green-700 p-2 rounded-md text-white ml-2'
        onClick={handleSearch}>Search</button>
        </div>
        <div className='grid grid-cols-5 gap-4 p-4'>
        {loading && <div>Loading, Please Wait...</div>}
            {errorMsg && <div>Error: {errorMsg}</div>}
        {filteredData ? filteredData.map((item, index) => (
            <Card key={index} item={item}/>
        ))
        : data.map((item, index) => (
            <Card key={index} item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Characters