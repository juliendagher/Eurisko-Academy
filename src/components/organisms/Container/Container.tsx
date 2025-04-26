import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../../../stores/auth";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { UserCard } from "../../molecules/UserCard/UserCard";
import { User } from "./Container.type";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import axios from "axios";
import type { AxiosError } from "axios";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

const fetchUsers = async (
  search: string,
  token: string | null
): Promise<User[]> => {
  const response = await axios.get(`/api/users?search=${search}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.result.data.users;
};

export const Container = () => {
  const token = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value });
  };

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedSearch(search);
    }, 300);

    handler();

    return () => {
      handler.cancel();
    };
  }, [search]);

  const {
    data: users = [],
    isLoading,
    isError,
    error,
  } = useQuery<User[], AxiosError>({
    queryKey: ["users", debouncedSearch],
    queryFn: () => fetchUsers(debouncedSearch, token),
    enabled: !!token,
    retry: false,
  });

  if (isError && error?.response?.status === 401) {
    logout();
    console.error(error.message);
  }

  return (
    <div className="p-6 space-y-5">
      <SearchBar label="" value={search} onChange={handleChange} />
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p className="text-red-500">Error loading users</p>
      ) : users.length > 0 ? (
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users.map((user) => (
            <UserCard
              id={user.id}
              name={`${user.firstName} ${user.lastName || ""}`}
              email={user.email}
              status={user.status}
              birthday={user.dateOfBirth}
            />
          ))}
        </div>
      ) : (
        <p className="text-red-500">No results</p>
      )}
    </div>
  );
};
