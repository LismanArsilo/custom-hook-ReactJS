import React, { useState } from "react";
import { useEffect } from "react";

const Search = ({ handleSearch }) => {
  const initialState = {
    keywoard: "",
  };

  const [search, setSearch] = useState(initialState);

  const handleChange = (e) => {
    setSearch({ ...setSearch, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSearch(search.keywoard);
  };

  useEffect(() => {
    handleSearch(search.keywoard);
  }, [search]);

  return (
    <>
      <form action="#" className="flex justify-center ">
        <div className="flex gap-3">
          <input
            type="text"
            className="border rounded-sm px-2 text-sm"
            onChange={handleChange}
            value={search.keywoard}
            name="keywoard"
          />
          <button
            className="bg-green-300 px-2 rounded-md font-semibold"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
