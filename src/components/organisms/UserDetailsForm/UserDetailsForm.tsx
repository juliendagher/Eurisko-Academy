import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, UserData } from "./UserDetailsForm.type";
import { Input } from "../../atoms/Input";
import { Select } from "../../atoms/Select";
import { Button } from "../../atoms/Button";

export const UserDetailsForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      status: "Active",
      dateOfBirth: "",
    },
  });

  const { field: statusField, fieldState: statusState } = useController({
    control,
    name: "status",
  });

  const onSubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        className="flex flex-col dark:bg-[#205295] rounded-xl bg-white shadow-md w-sm gap-3 p-7 w-full h-full "
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="text-2xl font-bold text-center dark:text-white">
          Add New User
        </p>
        <Input
          className="w-full"
          label="First Name:"
          error={errors.firstName?.message}
          {...register("firstName")}
        />
        <Input
          className="w-full"
          label="Last Name:"
          error={errors.lastName?.message}
          {...register("lastName")}
        />
        <Input
          className="w-full"
          label="Email:"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          className="w-full"
          label="Date of Birth:"
          type="date"
          error={errors.dateOfBirth?.message}
          {...register("dateOfBirth")}
        />
        <Select
          className="w-full"
          label="status"
          error={statusState.error?.message}
          options={["Active", "Locked"]}
          value={statusField.value}
          onChange={statusField.onChange}
          onBlur={statusField.onBlur}
          name={statusField.name}
        />
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
