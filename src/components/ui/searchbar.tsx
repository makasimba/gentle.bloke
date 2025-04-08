import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("uk");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery, "in location:", location);
    // You can add your search logic or API call here
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 bg-blue-900 p-3 rounded-md">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          placeholder="Search ToolMinda"
          className="pl-10 w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full md:w-40">
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="eu">Europe</SelectItem>
          <SelectItem value="as">Asia</SelectItem>
        </SelectContent>
      </Select>
      
      <Button 
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto"
      >
        <Search className="mr-2" size={16} />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;