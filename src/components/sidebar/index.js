import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Tare from "../../assets/images/T_image1.png"

const Sidebar = () => (
<div className='nav-bar'>
    <Link to='/'>
        <img src={Tare} alt="logo"  className= 'logo'/>    
    </Link>
    <h2> </h2>
    <nav>
<NavLink exact="true " activeclassname="active" to="/" > 
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" padding='6px' fill="white" className="bi bi-house-fill" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
</NavLink>
<NavLink exact="true" activeclassname="active" classname="about-link" to="/about">
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
</svg>
</NavLink>
<NavLink exact="true" activeclassname="active" classname="contact-link" to="/Contacts">

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" padding='6px' fill="white" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
</NavLink>

   
    </nav>

</div>
)

export default Sidebar;