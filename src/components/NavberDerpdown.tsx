/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const NavberDerpdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleSetting = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <main className="md:min-h-screen">
      <div
        ref={dropdownRef}
        className={`fixed top-0 right-0 md:h-full h-[800px] overflow-y-auto md:w-[350px] w-screen md:bg-bodyPrimaryColor bg-bodyColor z-50 md:rounded-lg transition-all duration-700 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="md:p-6  h-full">
          <div
            onClick={toggleSetting}
            className="mt-5 md:mt-0 flex items-center cursor-pointer"
          >
            <FaAngleLeft className="text-2xl" />
            <p className="text-2xl font-semibold ml-3 text-gray-600">
              Settings
            </p>
          </div>

          <div className="space-y-6 md:h-auto h-[350px] overflow-y-auto p-3 m-4 rounded-3xl bg-white mx-2 md:rounded-4xl">
            <div className=" bg-bodyColor p-2 rounded-lg flex gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/tBF8zX1/Frame-1.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">
                {" "}
                <span className=" text-primarycolor">Language Settting</span>
              </p>
            </div>

            <div className=" bg-bodyColor p-2 rounded-lg flex gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/qYL4RH3/Vector-3.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">General Settting</p>
            </div>
            <div className=" bg-bodyColor p-2 rounded-lg flex gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/bb8qVgS/54-menu-2.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">Font Settting</p>
            </div>
            <div className=" bg-bodyColor p-2 rounded-lg flex gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/bb8qVgS/54-menu-2.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">Appearance Settting</p>
            </div>
            <div className=" bg-bodyColor p-2  rounded-lg flex md:hidden  gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/bb8qVgS/54-menu-2.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">Appearance Settting</p>
            </div>
            <div className=" bg-bodyColor p-2 rounded-lg flex md:hidden  gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/bb8qVgS/54-menu-2.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">Appearance Settting</p>
            </div>
            <div className=" bg-bodyColor p-2 rounded-lg flex md:hidden  gap-4 items-center">
              <ul className="w-8 h-8 rounded-full relative  bg-gray-300">
                <img
                  className="absolute inset-0    m-auto"
                  src="https://i.ibb.co/bb8qVgS/54-menu-2.png"
                  alt=""
                />
              </ul>
              <p className="text-gray-600 ">Appearance Settting</p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={buttonRef}
        className="flex gap-4 items-center justify-end w-full md:mt-[40px] mt-[20px]"
      >
        <img
          src="https://i.ibb.co/Y2JRKWp/Group-174.png"
          alt="Profile"
          className="rounded-full"
        />
        <IoIosSettings
          className="text-primarycolor text-2xl cursor-pointer"
          onClick={toggleSetting}
        />
      </div>
    </main>
  );
};

export default NavberDerpdown;
