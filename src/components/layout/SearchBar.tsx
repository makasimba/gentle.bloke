import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("hr");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery, "in location:", location);
    // add your search logic or API call here
  };

  return (
<div className="flex flex-col max-w-sm mx-auto md:flex-row items-center gap-3 bg-white p-2 rounded-lg border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-green-100">
  {/* Search Input */}
  <div className="relative w-full flex-1">
    <Input
      placeholder=""
      className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-400 focus:ring-1 focus:ring-green-200 placeholder:text-gray-400 text-gray-700 transition-all duration-200"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  </div>

  {/* Search Button */}
  <Button
    onClick={handleSearch}
    className="bg-green-500 hover:bg-green-600 text-white p-2 h-9 w-9 rounded-md transition-all duration-200 shadow-sm hover:shadow-md active:scale-95">
    <Search size={16} />
  </Button>
</div>
  );
};

export default SearchBar;