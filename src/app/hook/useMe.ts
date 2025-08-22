import useSWR from "swr";
import { getMe, Me } from "@/lib/auth";

export function useMe() {
  const { data, error, isLoading, mutate } = useSWR<Me>("/me", () => getMe(), {
    revalidateOnFocus: false,
  });
  return { me: data ?? null, isLoading, error, refresh: mutate };
}