import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { UserDetailsForm } from "../../organisms/UserDetailsForm";
import { UserData } from "../../organisms/UserDetailsForm";
import axios from "axios";
import { useAuthStore } from "../../../stores/auth";
import { toast } from "react-toastify";

export const CreateUser = () => {
  const navigate = useNavigate();
  const accessToken = useAuthStore((state) => state.accessToken);

  const createUser = async (data: UserData) => {
    const response = await axios.post("/api/users", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success("User Added Successfully");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <UserDetailsForm
      title="Add New User"
      onSubmit={(data) => mutate(data)}
      isSubmitting={isPending}
    />
  );
};
