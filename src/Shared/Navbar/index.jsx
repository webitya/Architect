import {
  FacebookOutlined, InstagramOutlined, LinkedinOutlined, CalendarOutlined,
  MenuOutlined, PhoneOutlined, XOutlined, YoutubeOutlined, MailOutlined, BlockOutlined
} from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarEl = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [NavBar, setNavBar] = useState("relative");

  const sticky = () => {
    let scrollTop = window.scrollY;
    if (scrollTop > 200) {
      setNavBar("fixed");
    } else {
      setNavBar("relative");
    }
  };

  window.addEventListener('scroll', sticky);

  return (
    <div className="flex justify-between items-center px-3  bg-white shadow-lg navBarTop w-100" style={{ position: NavBar }}>
      <div>
        <Link to="/"><img src="/logo1.svg" width="100px" /></Link>
      </div>

      <div className="desktopMenu mt-3">
        <ul className="flex gap-4 items-center  justify-center text-premium-gray">
          <li><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
          <li><Link to="/about-us" style={{textDecoration:"none"}}>About Us</Link></li>
          <li><Link to="/our-projects" style={{textDecoration:"none"}}>Our Projects</Link></li>
          <li><Link to="/services" style={{textDecoration:"none"}}>Services</Link></li>
          <li><Link to="/contact-us" style={{textDecoration:"none"}}>Contact Us</Link></li>
          <li>
            <Link to="https://calendly.com/brightnetadsmedia" style={{textDecoration:"none"}}>
              <Button
                className="custom-button"
                style={{
                  padding: "5px 30px",
                }}
              >
                BOOK APPOINTMENT
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      <div className="HamburgerDiv">
        <MenuOutlined className="hamburgerIcon" onClick={() => setOpenMenu(true)} />
      </div>
{/* 
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} closable>
        <div><img src="/logo111.svg" width="130px" /></div>
        <div className="drawerNav">
          <ul>
            <li onClick={() => setOpenMenu(false)}><Link to="/">Home</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to="/about-us">About Us</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to="/our-projects">our-projects</Link></li>
            <li onClick={() => setOpenMenu(false)}><Link to="/services">Services</Link></li>
            
            <li onClick={() => setOpenMenu(false)}><Link to="/contact-us">Contact Us</Link></li>
            <li>
              <Link to="https://calendly.com/brightnetadsmedia">
                <Button
                  className="custom-button"
                  style={{
                    padding: "15px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                  icon={<CalendarOutlined />}
                >
                  BOOK APPOINTMENT
                </Button>
              </Link>
            </li>
            <li className="flex gap-2">
              <Link to="https://www.instagram.com/brightnetadsmedia.in?igsh=MWwxNTJ5dW90cDFncQ%3D%3D&utm_source=qr">
                <Button className="text-premium-pink"><InstagramOutlined /></Button>
              </Link>
              <Link to="https://x.com/Brightnetads">
                <Button className="text-premium-darkGray"><XOutlined /></Button>
              </Link>
              <Link to="https://www.linkedin.com/in/brightnet-ads-media-rahul-09047b327/">
                <Button className="text-premium-blue"><LinkedinOutlined /></Button>
              </Link>
              <Link to="https://www.youtube.com/@BRIGHTNETADSMEDIA">
                <Button className="text-premium-red"><YoutubeOutlined /></Button>
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=61565595419734">
                <Button className="text-premium-blue"><FacebookOutlined /></Button>
              </Link>
            </li>
            <li>
              <h1>
                <b><PhoneOutlined className="text-premium-green" />Phone:</b> <span>+91 6209585437</span>
              </h1>
            </li>
            <li>
              <h1>
                <b><MailOutlined className="text-premium-blue" />Email:</b> <span>brightnetmedia@gmail.com</span>
              </h1>
            </li>
            <li>
              <h1>
                <b><BlockOutlined className="text-premium-red" />Address:</b> <span>Karam Chowk Harmu Ranchi,<br />Ranchi Jharkhand</span>
              </h1>
            </li>
          </ul>
        </div>
      </Drawer> */}
      <Drawer 
  open={openMenu} 
  onClose={() => setOpenMenu(false)} 
  closable
  bodyStyle={{ backgroundColor: '#1a1a1a', padding: '20px', color: '#fff' }} /* Dark background with padding */
  headerStyle={{ borderBottom: 'none', padding: '20px 0' }} /* Clean header with padding */
>
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <img src="/logo2.svg" width="130px" alt="Logo" />
  </div>
  <div className="drawerNav">
    <ul>
      <li onClick={() => setOpenMenu(false)}><Link to="/">Home</Link></li>
      <li onClick={() => setOpenMenu(false)}><Link to="/about-us">About Us</Link></li>
      <li onClick={() => setOpenMenu(false)}><Link to="/our-projects">Our Projects</Link></li>
      <li onClick={() => setOpenMenu(false)}><Link to="/services">Services</Link></li>
      <li onClick={() => setOpenMenu(false)}><Link to="/contact-us">Contact Us</Link></li>
      <li>
        <Link to="https://calendly.com/brightnetadsmedia">
          <Button
            className="custom-button"
            icon={<CalendarOutlined />}
          >
            BOOK APPOINTMENT
          </Button>
        </Link>
      </li>

      <li className="flex gap-2">
        <Link to="https://www.instagram.com/brightnetadsmedia.in?igsh=MWwxNTJ5dW90cDFncQ%3D%3D&utm_source=qr">
          <Button className="text-premium-pink"><InstagramOutlined /></Button>
        </Link>
        <Link to="https://x.com/Brightnetads">
          <Button className="text-premium-darkGray"><XOutlined /></Button>
        </Link>
        <Link to="https://www.linkedin.com/in/brightnet-ads-media-rahul-09047b327/">
          <Button className="text-premium-blue"><LinkedinOutlined /></Button>
        </Link>
        <Link to="https://www.youtube.com/@BRIGHTNETADSMEDIA">
          <Button className="text-premium-red"><YoutubeOutlined /></Button>
        </Link>
        <Link to="https://www.facebook.com/profile.php?id=61565595419734">
          <Button className="text-premium-blue"><FacebookOutlined /></Button>
        </Link>
      </li>

      <li>
        <h1>
          <b><PhoneOutlined className="text-premium-green" /> Phone:</b> <span>+91 6209585437</span>
        </h1>
      </li>
      <li>
        <h1>
          <b><MailOutlined className="text-premium-blue" /> Email:</b> <span>brightnetmedia@gmail.com</span>
        </h1>
      </li>
      <li>
        <h1>
          <b><BlockOutlined className="text-premium-red" /> Address:</b> 
          <span>Karam Chowk Harmu Ranchi,<br /> Ranchi Jharkhand</span>
        </h1>
      </li>
    </ul>
  </div>
</Drawer>

    </div>
  );
};

export default NavbarEl;
