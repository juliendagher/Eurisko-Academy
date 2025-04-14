import { Input } from "../../atoms/Input";
import { InputProps } from "../../atoms/Input/Input.type";

const SearchBar: React.FC<InputProps> = ({ onChange, value }) => {
  return (
    <div className="">
      <Input
        onChange={onChange}
        className=""
        value={value}
        label=""
        placeholder="Search users..."
      />
    </div>
  );
};

export { SearchBar };
