import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Genre> ('/genres')
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,

  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres;