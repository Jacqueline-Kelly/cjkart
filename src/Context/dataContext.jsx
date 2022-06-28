import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext()

export const DataProvider = ( {children} ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const loadData = async() => {
        const results = await axios({
            method: "get",
            url: "https://gawr0zw85i.execute-api.us-east-2.amazonaws.com/cjart_local",
        })
        console.log(results.data.body)
        setData(results.data.body)
        setIsLoading(false)
    }

    useEffect(() => {
        loadData()
    }, []);

    return (
        <DataContext.Provider value={{ data, isLoading }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext
