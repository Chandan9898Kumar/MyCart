import React, { useEffect, useState } from "react";
import axios from "axios";
import CartProducts from './RenderCartPage'
const baseUrl = "https://dummyjson.com/products";
const CartList = () => {
    const [data, setData] = useState([]);
    const[load,setLoad]=useState(false)

    // Getting all data when page render first.
    useEffect(() => {
        fetchUser()
        window.addEventListener("scroll", handleScroll); // attaching scroll event listener
    }, [])


    // Implementing infiniteScroller.
    const handleScroll = () => {
        let userScrollHeight = window.innerHeight + window.scrollY;
        let windowBottomHeight = document.documentElement.offsetHeight;

        if (userScrollHeight >= windowBottomHeight) {
            fetchUser();
        }
    };


    // Invoking get method to perform a GET request
    const fetchUser = async () => {
        const url = `${baseUrl}`;
        const response = await axios.get(url);
        setData(response.data.products)
        setLoad(true)
    };

    if(!load){
        return(
            <div className="loader">
        </div>
        )
    }
    return (
        <>
            <div className="productContainer">
                {data.map((prod) => (
                    <CartProducts prods={prod} />
                ))
                }
            </div>
        </>
    );
};

export default CartList;
