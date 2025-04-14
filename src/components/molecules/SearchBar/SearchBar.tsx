import { Input } from "../../atoms/Input";
import { InputProps } from "../../atoms/Input/Input.type";

const SearchBar: React.FC<InputProps> = ({ onChange }) => {
  return (
    <div className="">
      <Input
        onChange={onChange}
        className=""
        label=""
        placeholder="Search users..."
      />
    </div>
  );
};

export { SearchBar };
