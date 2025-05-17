import useSWR, { SWRConfiguration } from "swr";

const fetcher = (url: string): Promise<any> =>
  fetch(url).then((res) => res.json());

export const useSearchItems = ({
  open,
  query,
  config,
}: {
  open: boolean;
  query: string;
  config?: SWRConfiguration;
}) => {
  const { data, isLoading, error } = useSWR(
    open ? `/api/items/search?q=${encodeURIComponent(query)}&limit=5` : null,
    fetcher,
    config
  );

  return {
    data,
    isLoading,
    error,
  };
};
