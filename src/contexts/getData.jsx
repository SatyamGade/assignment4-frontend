import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

const URL = "http://localhost:5000/admin/dashboard";

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(URL, {
                method: "GET"
            });

            const responseData = await response.json();
            if(response.ok){
                setData(responseData);
            }else{
                console.log("error while getting data");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[])

    return (
        <DataContext.Provider value={{data}}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("Context is used outside the provider");
    }
    return context;
}