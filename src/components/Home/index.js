import { Link } from 'react-router-dom';
import './index.scss'
import Sidebar from '../sidebar';
import img1 from '../../assets/images/tareimg1.jpeg'


const Home = () => {
    return(
        <>
         <Sidebar/>
        <div className="container home-page">
            <div className='home-img '>
<img            src={img1} alt="me" className='img' />
            </div>
            <div className="text-zone">
                <h1>Hi, <br /> I'm   Tare Michaels</h1>
                <br />
               <h2>Web Developer|Content Creator| Fashion Designer</h2>
     <div className='btn'>
<Link to="/Contacts" className='flat-button'>CONTACT ME</Link> 

     </div>
            </div>

        </div>
        </>
       
    );
}
export default Home;