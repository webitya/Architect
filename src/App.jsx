import { BrowserRouter,Route, Routes } from "react-router-dom"
import AboutUs from "./Components/AboutUs"
import Projects from "./Components/Projects"
import ContactUs from "./Components/ContactUs"
import "./App.css"
import Homepage from "./Components/Homepage"
import Services from "./Components/Servicess"

const App=()=>{
  const display=(
    <>
      <BrowserRouter>
        <Routes>
           
           <Route path="/" element={<Homepage/>}/>
           <Route path="/about-us" element={<AboutUs/>}/>
           <Route path="/our-projects" element={<Projects/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
  return display
}
export default App