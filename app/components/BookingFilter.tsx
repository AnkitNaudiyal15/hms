import { useState, useEffect, useRef } from "react";

const sampleLocations = [
  "Rishikesh",
  "Dehradun",
  "Chicago",
  "Miami",
  "San Francisco",
  "Las Vegas",
  "Orlando",
  "Boston",
  "Seattle",
  "Denver",
];

export default function BookingFilter() {
  const [address, setAddress] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (address.trim() === "") {
      setFilteredLocations([]);
      setShowDropdown(false);
      return;
    }

    const filtered = sampleLocations.filter((loc) =>
      loc.toLowerCase().includes(address.toLowerCase())
    );
    setFilteredLocations(filtered);
    setShowDropdown(filtered.length > 0);
  }, [address]);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectLocation = (loc: string) => {
    setAddress(loc);
    setShowDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Search for:
    Address: ${address}
    Check-in: ${checkIn}
    Check-out: ${checkOut}
    Adults: ${adults}
    Children: ${children}`);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0"
    >
      {/* Address with dropdown */}
      <div className="flex-1 relative" ref={dropdownRef}>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter city, hotel, or location"
          autoComplete="off"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          onFocus={() => {
            if (filteredLocations.length > 0) setShowDropdown(true);
          }}
        />
        {showDropdown && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-md w-full mt-1 max-h-48 overflow-auto shadow-lg">
            {filteredLocations.map((loc) => (
              <li
                key={loc}
                onClick={() => selectLocation(loc)}
                className="p-2 cursor-pointer hover:bg-blue-100 "
              >
                {loc}
              </li>
            ))}
            {filteredLocations.length === 0 && (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>

      {/* Check-in Date */}
      <div>
        <label
          htmlFor="checkIn"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Check-in
        </label>
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Check-out Date */}
      <div>
        <label
          htmlFor="checkOut"
          className=" w-full block text-sm font-medium text-gray-700 mb-1"
        >
          Check-out
        </label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Guests: Adults */}
      <div>
        <label
          htmlFor="adults"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Adults
        </label>
        <select
          id="adults"
          value={adults}
          onChange={(e) => setAdults(Number(e.target.value))}
          className=" w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Adults
            </option>
          ))}
        </select>
      </div>

      {/* Guests: Children */}
      <div>
        <label
          htmlFor="children"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Children
        </label>
        <select
          id="children"
          value={children}
          onChange={(e) => setChildren(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i}>
              {i} Children's
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
    {/* Submit Button */}
<div className="md:flex-shrink-0 flex items-center justify-center mt-4">
  <button
    type="submit"
    className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center space-x-2"
  >
    {/* Search Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
      />
    </svg>
    <span>Search</span>
  </button>
</div>

    </form>

  );
}
