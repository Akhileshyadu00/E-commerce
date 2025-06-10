import { createContext, useContext, useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";

 export const AppContext = createContext()

 export const AppContextProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(true);
    const [seller, setSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
      setProducts(products)

    }

    useEffect(() => {
      fetchProducts();
    }, [])



    const value = {navigate, user, setUser, seller, setSeller, showUserLogin, setShowUserLogin, products};


    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
 }

 export const useAppContext = () => {
    return useContext(AppContext)
 }