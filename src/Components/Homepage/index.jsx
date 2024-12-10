import HomeCards from "../../Elements/HomeCards"
import Gallery from "../../Elements/HomeGallery"
import MissionVision from "../../Elements/HomeTabs"
import HomeTeamEl from "../../Elements/HomeTamEl"
import HomeVideo from "../../Elements/HomeVideo"
import LayoutEl from "../../Shared/Layout"
import HomeAboutUs from "../HomeAbout"




const Homepage=()=>{
    const display=(
        <>
        <LayoutEl>
            <HomeVideo/>  
            <HomeCards/>
            <Gallery/>
            <MissionVision/>
            <HomeAboutUs/>
            <HomeTeamEl/>
        </LayoutEl>
        
        </>
    )
    return display
}

export default Homepage