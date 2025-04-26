import React, { useRef, useState } from 'react'
import { Category } from '../../types/categories'
import { ProductType } from '../../types/productTypes'
import { createProduct } from '../../api/product'
import '../../styling/adminProductForm.css'



const ProductForm = ({ products, setProducts }: { products: ProductType[] | undefined, setProducts: React.Dispatch<React.SetStateAction<ProductType[] | undefined>> }) => {

    const [err, setErr] = useState<string>('')

    const nameRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLInputElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const catRef = useRef<HTMLSelectElement>(null)

    const handleAddProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!nameRef.current || !priceRef.current || !catRef.current) return setErr('missing requierd att')
        const product: ProductType = {
            name: nameRef.current.value,
            price: Number(priceRef.current.value),
            description: descRef.current?.value,
            imageUrl: imgRef.current?.value,
            category: catRef.current.value,
            stock: 1
        }
        const data = await createProduct(product)
        if (!products) return
        setProducts([...products, data])
    }

    return (
        <div className='product-form-container'>
            <form  action="">
                <input className='adminProduct-input-name' type="text" placeholder='name' ref={nameRef} />
                <input className='adminProduct-input-price'  type="number" placeholder='price' ref={priceRef} />
                <input className='adminProduct-input-description' type="text" placeholder='description' ref={descRef} />
                <input className='adminProduct-input-imageUrl' type="text" placeholder='image Url' ref={imgRef} />
                <select className='adminProduct-select' ref={catRef}>
                    <option value={Category.ALL}>All</option>
                    <option value={Category.Kits}>Kits</option>
                    <option value={Category.Mens}>Mens</option>
                    <option value={Category.Womens}>Womens</option>
                    <option value={Category.kids}>Kids</option>
                    <option value={Category.Training}> Training </option>
                    <option value={Category.Accessories}>Accessories</option>
                </select>
                {err && <p className='error'>{err}</p>}
                <button  onClick={handleAddProduct} className='adminProduct-btn'>Add product</button>
            </form>
        </div>
    )
}

export default ProductForm