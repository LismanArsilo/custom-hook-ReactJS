import React, { useState } from "react";
import Search from "./Search";
import useGetData from "../api/youtube";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { datas, loading, error } = useGetData("/search", searchTerm);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="border min-h-[100vh] border-red-800 p-10 flex flex-col gap-10">
      <Search handleSearch={handleSearch} />
      <div className="">
        {loading ? (
          <div className="flex justify-center items-center mt-64">
            <p className="font-bold">Get Data Loading ...</p>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-5">
            {datas.products &&
              datas.products.map((product) => {
                return (
                  <div className="border border-gray-300 p-3" key={product.id}>
                    <img alt={product.title} src={product.thumbnail} />
                    <div className="">
                      <p className="font-bold">{product.title}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
