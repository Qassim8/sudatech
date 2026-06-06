import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <BsSearch className="text-(--text-color) hover:text-(--hover-color) transition-colors duration-300" />
      <input
        type="text"
        placeholder="البحث عن  راوتـرات، مودمات، أجهزة ذكية والمزيد..."
        className="w-full py-2 px-4 placeholder:text-sm focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
