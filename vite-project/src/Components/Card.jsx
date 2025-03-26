import React, { useEffect, useState } from 'react'

const Card = ({item}) => {
    const [realmData, setRealmData] = useState(null)

    const fetchData = async () => {
        try {
            const response = await fetch(item.realm)
            const data = await response.json()
            if(data) {
                setRealmData(data)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if(item.realm) {
            fetchData()
        }
    }, [item.realm])

  return (
    <div className='bg-gray-200 shadow-lg rounded-lg p-4 m-4 w-64 text-center'>
        <h1 className="text-xl font-bold text-gray-800">{item.name}</h1>
        <p className="text-gray-700">{realmData ? realmData.name : null}</p>
        <p>{item.height}</p>
        <p>{item.hair_color}</p>
    </div>
  )
}

export default Card