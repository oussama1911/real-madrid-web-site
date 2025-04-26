import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PicsType } from "../types/picsTypes";
import { getPics } from "../api/pics";
import "../styling/pics.css";

const PicsDetails = () => {
    const [pics, setPics] = useState<PicsType[]>([]);
    const [filteredPics, setFilteredPics] = useState<PicsType[]>([]);
    const [activeFilter, setActiveFilter] = useState<string>("all");
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        async function fetchPics() {
            try {
                const data = await getPics();
                console.log(data);
                setPics(data);
                setFilteredPics(data);
            } catch (err) {
                console.error("Error fetching pics:", err);
                setError("Failed to load pics. Please try again later.");
            }
        }
        fetchPics();
    }, []);

    
    useEffect(() => {
        if (filteredPics.length > 0) {
            const interval = setInterval(() => {
                setCurrentSlide((prev) => 
                    prev === filteredPics.length - 1 ? 0 : prev + 1
                );
            }, 3000); 
            return () => clearInterval(interval);
        }
    }, [filteredPics]);

    const handleFilter = (category: string) => {
        setActiveFilter(category);
        if (category === "all") {
            setFilteredPics(pics);
        } else {
            const filtered = pics.filter(pic => pic.category.toLowerCase() === category);
            setFilteredPics(filtered);
        }
        setCurrentSlide(0);
    };

    if (error) return <h1>{error}</h1>;
    if (!pics.length) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="pics-main-container">
            <div className="pics-bond">
                <p className="pics-bond-text">Pics Library</p>
            </div>
            <div className="pics-categories"> 
                <button 
                    className={`training-category ${activeFilter === "all" ? "active" : ""}`}
                    onClick={() => handleFilter("all")}
                >
                    All
                </button>
                <button 
                    className={`training-category ${activeFilter === "training" ? "active" : ""}`}
                    onClick={() => handleFilter("training")}
                >
                    Training
                </button>
                <button 
                    className={`training-match ${activeFilter === "match" ? "active" : ""}`}
                    onClick={() => handleFilter("match")}
                >
                    Match
                </button>
            </div>
            
            <div className="slider-container">
                {filteredPics.length > 0 ? (
                    <div className="slider-wrapper" style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                        transition: 'transform 0.5s ease-in-out'
                    }}>
                        {filteredPics.map((pic, index) => (
                            <div className="slide" key={index}>
                                <div className="pics-div">
                                    <button className="pics-category">{pic.category}</button>
                                </div>
                                <img 
                                    className="pics-img" 
                                    src={pic.imageUrl} 
                                    alt={pic.category} 
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-pics-message">No pictures found in this category</p>
                )}
            </div>

           
            <div className="slider-dots-pics">
                {filteredPics.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PicsDetails;