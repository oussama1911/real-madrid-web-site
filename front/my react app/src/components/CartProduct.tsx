import { useState, useEffect } from "react"
import { ProductType } from "../types/productTypes"
import { getProduct } from "../api/product"
import { useCartContext } from "../context/CartContext"
import { removeProduct, updateQte } from "../api/cart"
import "../styling/productCart.css"

const CartProduct = ({ productId, quantity }: { productId: string, quantity: number }) => {

    const [product, setProduct] = useState<ProductType>()

    const [cart, setCart] = useCartContext()

    useEffect(() => {
        async function fetchProduct() {
            const data = await getProduct(productId);
            console.log(data);
            setProduct(data);
        }
        fetchProduct();
    },[])

    const handleRemove = async ()=>{
        const data = await removeProduct(cart._id, productId) 
        setCart(data)
    }

    const handleAddQte = async () => {
        const res = await updateQte(cart._id, productId, quantity + 1);
        setCart(res);
    }

    const handleSubQte = async () => {
        const res = await updateQte(cart._id, productId, quantity - 1);
        setCart(res);
    }

    return (
        <div className="product-cart-container">
            <img className="product-cart- image" src={product?.imageUrl} alt="" />
            <div className="product-cart-info">
                <p className="product-cart-name">{product?.name}</p>
                
                <p className="product-cart-price">${product?.price}</p>
                <p className="product-cart-description">{product?.description}</p>
                <div className="product-cart-quantity">
                    <button onClick={handleSubQte}> -<i className="fa-solid fa-minus"></i></button>
                    <p>{quantity}</p>
                    <button onClick={handleAddQte}> + <i className="fa-solid fa-plus"></i></button>
                </div>
                <button className="product-cart-remove" onClick={handleRemove}>remove product</button>
                <p className="product-cart-category"> {product?.category}</p>
            </div>
        </div>
    )
}

export default CartProduct