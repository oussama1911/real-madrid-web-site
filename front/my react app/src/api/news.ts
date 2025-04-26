import { NewsType as News } from "../types/newsTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getNews() {
   const res = await axios.get(`${apiUrl}/news`);
    return res.data;
}

export async function createNews(news: News) {
    const res = await axios.post(`${apiUrl}/news`, news);
    return res.data;
}

export async function updateNews(id: string, news: News) {
    const res = await axios.put(`${apiUrl}/news/${id}`, news);
    return res.data;
}

export async function deleteNews(id: string) {
    const res = await axios.delete(`${apiUrl}/news/${id}`);
    return res.data;
}