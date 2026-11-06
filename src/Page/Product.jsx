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
import image13 from '../assets/image13.jpg'
import image14 from '../assets/image14.jpg'
import image15 from '../assets/image15.jpg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../App'
export default function Product(){
    const {store,setStore} = useContext(context)
    const navigate = useNavigate()
    function handleInfo(){
        navigate('/Information')
    }
    const data= [{
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
        id:4,
        image: image6,
        name: "Laptop",
        price: 250
    },{
        id:5,
        image: image7,
        name: "Motor Cycle",
        price: 1000
    },{
        id:6,
        image: image8,
        name: "Shoe",
        price: 50
    },{
        id:7,
        image: image9,
        name: "Hand Bag",
        price: 500
    },{
        id:8,
        image: image10,
        name: "Sun Glasses",
        price: 700
    },{
        id:9,
        image: image11,
        name: "Perfumes",
        price: 200
    },{
        id:10,
        image: image12,
        name: "Make Up",
        price: 250
    },{
        id:11,
        image: image13,
        name: "Camear",
        price: 500
    },{
        id:12,
        image: image14,
        name: "Smart Tv",
        price: 1500
    },{
        id:13,
        image: image15,
        name: "Heater",
        price: 1500
    },{
        id:14,
        image: image1,
        name: "Car",
        price: 1000
    },{
        id:15,
        image: image2,
        name: "Car",
        price: 2000
    }]
    function buy(e){
        // console.log(e)
        if(store.length > 0){
            store.map(function(res){
                if(e.id !== res.id){
                    setStore(function(res){
                        return([...res,e])
                    })
                }else{
                    alert("Already Exits")
                }
            })
        }else{
            setStore([e])
        }
    }
    return(
        <div>
            <div className="product-container">
                {data.map(function(res){
                    return(
                        <div className="product-card" key={res.id}>
                            <div className="product-image">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="product-text">
                                <h1>{res.name}</h1>
                                <p>Price: ${res.price}</p>
                                {/* <button onClick={handleInfo}>View Details</button> */}
                                {/* <p className='p'>Veiw Details</p> */}
                                <a onClick={handleInfo}>View Details</a>
                                <button onClick={function(){
                                    buy(res)
                                }}>Add To cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}