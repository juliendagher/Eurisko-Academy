import { InputProps } from "./Input.type";

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  className,
  ...props
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
      {label}
    </label>
    <input
      className={
        "border border-gray-400 focus:border-primary rounded p-2 dark:text-white" +
        " " +
        className
      }
      type={type}
      {...props}
    />
  </div>
);

export { Input };
