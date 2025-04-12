import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";
import { FormData, LoginFormProps } from "./LoginForm.type";
import { useState } from "react";
import { ChangeEvent } from "react";
import { FormEvent } from "react";

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
    const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Logging in with:", formData);
        // Add login logic here
    };

    return (
        <div className={"flex flex-col items-center justify-center p-7" + " " + className}>
            <h2 className="text-2xl font-bold text-center">Login</h2>
            <form className="flex flex-col gap-5 w-full h-full" onSubmit={handleSubmit}>
                <Input
                    className="w-full"
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    className="w-full"
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <div className="flex justify-center">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
};
  
export {LoginForm};

