import { MdSearch } from "react-icons/md";

interface SearchProps {
  handleSearchNote: (searchText: string) => void;
}

export default function Search({ handleSearchNote }: SearchProps) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
}
