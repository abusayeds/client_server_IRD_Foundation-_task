"use client";

import Cart from "@/components/Cart";
import Category from "@/components/Category";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { IoIosMenu } from "react-icons/io";

export default function Home() {
  const [duas, setSetDuas] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const searchParams = useSearchParams();

  const data = useMemo(() => {
    return searchParams.getAll("dua").map((item) => {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error("Error parsing item:", error);
        return null;
      }
    });
  }, [searchParams]);

  const [key, setKey] = useState("cat_id");
  const [value, setValue] = useState("1");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data.length > 0) {
          const response = await axios.get(
            `https://sqlite-node-ts.vercel.app/api/dua?${data[0].name}=${data[0].value}`
          );
          setSetDuas(response?.data?.subCategories);
        } else {
          const response = await axios.get(
            `https://sqlite-node-ts.vercel.app/api/dua?${key}=${value}`
          );
          setSetDuas(response?.data?.subCategories);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [data, key, value]);

  return (
    <div className="md:w-[870px] md:mb-5 mb-24 relative">
      {/* Category Menu */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-bodyPrimaryColor transform duration-300 z-50 ${
          isCategoryOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Category
          closeCategory={() => setIsCategoryOpen(false)}
          condition="false"
        />
      </div>

      {/* Toggle Button */}
      <div className="flex items-center gap-4 m-4 p-4 rounded-2xl md:hidden bg-bodyPrimaryColor">
        <IoIosMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsCategoryOpen(true)}
        />
        <p>Dua's importance</p>
      </div>

      {/* Dua List */}
      {duas.length > 0 ? (
        <div className="flex flex-col gap-6 px-4 md:px-8">
          {duas?.map((dua, index) => (
            <Cart key={index} data={dua}></Cart>
          ))}
        </div>
      ) : (
        <div className="w-full h-72">
          <p className="w-full text-xs md:text-3xl md:ml-16 mt-8 ml-4 text-center text-primarycolor">
            Not found Islamic items, in-sha-all coming soon
          </p>
        </div>
      )}
    </div>
  );
}
