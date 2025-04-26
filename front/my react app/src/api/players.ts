
import { PlayersType as Players } from "../types/playersTypes";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export async function getPlayers() {
    const res = await axios.get(`${apiUrl}/players`);
    return res.data;
}

export async function createPlayers(players: Players) {
    const res = await axios.post(`${apiUrl}/players`, players);
    return res.data;
}

export async function updatePlayers(id: string, players: Players) {
    const res = await axios.put(`${apiUrl}/players/${id}`, players);
    return res.data;
}

export async function deletePlayers(id: string) {
    const res = await axios.delete(`${apiUrl}/players/${id}`);
    return res.data;
}