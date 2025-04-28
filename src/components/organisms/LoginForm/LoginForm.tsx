import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { FormData, LoginFormProps } from "./LoginForm.type";
import HidePassLogo from "../../../assets/eye-slash.svg";
import ShowPassLogo from "../../../assets/eye.svg";
import { useState } from "react";
import { useAuthStore } from "../../../stores/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./LoginForm.type";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const auth = useAuthStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {mutate, isPending} = useMutation({
    mutationFn: async (data: FormData) => await axios.post("/api/login", data),
    onSuccess: (data) => {
      auth.setTokens(data.data.result.data)
      toast.success("Signed in successfully")
    },
    onError: () => {
      toast.error("Invalid Credentials")
    }
  })

  return (
    <div
      className={
        "flex flex-col items-center justify-center p-7 dark:bg-[#205295]" +
        " " +
        className
      }
    >
      <p className="text-2xl font-bold text-center dark:text-white">Login</p>
      <form
        className="flex flex-col gap-5 w-full h-full"
        onSubmit={handleSubmit(data=>mutate(data))}
      >
        <Input
          className="w-full"
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
        <div className="relative">
          <Input
            className="w-full"
            label="Password"
            type={showPassword ? "text" : "password"}
            error={errors.password?.message}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/3"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <img className="w-5 h-5" src={HidePassLogo} alt="Hide Password" />
            ) : (
              <img className="w-5 h-5" src={ShowPassLogo} alt="Show Password" />
            )}
          </button>
        </div>
        <div className="flex justify-center">
          <Button disabled={isPending} type="submit">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
