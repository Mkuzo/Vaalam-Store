import { useContext } from "react"
import { useState } from "react"
import { context } from "../App"
export default function Cart(){
    const {store,setStore} = useContext(context)
    const [show,setShow] = useState([])
    function remove(e){
        if(store.lenght > 0){
           const item = store.filter(function(res){
                return(
                    e.id !== res.id 
                )
            })
            setStore(item)
            controll()
        }else{
            localStorage.removeItem('storing')
            setShow([])
            alert('Empty Store')
        }
    }
    function controll(){
        const getting = JSON.parse(localStorage.getItem('storing'))
        console.log(getting, 'getting value')
        setShow(getting)
    }
    return(
        <div>
            <div className="product-container">
                {store.map(function(res){
                    return(
                        <div className="product-card" key={res.id}>
                            <div className="product-image">
                                <img src={res.image} alt="" />
                            </div>
                            <div className="product-text">
                                <h1>{res.name}</h1>
                                <p>Price: ${res.price}</p>
                                {/* <a onClick={handleInfo}>View Details</a> */}
                                <button onClick={function(){remove(res)}}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}