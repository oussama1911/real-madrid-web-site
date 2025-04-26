import { NewsType } from "../types/newsTypes"
import { Link } from "react-router-dom"



const News = ({ news }: { news: NewsType }) => {


    return (
        <div className="news-item">
            <Link to={`/news/${news._id}`}>
                <p>{news.title}</p>
                <img src={news.imageUrl} alt="poster" />
                <p>{news.text}</p>
            </Link>
        </div>
    )
}

export default News