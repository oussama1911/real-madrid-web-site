import { PicsType as Pics } from "../types/picsTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getPics() {
    const res =  await axios.get(`${apiUrl}/pics`);
    return res.data;
}

export async function createPics(pics: Pics) {
    const res = await axios.post(`${apiUrl}/pics`, pics);
    return res.data;
}

export async function updatePics(id: string, pics: Pics) {
    const res = await axios.put(`${apiUrl}/pics/${id}`, pics);
    return res.data;
}

export async function deletePics(id: string) {
    const res = await axios.delete(`${apiUrl}/pics/${id}`);
    return res.data;
}