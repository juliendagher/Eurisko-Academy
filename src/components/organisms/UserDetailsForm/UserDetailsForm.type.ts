import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim(),
  email: z.string().email("Email is invalid"),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format, expected YYYY-MM-DD"),
  status: z.enum(["active", "locked"], {
    errorMap: () => ({ message: "Choose status" }),
  }),
});

type UserData = z.infer<typeof schema>;

type UserDetailsFormProps = {
  defaultValues?: Partial<UserData>,
  onSubmit: SubmitHandler<UserData>;
  title: string;
  isSubmitting: boolean;
};

export type { UserData, UserDetailsFormProps };
export { schema };

