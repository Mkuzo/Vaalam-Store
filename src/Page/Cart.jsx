import { useContext } from "react"
import { context } from "../App"
export default function Cart(){
    const {store,setStore} = useContext(context)
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
                                <button>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}