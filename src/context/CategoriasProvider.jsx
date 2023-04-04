import {useState,useEffect,createContext} from 'react'

const CategoriasContext = createContext()

const categoriasProvider = ({children}) =>{
    return(
        <categoriasProvider
            value={{}}
        >
            {children}

        </categoriasProvider>
    )
}

export{
    categoriasProvider
}
export default CategoriasContext