import { useState, useEffect, useMemo } from "react";
import { useAuthStore } from "../../../stores/auth";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { UserCard } from "../../molecules/UserCard/UserCard";
import { User } from "./Container.type";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import { useSearchParams } from "react-router";
import debounce from "lodash.debounce";

const getData = async (url: string, accessToken: string | null) => {
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  return await response.json();
};

export const Container = () => {
  const token = useAuthStore((state) => state.accessToken);
  const logout = useAuthStore((state) => state.logout);
  const [users, setUsers] = useState<User[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const search = searchParams.get("search") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ search: e.target.value });
  };

  const debouncedFetch = useMemo(() => {
    return debounce((search: string, accessToken: string | null) => {
      getData(`/api/users?search=${search}`, accessToken)
        .then((data) => {
          if (data.status === 200) {
            setUsers(data.result.data.users);
          } else {
            logout();
          }
        })
        .catch((error) => console.error(error.message))
        .finally(() => setLoading(false));
    }, 300);
  }, [logout]);

  useEffect(() => {
    setLoading(true);
    debouncedFetch(search, token);
    return () => {
      debouncedFetch.cancel();
    };
  }, [search, token, debouncedFetch]);

  return (
    <div className="p-6 space-y-5">
      <SearchBar label="" value={search} onChange={handleChange} />
      {!loading ? (
        <div className="flex gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users.length !== 0 ? (
            users.map(
              ({ id, firstName, lastName, email, status, dateOfBirth }) => (
                <UserCard
                  key={id}
                  name={`${firstName} ${lastName || ""}`}
                  email={email}
                  status={status}
                  birthday={dateOfBirth}
                />
              )
            )
          ) : (
            <p className="text-red-500">No results</p>
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
