import useSWR, { SWRConfiguration } from "swr";
import { ITeams } from "../interfaces";

export const useTeams = (url: string, config: SWRConfiguration = {}) => {
  const { data, error } = useSWR<ITeams[]>(`/api${url}`, config);

  return {
    teams: data || [],
    isLoading: !error && !data,
    isError: error,
  };
};
