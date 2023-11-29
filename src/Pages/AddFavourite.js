import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button";

function AddFavourite() {
  return (
    <div className="h-screen flex flex-col justify-center items-center pt-20">
      {/* Title above Search bar */}
      <div className="w-3/4 mx-auto flex items-center justify-start mb-4">
        <p className="mr-4 font-bold text-lg">Search for NPM Packages</p>
      </div>

      {/* Search bar */}
      <div className="w-3/4 mx-auto flex items-center"> {/* Adjusted margin */}
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="search"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-200 border-gray-300 focus:border-indigo-500 focus:outline-none rounded-md"
          />
        </div>
      </div>

      {/* Radio group template */}
      <div className="mt-8">
        <label className="inline-flex items-center mt-4">
          <input type="radio" className="form-radio" name="radio" />
          <span className="ml-2">Radio Button</span>
        </label>
      </div>

      {/* Textarea and Button */}
      <div className="mt-5 w-3/4 mx-auto mb-20"> {/* Increased margin-bottom */}
        <div className="heading text-[1.5em] font-bold mb-4">
          Why is this your fav?
        </div>

        <textarea className="w-full h-[35vh] p-4 rounded-md bg-gray-100 border-gray-300 focus:border-indigo-500 focus:outline-none" />

        <div className="mt-4 flex justify-center">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default AddFavourite;
