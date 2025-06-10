import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"


function App() {
  
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <>
    {isSellerPath ? null : <Navbar />}
     
      <div className={`${isSellerPath ? '' : 'px-6 md:px-12 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
   
    </>
  )
}

export default App
