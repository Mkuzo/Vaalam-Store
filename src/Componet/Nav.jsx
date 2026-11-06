import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
export default function Nav(){
    const navigate = useNavigate()
    const location = useLocation()
    const [activate,setActivate] = useState()
    const [hide,setHide] = useState(false)
    function handleHome(){
        navigate('/')
    }    
    function handleAbout(){
        navigate('/About')
    }    
    function handleProduct(){
        navigate('/Product')
    }    
    function handleCart(){
        navigate('/Cart')
    }    function handleContact(){
        navigate('/Contact')
    }
    function hiding(){
        if(hide === true){
            setHide(false)
        }else{
            setHide(true)
        }
    }
    useEffect(function(){
        const {pathname} = location
        setActivate(pathname)
    },[location])
    return(
        <div>
            <div className="navigation-wrapper">
                <div className="navigation">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul>
                        <li onClick={handleHome} className={activate === '/' ? 'active' : ""}>Home</li>
                        <li onClick={handleAbout} className={activate === '/About' ? 'active' : ""}>About</li>
                        <li onClick={handleProduct} className={activate === '/Product' ? 'active' : ""}>Product</li>
                        <li onClick={handleCart} className={activate === '/Cart' ? 'active' : ""}>Cart</li>
                        <li onClick={handleContact} className={activate === '/Contact' ? 'active' : ""}>Contact</li>
                    </ul>
                </div>
            </div>
            <div className="smaller-device">
                <div className="smaller-logo">
                    <h1>VALOHAY STORE</h1>
                </div>
                <div className="smaller-display">
                    <button onClick={hiding}>Links</button>
                    {hide === true ? 
                        <div className="block">
                            <ul>
                                <li onClick={handleHome}>Home</li>
                                <li onClick={handleAbout}>About</li>
                                <li onClick={handleProduct}>Product</li>
                                <li onClick={handleCart}>Cart</li>
                                <li onClick={handleContact}>Contact</li>
                            </ul>
                        </div>    
                :""}
                </div>
            </div>
        </div>
    )
}