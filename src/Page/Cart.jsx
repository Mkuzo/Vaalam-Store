import { useContext, useEffect } from "react"
import { useState } from "react"
import { context } from "../App"
export default function Cart(){
    const {store,setStore} = useContext(context)
    const [total,setTotal] = useState()   
    function remove(e){
        if(store.length > 0){
           const item = store.filter(function(res){
                return(
                    e.id !== res.id 
                )
            })
            setStore(item)
            // controll()
        }else{
            // localStorage.removeItem('storing')
            // setShow([])
            alert('Empty Store')
            // controll()
        }
    }

    function add(){
        let sum = 0
        if(store.length > 0){
            store.map(function(res){
                sum += res.price
            })
        // console.log(sum)
            setTotal(sum)
        }
        else{
            setTotal(0)
        }
    }
    useEffect(function(){
        add()
    },[store])
    // useEffect(function(){
    //     controll()
    // },[])
    // useEffect(function(){
    //     controll()
    // },[store])
    return(
        <div className="cart">
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
            <p>Total:{total}</p>
        </div>
    )
}