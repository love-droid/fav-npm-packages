import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Button from '../Components/Button';

function AddFavourite() {
  const navigate = useNavigate();

  return (
    <div className='h-[80vh]'>
      {/* Search bar */}
      <div className="relative w-[80%] mx-auto mt-8">
        <div className="absolute top-0 left-0 flex items-center px-3 py-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="search"
          placeholder="Search"
          className="w-full rounded-md pl-10 pr-4 py-2 bg-gray-200 border-gray-300 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      {/* Radio group template */}
      <div className="mt-8">
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio" name="radio" />
          <span className="ml-2">Radio Button</span>
        </label>
      </div>

      {/* Button */}
      <Button className="mt-8" />
    </div>
  );
}

export default AddFavourite;
