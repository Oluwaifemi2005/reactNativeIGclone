import { createContext, useState, useEffect, useContext } from "react"
import axios from "axios";


export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    const name = 'Temi'
    const age = 30
    const department = 'IT'


        useEffect(() => {
        const fetchData = async (params) => {
            try {
                const response = await axios.get('https://dummyjson.com/posts');
                setPosts(response.data.posts)
                
            } catch (error) {
                console.error(error);
                
            }
        }
        fetchData()

    }, [])




  return (
    <DataContext.Provider value={{name, age, department, posts}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider

export const useData = () => {
    const context = useContext(DataContext)
    return context;
}