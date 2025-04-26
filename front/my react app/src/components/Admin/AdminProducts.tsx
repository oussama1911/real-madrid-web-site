import { useEffect, useState } from "react"
import { ProductType } from "../../types/productTypes"
import { deleteProduct, getProducts } from "../../api/product"
import ProductForm from "./ProductForm"
import "../../styling/adminProducts.css"

const AdminProducts = () => {
    const [products, setProducts] = useState<ProductType[]>()
    useEffect(() => {
        async function fetchProducts() {
            const data = await getProducts();
            setProducts(data)
        }
        fetchProducts()
    }, [])

    const handleDelete = async (id:string | undefined) => {
        if(!id) return
        await deleteProduct(id)
        setProducts(products?.filter((product:ProductType) => product._id !== id))
    }
     
    return (
        <div className="admin-products-container">
            <div className="admin-product-list">
                {products?.map((product: ProductType) => (
                    <div key={product._id} className="admin-product-item">
                        <img className="admin-product-image" src={product.imageUrl} alt="" />
                        <div className="admin-product-info">
                            <h2 className="admin-product-name">{product.name}</h2>
                            <p className="admin-product-price">{product.price}</p>
                            <p className="admin-product-category">{product.category}</p>
                            <button className="admin-product-btn" onClick={()=>handleDelete(product._id)}><i className="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                ))}
            </div>
            <ProductForm products={products} setProducts={setProducts} />
        </div>
    )
}

export default AdminProducts