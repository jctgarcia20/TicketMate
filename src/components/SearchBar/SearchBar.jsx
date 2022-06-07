import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ticketmasterService from "../../utilities/ticketmaster-service";
import './SearchBar.css'

export default function SearchBar({ keyword, setKeyword, searchBar }) {

  const [zipcode, setZipcode] = useState('');
  const searchHistory = useNavigate();

  const handleSearch = async () => {
    document.getElementById("searchBtn").hideen = true;
    try {
      await searchBar(zipcode);
      searchHistory.push('/results');
    } catch {
      // placeholder
    }
  }

  return (
    <div>
      <input 
        id='zipcodeInput'
        placeholder='Enter zipcode'
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <input 
        id='keywordInput'
        placeholder='Search concerts, sports and more...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') handleSearch();
        }}
      />
      <button
        id='searchBtn'
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}