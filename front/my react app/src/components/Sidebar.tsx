import { Category } from "../types/categories"
import React from "react"
import "../styling/sidebar.css"

const Sidebar = ({ setCategory }: { category: Category, setCategory: React.Dispatch<React.SetStateAction<Category>> }) => {

    const categories = ['All categories', 'Kits' , 'Mens', 'Womens', 'Training', 'Kids' , 'Accessories', ]

    const handleChangeCategory = (e : React.MouseEvent)=>{
        setCategory(e.currentTarget.innerHTML as Category)
    }

    return (
        <div className="sidebar-container">
            {
                
                    categories.map((cat, i) => {
                        return (
                            <div onClick={(e)=>handleChangeCategory(e)} className="sidebar-item" key={i}>
                                {cat}
                            </div>
                        )
                    })
                
            }
        </div>
    )
}

export default Sidebar