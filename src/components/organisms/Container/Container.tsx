import { useState, useEffect } from "react";
import { useAuthStore } from "../../../stores/auth";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";
import { UserCard } from "../../molecules/UserCard/UserCard";
import { User } from "./Container.type";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";

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
  const [searchParams, setSearchParams] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData("/api/users?search="+searchParams, token)
      .then((data) =>
        data.status === 200 ? setUsers(data.result.data.users) : logout()
      )
      .catch((error) => console.error(error.message))
      .finally(() => setLoading(false));
  }, [logout, token, searchParams]);

  return (
    <div className="p-6 space-y-5">
      <SearchBar label="" value={searchParams} onChange={(e) => (setSearchParams(e.target.value))}/>
      {!loading ? (
        <div className="flex gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {users.map(
            ({ id, firstName, lastName, email, status, dateOfBirth }) => (
              <UserCard
                key={id}
                name={`${firstName} ${lastName || ""}`}
                email={email}
                status={status}
                birthday={dateOfBirth}
              />
            )
          )}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};
