

// import LuxuryVilla3D from "../../Elements/Project3D"

import OurProjects from "../../Elements/ProjectEl"
import ProjectGallery from "../../Elements/ProjectGallery/indes"
import Layout from "../../Shared/Layout"
import "./Projects.css"
const Projects=()=>{
    const display=(
        <>
       <Layout>
 
        {/* <LuxuryVilla3D/> */}
        <OurProjects/>
        <ProjectGallery/>
       
       </Layout>
        </>
    )
    return display
}
export default Projects