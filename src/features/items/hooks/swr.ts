import useSWR, { SWRConfiguration } from "swr";

import { Item } from "@/lib/items/types";

const itemsFetcher = (url: string): Promise<Item[]> =>
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
  const { data, isLoading, error } = useSWR<Item[]>(
    open ? `/api/items/search?q=${encodeURIComponent(query)}&limit=5` : null,
    itemsFetcher,
    config
  );

  return {
    data,
    isLoading,
    error,
  };
};
