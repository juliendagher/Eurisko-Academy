import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, ButtonVariant } from "../../atoms/Button";
import { UserCardProps } from "./UserCard.type";
import axios from "axios";
import { useAuthStore } from "../../../stores/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const UserCard: React.FC<UserCardProps> = ({
  id,
  name,
  email,
  status,
  birthday,
}) => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axios.delete(`/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("User deleted successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return (
    <div
      key={id}
      className="p-5 space-y-5 bg-[#FFFFFF] rounded shadow-lg dark:bg-[#205295]"
    >
      <div className="flex justify-center items-center">
        <p className="flex justify-center items-center text-[#FFFFFF] font-bold text-xl bg-[#3251D0] dark:bg-[#144272] rounded rounded-full h-15 w-15">
          {name
            .split(" ")
            .map((word: string) => word[0])
            .join("")
            .toUpperCase()}
        </p>
      </div>
      <div>
        <p className="text-lg font-bold dark:text-white">{name}</p>
        <p className="text-xs text-[#595857] dark:text-gray-200">
          Email: {email}
        </p>
        <p className="text-xs text-[#595857] dark:text-gray-200">
          Status: {status}
        </p>
        <p className="text-xs text-[#595857] dark:text-gray-200">
          Date of birth: {birthday}
        </p>
      </div>
      <div className="flex justify-end space-x-3">
        <Button className="py-1 text-xs" onClick={()=>navigate(`/dashboard/edit/${id}`)}>Edit</Button>
        <Button
          variant={ButtonVariant.DANGER}
          className="py-1 text-xs"
          onClick={() => mutate()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
