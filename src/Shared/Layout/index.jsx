import CallToAction from "../CallToAction"
import Footer from "../Footer"
import Navbar from "../Navbar"

import "./Layout.css"
const LayoutEl=(data)=>{
    const display=(
        <>
        <Navbar/>

        {data.children}
        <CallToAction/>
        <Footer/>
        </>
    )
    return display
}
export default LayoutEl