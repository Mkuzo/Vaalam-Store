import logo from '../assets/logo.png'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import { useNavigate } from 'react-router-dom'
export default function Home(){
    const navigate= useNavigate()
    function handleProduct(){
        navigate('/Product')
    }
    return(
        <div>
            <div className="home-container">
                <div className="home-card">
                    <div className="home-image">
                        <img src={logo} alt="" />
                    </div>
                    <div className="home-text">
                        <h1>We sell All Kind Of Product</h1>
                    <p>In This <span>VAALOHAY</span> store we are selling TV's, SmartWatches, Perfumes, Cars and More</p>
                    </div>
                </div>
            </div>
            <div className="read-description">
                <div className="read-container">
                    <div className="read-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>Car</h1>
                    </div>
                </div>
                <div className="read-container">
                    <div className="read-image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>Car</h1>
                    </div>
                </div>
                <div className="read-container">
                    <div className="read-image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>Car</h1>
                    </div>
                </div>
                <div className="read-container">
                    <div className="read-image">
                        <img src={image4} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>Smart Watch</h1>
                    </div>
                </div>
                <div className="read-container">
                    <div className="read-image">
                        <img src={image5} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>HeadPhones</h1>
                    </div>
                </div>
                <div className="read-container">
                    <div className="read-image">
                        <img src={image6} alt="" />
                    </div>
                    <div className="read-text">
                    <h1>Laptop</h1>
                    </div>
                </div>
                <h1>To get More Product Click A Button</h1>
                <button onClick={handleProduct}>Product</button>
            </div>
        </div>
    )
}