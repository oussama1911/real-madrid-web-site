import { addProduct } from "../api/cart"
import { useCartContext } from "../context/CartContext"
import { ProductType } from "../types/productTypes"
import { Link } from "react-router-dom"
import "../styling/product.css";


const Product = ({ product }: { product: ProductType }) => {

    const [cart, setCart] = useCartContext()

    const handleAddToCart = async () => {
        if (!product._id || !cart?._id) return
        const res = await addProduct(cart._id, product._id)
        setCart(res)
    }

    return (
        <div className="product-container">
            <Link to={`/product/${product._id}`}>
                <img className="product-img" src={product.imageUrl} alt="poster" />
                <div className="prodduct-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">$ {product.price}</p>
                    <p className="product-description">{product.description}</p>
                    <p className="product-category">{product.category}</p>
                </div>
            </Link>
            <button className="add-to-cart" onClick={handleAddToCart}><i className="fa-solid fa-circle-plus"></i>     Add to cart</button>

        </div>
    )
}

export default Product