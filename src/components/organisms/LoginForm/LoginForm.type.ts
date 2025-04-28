import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email is invalid"),
  password: z.string().min(1, "Password can't be empty."),
});

type FormData = z.infer<typeof schema>;

interface LoginFormProps {
  className: string;
}

export type { FormData, LoginFormProps };
export { schema };
