import {Filme} from "../../types/types";
import tmdbApi from "./axios";

type Data = {
    results: Filme[];
}

export const getTrendMovies = async () => {
    try {
        const res = await tmdbApi.get<Data>("/trending/movie/week?language=pt-BR");
        return res.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes em tendência:", error);
        return [];
    }
};

export const getMovieDetails = async (id: number) : Promise<Filme | undefined> => {
    try {
        const res = await tmdbApi.get<Filme>(`/movie/${id}?language=pt-BR`);
        return res.data;
    } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
        return undefined;
    }
};

export const getNowPlaying = async () => {
    try {
        const res = await tmdbApi.get<Data>("/movie/now_playing?language=pt-BR&page=1");
        return res.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes em tendência:", error);
        return [];
    }
};

export const getPopulares = async () => {
    try {
        const res = await tmdbApi.get<Data>("/movie/popular?language=pt-BR&page=1");
        return res.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes em tendência:", error);
        return [];
    }
};

export const topFilmes = async () => {
    try {
        const res = await tmdbApi.get<Data>("/movie/top_rated?language=pt-BR&page=1");
        return res.data.results;
    } catch (error) {
        console.error("Erro ao buscar filmes em tendência:", error);
        return [];
    }
};

