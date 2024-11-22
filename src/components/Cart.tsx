/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { ImPlay2 } from "react-icons/im";

const Cart = ({ data }: { data: any }) => {
  //   console.log(data?.audio);

  return (
    <div className=" flex flex-col gap-6 bg-bodyPrimaryColor p-4  rounded-2xl min-w-full  ">
      <div className=" flex items-center gap-4 ">
        <img src="https://i.ibb.co/WtxQHCt/allah-1-Traced.png" alt="" />
        <p className=" text-primarycolor  text-lg  font-bodyfont">
          {data?.dua_name_en}
        </p>
      </div>
      <div>
        <p className=" text-lg font-titlefont">Say ten Times -</p>
      </div>
      <div>{data?.top_en}</div>
      <div>
        <p className=" text-4xl text-end">{data?.dua_arabic}</p>
      </div>
      {data?.transliteration_en && (
        <div>
          <p className="  font-mono text-lg">
            {" "}
            <span className=" font-semibold">Transliteration : </span>{" "}
            {data?.transliteration_en}
          </p>
        </div>
      )}
      {data?.translation_en && (
        <div className="text-gray-700 text-lg">
          <span className=" font-semibold">Transliteration : </span>
          {data?.translation_en}
        </div>
      )}

      <div>
        <p className=" font-bodyfont text-primarycolor text-lg">Refarense :</p>

        {data?.refference_en && (
          <p className=" text-lg">{data?.refference_en}</p>
        )}
      </div>
      <div className=" flex items-center justify-between">
        <div className="h-12 w-12 relative rounded-full  z-auto bg-primarycolor">
          <button className="w-full h-full flex items-center justify-center">
            <ImPlay2 className="absolute inset-0 text-3xl  text-white  m-auto" />
          </button>
        </div>
        {/* <ImPause2 /> */}
        <div className=" flex md:w-72 w-44 justify-between">
          <img
            className=" h-6 w-6"
            src="https://i.ibb.co/b1dhzgK/Vector-2.png"
            alt=""
          />
          <img
            className=" h-6 w-6"
            src="https://i.ibb.co/7pXPHVQ/bookmark-1.png"
            alt=""
          />
          <img
            className=" h-6 w-6"
            src="https://i.ibb.co/d7Dvc2Z/Frame.png"
            alt=""
          />
          <img
            className=" h-6 w-6"
            src="https://i.ibb.co/pRQCs2F/Vector-1.png"
            alt=""
          />
          <img
            className=" h-6 w-6"
            src="https://i.ibb.co/yyYs3WL/Vector.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
