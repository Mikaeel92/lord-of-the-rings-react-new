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
    <div>
        <h1>{item.name}</h1>
        <p>{realmData ? realmData.name : null}</p>
    </div>
  )
}

export default Card