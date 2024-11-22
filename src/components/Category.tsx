/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Category = ({ condition, closeCategory }: any) => {
  const [mainCategories, setMainCategories] = useState([]);
  const router = useRouter();
  const [categories, setCategoriesMap] = useState<{ [key: string]: any[] }>({});
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [subCategories, setSubCategoriesMap] = useState<{
    [key: string]: any[];
  }>({});
  const [activeSubCategoryId, setActiveSubCategoryId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const fetchMainCategory = async () => {
      try {
        const data = await axios.get(
          "https://sqlite-node-ts.vercel.app/api/mainCategory"
        );
        setMainCategories(data?.data?.categories);

        if (data?.data?.categories.length > 0) {
          const firstCategoryId = data.data.categories[0]?.id;
          setActiveCategoryId(firstCategoryId);
          fetchCategories(firstCategoryId);
        }
      } catch (err) {
        console.error("Failed to fetch main categories:", err);
      }
    };

    fetchMainCategory();
  }, []);

  const fetchCategories = async (id: string) => {
    try {
      const data = await axios.get(
        `https://sqlite-node-ts.vercel.app/api/categorise?cat_id=${id}`
      );
      setCategoriesMap((prev) => ({
        ...prev,
        [id]: data?.data?.subCategories,
      }));

      if (data?.data?.subCategories.length > 0) {
        const firstSubCategoryId = data.data.subCategories[0]?.subcat_id;
        setActiveSubCategoryId(firstSubCategoryId);
        fetchSubCategories(firstSubCategoryId);
      }
    } catch (err) {
      console.error("Failed to fetch categories:", err);
    }
  };

  const fetchSubCategories = async (id: string) => {
    try {
      const data = await axios.get(
        `https://sqlite-node-ts.vercel.app/api/sub_categorise?subcat_id=${id}`
      );
      setSubCategoriesMap((prev) => ({
        ...prev,
        [id]: data?.data?.subCategories,
      }));
    } catch (err) {
      console.error("Failed to fetch subcategories:", err);
    }
  };

  const toggleCategories = (id: string) => {
    if (activeCategoryId === id) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(id);
      if (!categories[id]) {
        fetchCategories(id);
      }
    }
  };

  const toggleSubCategories = (id: string) => {
    if (activeSubCategoryId === id) {
      setActiveSubCategoryId(null);
    } else {
      setActiveSubCategoryId(id);
      if (!subCategories[id]) {
        fetchSubCategories(id);
      }
    }
  };

  const handleAllFillter = (name: string, value: string) => {
    const data = [{ name: name, value: value }];

    const query = new URLSearchParams();

    data.forEach((item, index) => {
      query.append("dua", JSON.stringify(item));
    });

    router.push(`/?${query.toString()}`);
    if (condition === "false") {
      closeCategory();
    }
  };
  return (
    <main>
      {condition === "false" && (
        <div className=" bg-primarycolor p-4 flex items-center justify-between text-white  text-lg ">
          <p>Category</p>
          <button onClick={closeCategory}>X</button>
        </div>
      )}
      <div
        className={`relative p-4 h-[500px] overflow-y-auto pb-40 ${
          condition === "false" ? "pb-20" : "pb-40"
        } mt-4 flex flex-col gap-4`}
      >
        {mainCategories?.map((cat: any) => (
          <main key={cat?.cat_id}>
            <div>
              <div
                onClick={() => {
                  toggleCategories(cat?.id);
                  handleAllFillter("cat_id", `${cat.id}`);
                }}
                className={`flex items-center gap-4 cursor-pointer hover:bg-bodyColor  duration-500 p-2 rounded-xl ${
                  activeCategoryId === cat?.id ? "bg-bodyColor " : ""
                }`}
              >
                <img src="https://i.ibb.co/sp43RgL/Frame-1.png" alt="" />
                <ul>
                  <p>{cat?.cat_name_en}</p>
                  <p className="text-sm text-gray-500">
                    SubCategory: {cat?.no_of_subcat}
                  </p>
                </ul>
              </div>

              {activeCategoryId === cat?.id && (
                <div className="mt-2 px-3 py-2">
                  {categories[cat?.id]?.length > 0 ? (
                    <ul className="space-y-2 relative flex flex-col gap-4 border-l-2 border-dotted border-green-500">
                      {categories[cat?.id].map((subCat: any) => (
                        <div key={subCat?.id}>
                          <div
                            onClick={() => {
                              toggleSubCategories(subCat?.subcat_id);
                              handleAllFillter(
                                "subcat_id",
                                `${subCat?.subcat_id}`
                              );
                            }}
                            className={`flex items-start cursor-pointer `}
                          >
                            <FaCircle className="text-green-500 mt-1.5 text-[8px]  absolute left-[-5px]" />
                            <h3
                              className={`ml-6 font-semibold ${
                                activeSubCategoryId === subCat?.subcat_id &&
                                " text-primarycolor"
                              }   text-sm`}
                            >
                              {subCat?.subcat_name_en}
                            </h3>
                          </div>

                          {activeSubCategoryId === subCat?.subcat_id && (
                            <div className="ml-6">
                              {subCategories[subCat?.subcat_id]?.length > 0 ? (
                                subCategories[subCat?.subcat_id].map(
                                  (cat: any, index: number) => (
                                    <div
                                      key={index}
                                      className="flex flex-col my-2"
                                    >
                                      <div
                                        onClick={() =>
                                          handleAllFillter(
                                            "dua_id",
                                            `${cat?.dua_id}`
                                          )
                                        }
                                        className="flex items-center"
                                      >
                                        <RiArrowRightWideLine className="text-primarycolor  text-1xl" />
                                        <p className="ml-2 text-gray-700 text-[14px]">
                                          {cat?.dua_name_en}
                                        </p>
                                      </div>
                                    </div>
                                  )
                                )
                              ) : (
                                <p className="text-sm text-gray-500">
                                  No subcategories found.
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      No subcategories found.
                    </p>
                  )}
                </div>
              )}
            </div>
          </main>
        ))}
      </div>
    </main>
  );
};

export default Category;
