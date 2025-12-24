import React, { useEffect, useState } from 'react'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/api/characters`)
      const data = await response.json()
      // if (data && data.results) {
      //   setData(data.results)
      // }
      setData(data)
      setLoading(false)
    } catch (error) {
      setErrorMsg(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // ✔ اول loading را چک کن
  if (loading) {
    return <div>data is loading...</div>
  }

  // ✔ خطا را چک کن
  if (errorMsg) {
    return <div>Error: {errorMsg.message}</div>
  }

  // ✔ اگر دیتا نبود
  if (!data || data.length === 0) {
    return <div>there is no data!</div>
  }

  const randomIndex = Math.floor(Math.random() * data.length)
  const randomCharacter = data[randomIndex]

  return (
    <div>
      <img
        alt="cover"
        src="/cover.webp"
        className="w-full h-full object-cover"
      />

      <div className="bg-gray-200 shadow-lg rounded-lg p-4 m-4 w-64 text-center absolute top-1.5 left-1/2">
        {/* <h1 className="text-xl font-bold text-gray-800">{randomCharacter.name}</h1> */}
        {/* <p>{randomCharacter.height}</p>
        <p>{randomCharacter.hair_color}</p> */}
        <img
          src={`${API_URL}${randomCharacter.image}`}
          alt={randomCharacter.name}
          className="w-full h-70 object-fill rounded"
        />
        <h1 className="text-xl font-bold mt-2">{randomCharacter.name}</h1>
      </div>
    </div>
  )
}

export default Home