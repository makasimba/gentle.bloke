import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("hr");

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching for:", searchQuery, "in location:", location);
    // You can add your search logic or API call here
  };

  return (
<div className="flex flex-col md:flex-row items-center gap-3 bg-white p-3 rounded-lg border border-gray-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-green-100">
  {/* Search Input */}
  <div className="relative flex-1 w-full">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
    <Input
      placeholder=""
      className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:border-green-400 focus:ring-1 focus:ring-green-200 placeholder:text-gray-400 text-gray-700 transition-all duration-200"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    />
  </div>

  {/* Location Selector */}
  <Select value={location} onValueChange={setLocation}>
    <SelectTrigger className="w-full md:w-44 bg-white border border-gray-200 hover:border-green-400 focus:border-green-400 focus:ring-1 focus:ring-green-200 rounded-md transition-all duration-200">
      <div className="flex items-center">
        <MapPin className="mr-2 h-4 w-4 text-gray-500" />
        <SelectValue placeholder="Location" className="text-gray-700" />
      </div>
    </SelectTrigger>
    <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-md">
      {[
        { value: "hr", label: "Harare" },
        { value: "in", label: "Inyanga" },
        { value: "by", label: "Bulawayo" },
        { value: "ms", label: "Masvingo" },
        { value: "kk", label: "Kwekwe" },
        { value: "gr", label: "Gweru" },
        { value: "vc", label: "Victoria Falls" },
      ].map((item) => (
        <SelectItem 
          key={item.value} 
          value={item.value}
          className="px-4 py-2 hover:bg-green-50 text-gray-700 cursor-pointer transition-colors duration-150"
        >
          <div className="flex items-center">
            {item.label}
          </div>
        </SelectItem>
      ))}
    </SelectContent>
  </Select>

  {/* Search Button */}
  <Button 
  onClick={handleSearch}
  className="bg-green-500 hover:bg-green-600 text-white p-2 h-9 w-9 rounded-md transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
>
  <Search size={16} />
</Button>
</div>
  );
};

export default SearchBar;