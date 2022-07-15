import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const DataContext = createContext()

export const DataProvider = ( {children} ) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const loadData = async() => {
        const results = await axios({
            method: "get",
            url: `${process.env.REACT_APP_api}`,
        })
        console.log(results.data.body)
        console.log(results)
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
