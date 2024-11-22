"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ condions }: any) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    if (debouncedValue) {
      handleAllFillter("dua_name_en", debouncedValue);
    }
  }, [debouncedValue]);

  const handleAllFillter = (name: string, value: string) => {
    const data = [{ name: name, value: value }];
    const query = new URLSearchParams();

    data.forEach((item) => {
      query.append("dua", JSON.stringify(item));
    });

    router.push(`/?${query.toString()}`);
  };

  return (
    <div className="relative mx-2">
      <input
        type="text"
        placeholder="Search by dua name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={`py-2  ${
          condions === "false" ? "pl-4" : " pl-12"
        }    w-full border focus:border-primarycolor rounded-md focus:outline-none`}
      />
      <CiSearch
        className={`absolute top-[10px] ${
          condions === "false" ? "right-3" : " left-3"
        }   text-2xl`}
      />
    </div>
  );
};

export default Search;
