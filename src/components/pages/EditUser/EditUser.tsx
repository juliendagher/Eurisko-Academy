import { useMutation } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import { UserDetailsForm } from "../../organisms/UserDetailsForm";
import { UserData } from "../../organisms/UserDetailsForm";
import axios from "axios";
import { useAuthStore } from "../../../stores/auth";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../../atoms/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

export const EditUser = () => {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: async () =>
      await axios
        .get(`/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data.result.data.user),
  });

  const editUser = async (data: UserData) => {
    const response = await axios.put(`/api/users/${id}`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      toast.success("Details Updated Successfully");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return isLoading === true ? (
    <LoadingSpinner />
  ) : (
    <UserDetailsForm
      defaultValues={data}
      title="Edit User"
      onSubmit={(data) => mutate(data)}
      isSubmitting={isPending}
    />
  );
};
