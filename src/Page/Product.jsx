import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import image11 from '../assets/image11.jpg'
import image12 from '../assets/image12.jpg'
import { useNavigate } from 'react-router-dom'

export default function Product(){
    const navigate = useNavigate()
    function handleInfo(){
        navigate('/Information')
    }
    const data= [{
        id:1,
        image: image1,
        name: "Car",
        price: 1000
    },{
        id:1,
        image: image2,
        name: "Car",
        price: 2000
    },{
        id:1,
        image: image3,
        name: "Car",
        price: 1500
    },{
        id:2,
        image: image4,
        name: "Smart Watch",
        price: 100
    },{
        id:3,
        image: image5,
        name: "Head Phones",
        price:200
    },{
        id:6,
        image: image6,
        name: "Laptop",
        price: 250
    },{
        id:7,
        image: image7,
        name: "Motor Cycle",
        price: 1000
    },{
        id:8,
        image: image8,
        name: "Shoe",
        price: 50
    },{
        id:9,
        image: image9,
        name: "Hand Bag",
        price: 500
    },{
        id:10,
        image: image10,
        name: "Sun Glasses",
        price: 700
    },{
        id:11,
        image: image11,
        name: "Perfumes",
        price: 200
    },{
        id:12,
        image: image12,
        name: "Make Up",
        price: 250
    },]
    return(
        <div>
            <div className="product-container">
                {data.map(function(res){
                    return(
                        <div className="product-card">
                            <div className="product-image">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="product-text">
                                <h1>{res.name}</h1>
                                <p>Price: ${res.price}</p>
                                {/* <button onClick={handleInfo}>View Details</button> */}
                                {/* <p className='p'>Veiw Details</p> */}
                                <a onClick={handleInfo}>View Details</a>
                                <button>Add To cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}