import { useEffect, useState, useRef } from "react";
import { NewsType } from "../types/newsTypes";
import { getNews } from "../api/news";
import "../styling/news.css";

const NewsDetails = () => {
    const [news, setNews] = useState<NewsType[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        async function fetchNews() {
            try {
                const data = await getNews();
                setNews(data);
            } catch (err) {
                console.error("Error fetching news:", err);
                setError("Failed to load news. Please try again later.");
            }
        }
        fetchNews();
    }, []);

    
    useEffect(() => {
        if (news.length > 0) {
            intervalRef.current = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % news.length);
            }, 4000); 
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [news.length]);

    
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % news.length);
        }, 5000);
    };

    const goToNext = () => goToSlide((currentSlide + 1) % news.length);
    const goToPrev = () => goToSlide((currentSlide - 1 + news.length) % news.length);

    if (error) return <h1>{error}</h1>;
    if (!news || news.length === 0) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="slider-container">
            <div className="news-slider" ref={sliderRef}>
                {news.map((newsItem) => (
                    <div key={newsItem._id} className="news-item">
                        <div className="news-container">
                            <img className="news-img" src={newsItem.imageUrl} alt={newsItem.title} />
                            <div className="news-content">
                                <p className="news-title">{newsItem.title}</p>
                                <p className="news-text">{newsItem.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            
            <button className="slider-prev" onClick={goToPrev} aria-label="Previous slide">❮</button>
            <button className="slider-next" onClick={goToNext} aria-label="Next slide">❯</button>
            
            
            <div className="slider-dots">
                {news.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsDetails;