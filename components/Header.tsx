"use client";
import React from "react";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="flex flex-col justify-evenly md:flex-row p-4 items-center">
        <div className="absolute top-0 left-0 w-full h-96 rounded-md bg-gradient-to-br from-pink-400 to-[#0055D1] opacity-20 filter -z-50" />
        <Image />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white shadow-md rounded-md flex-1 md:flex-initial p-2">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
            <button type="submit" hidden>
              Search{" "}
            </button>
          </form>
          <Avatar
            githubHandle="https://github.com/Divalsehgal"
            round
            color="#0055D1"
            size="50"
            name="Dival Sehgal"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-5 md:py-5">
        <p className="flex items-center fopnt-light text-[#0055D1] p-5 space-x-2 bg-white shadow-xl max-w-3xl italic rounded-md text-sm w-fit">
          <UserCircleIcon className="h-10 w-10 text-[#0055D1] inline-block" />
          <span>GPT is summarising your day </span>
        </p>
      </div>
    </header>
  );
}

export default Header;

function Image() {
  return <></>;
}
