import { useState, useEffect } from 'react'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}

const API = () => {

    const [data, setData] = useState<User[]>([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState(false)

    useEffect(() => {
        async function fetchData(){
            try {
                // throw new Error("Server Error")
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(true)
            }
        }
        fetchData()
    }, [])

    if(error){
        return <h1>Someting is wrong.</h1>
    }


  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">API Calling</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Username</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Website</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Street</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Suite</th>
              <th className="border border-gray-300 px-4 py-2 text-left">City</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Zipcode</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Latitude</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Longitude</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Catch Phrase</th>
              <th className="border border-gray-300 px-4 py-2 text-left">BS</th>
            </tr>
          </thead>
          <tbody>
            {loading ? <div>Loading please wait...</div> :  data.map((apiData) => (
              <tr key={apiData.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{apiData.id}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.name}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.username}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.email}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.phone}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.website}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.street}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.suite}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.city}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.zipcode}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.geo.lat}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.address.geo.lng}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.company.name}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.company.catchPhrase}</td>
                <td className="border border-gray-300 px-4 py-2">{apiData.company.bs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default API