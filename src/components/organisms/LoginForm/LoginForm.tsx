import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { FormData, LoginFormProps } from "./LoginForm.type";
import HidePassLogo from "../../../assets/eye-slash.svg";
import ShowPassLogo from "../../../assets/eye.svg";
import { useState } from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useAuthStore } from "../../../stores/auth";

async function postData(url: string, email: string, password: string) {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: {
        email,
        password,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  return await response.json();
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const auth = useAuthStore();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("       ");

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if(formData.email !== "" && formData.password !== "") {
        setErrorMessage("")
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    postData("/api/login", formData.email, formData.password)
      .then((data) =>
        data.status === 200 ? auth.setTokens(data.result.data) : setErrorMessage(data.result.message)
      )
      .catch((error) => console.error("Login failed:", error.message))
      .finally(() => setLoading(false));
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center p-7 dark:bg-[#205295]" + " " + className
      }
    >
      <h2 className="text-2xl font-bold text-center dark:text-white">Login</h2>
      <form
        className="flex flex-col gap-5 w-full h-full"
        onSubmit={handleSubmit}
      >
        <Input
          className="w-full"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="relative">
          <Input
            className="w-full"
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            required
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
        <p className="text-xs text-red-500">{errorMessage}</p>
        <div className="flex justify-center">
          <Button
            disabled={loading}
            type="submit"
            onClick={() =>
              formData.email === "" && formData.password === ""
                ? setErrorMessage("Fill required fields.")
                : setErrorMessage("")
            }
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export { LoginForm };
