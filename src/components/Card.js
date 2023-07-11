import React,{useState,useEffect} from 'react'
import { useDispatchCart,useCart } from './ContextReducer';
import { useRef } from 'react';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOption = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    
//   const handleClick = () => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login")
//     }
//   }
//   const handleQty = (e) => {
//     setQty(e.target.value);
//   }
//   const handleOptions = (e) => {
//     setSize(e.target.value);
//   }
    const handleAddToCart = async() => {
        let food = []
        for(const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if(food !== []){
            if(food.size === size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                return 
            }
            else if(food.size === size){
                await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,img:props.foodItem.img,qty:qty,size:size});
                console.log("Size different so simply ADD one more to the list")
                return
            }
            
            
        }
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,img:props.foodItem.img,qty:qty,size:size});
        // console.log(data);
    }
    let finalPrice = qty*parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    return (

        <div>
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "380px" }} >

                <img src={props.foodItem.img} alt='' className="card-img-top" style={{ width: "18rem", maxHeight: "146px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example text to content.</p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select >
                        <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                            {priceOption.map((data) => {
                                return (
                                    <option key={data} value={data}>{data}</option>
                                )
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                        ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />
                    <div className='btn bg-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</div>
                </div>
            </div>

        </div>

    )
}
