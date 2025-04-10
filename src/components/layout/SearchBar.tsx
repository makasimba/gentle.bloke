import { Search, MapPin } from "lucide-react";
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
    <div className="flex flex-col md:flex-row items-center gap-2 bg-green-100 p-2 rounded-md shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
        <Input
          placeholder="Search For Your Tools"
          className="pl-10 w-full border-0 bg-transparent focus-visible:ring-1 focus-visible:ring-green-300 transition-colors duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>
      
      <Select value={location} onValueChange={setLocation}>
        <SelectTrigger className="w-full md:w-40 bg-white border-gray-200 hover:border-green-300 focus:border-green-300 focus:ring-green-300 transition-colors duration-200">
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-gray-500" />
            <SelectValue placeholder="Select location" />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-200 shadow-lg">
          <SelectItem value="uk" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🇬🇧</span>
              United Kingdom
            </div>
          </SelectItem>
          <SelectItem value="us" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🇺🇸</span>
              United States
            </div>
          </SelectItem>
          <SelectItem value="ca" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🇨🇦</span>
              Canada
            </div>
          </SelectItem>
          <SelectItem value="au" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🇦🇺</span>
              Australia
            </div>
          </SelectItem>
          <SelectItem value="eu" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🇪🇺</span>
              Europe
            </div>
          </SelectItem>
          <SelectItem value="as" className="hover:bg-green-50 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-2">🌏</span>
              Asia
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      
      <Button 
        onClick={handleSearch}
        className="bg-green-500 hover:bg-green-600 text-white w-full md:w-auto transition-colors duration-200 shadow-sm hover:shadow-md"
      >
        <Search className="mr-2" size={16} />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;