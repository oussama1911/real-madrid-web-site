import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductType } from "../types/productTypes"
import { getProduct } from "../api/product"
import { addProduct } from "../api/cart"
import { useCartContext } from "../context/CartContext"
import "../styling/productDetails.css"



const ProductDetails = () => {

    const { id } = useParams()

    const [product, setProduct] = useState<ProductType>()
    useEffect(() => {
        async function fetchProduct() {
            if (!id) return
            const data = await getProduct(id)
            setProduct(data)
        }
        fetchProduct()
    })

    const [cart, setCart] = useCartContext()

    const handleAddToCart = async () => {
        if (!id) return
        const res = await addProduct(cart._id, id)
        setCart(res)
    }

    if (!product) return <h1>Loading ... if this takes a lot pease check ur connection</h1>

    return (
        <div  className="product-details-container">
            <img className="product-details-image" src={product.imageUrl} alt="" />
            <div className="product-details-info"> 
                <p className="product-details-name">{product.name}</p>
                <p className="product-details-price">$ {product.price}</p>
                <p className="product-details-description">{product.description}</p>
                <p className="product-details-category">{product.category}</p>
                <button onClick={handleAddToCart} className="add-to-cart"> <i className="fa-solid fa-circle-plus"></i>  Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetails