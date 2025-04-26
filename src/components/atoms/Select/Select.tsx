import { SelectProps } from "./Select.type";

const Select: React.FC<SelectProps> = ({
  label,
  options,
  error = "",
  className,
  ...props
}) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
      {label}
    </label>
    <select
      className={
        "border border-gray-400 focus:border-primary rounded p-2 dark:text-white" +
        " " +
        className
      }
      {...props}
    >
      {options.map((optionName) => (
        <option value={optionName}>{optionName}</option>
      ))}
    </select>

    <p className="text-red-500">{error}</p>
  </div>
);

export { Select };
