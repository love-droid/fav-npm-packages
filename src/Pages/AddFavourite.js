import React, { useContext , useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../Components/Button";
import {FavoriteContext} from "../Store/FavoriteState";
import {debounce} from 'lodash';
import { useNavigate } from "react-router-dom";

function AddFavourite() {
  const { data , setData } =  useContext(FavoriteContext);
  const [packagesList, setPackagesList] = useState([]); // Added useState hook
  const [searchQuery, setSearchQuery] = useState(''); // Added useState hook
  const [selectedPackage, setSelectedPackage] = useState({packagename:"" , description: "" }); // Added useState hook
  // console.log(data)
 const navigate = useNavigate();
  const searchPackages = (searchQuery) => {
    const query = searchQuery;
    fetch(`https://api.npms.io/v2/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setPackagesList(data.results);
      });

    console.log(packagesList)
  }
  const handleInputChange = async (e) => {
    await setSearchQuery(e.target.value);
    const debouncedSearchPackages = debounce(() => searchPackages(searchQuery), 300);
    debouncedSearchPackages();
  }

const addPackage = async () => {
  const newData = await [...data, {packagename: selectedPackage.packagename , description: selectedPackage.description}]; 
  await setData(newData);
  // alert(selectedPackage.packagename)
  // localStorage.setItem("data", JSON.stringify(data));
  // console.log(data)
  navigate('/IndexPage'); // Added
}

useEffect(() => {
  return () => {
  localStorage.setItem("data", JSON.stringify(data));
}
}, [data]);

  return (
    <div className="h-screen flex flex-col px-[6%] items-center pt-20">
      {/* Title above Search bar */}
      <div className="W-full flex items-center justify-start mb-4">
        <p className=" font-bold text-lg">Search for NPM Packages</p>
      </div>

      {/* Search bar */}
      <div className="w-full flex items-center"> {/* Adjusted margin */}
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faSearch}
            className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="search"
            placeholder="Search"
            value={searchQuery} // Added value attribute
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-2 bg-gray-200 border-gray-300 focus:border-indigo-500 focus:outline-none rounded-md"
          />
        </div>
      </div>

      <div className="w-[100%]">
      <ul className="h-[20vh] pt-10 mt-10 flex space-y-2 flex-col overflow-y-scroll w-[100%]">
        {packagesList?.map((item) => (
          <li className="flex space-x-2 cursor-pointer items-center h-10 shadow-sm w-fit px-2 p-1 bg-[#E9E6E6]" key={item.package.name}>
                      <input onChange={() => {
                        setSelectedPackage({packagename: item.package.name})
                      }} type="radio" id={item.package.name} className="form-radio" name="radio" />
            <label className="cursor-pointer" htmlFor={item.package.name}>{item.package.name}</label>
          </li>
        ))}
      </ul>
      </div>

      {/* Textarea and Button */}
      <div className="mt-5 w-full mx-auto mb-20"> {/* Increased margin-bottom */}
        <div className="heading text-[1.5em] font-bold mb-4">
          Why is this your fav?
        </div>

        <textarea onChange={
          (e) => {
            setSelectedPackage({...selectedPackage, description: e.target.value})
          }} 
        value={selectedPackage.description}
        className="w-full h-[10vh]  bg-slate-300 p-4 rounded-md  border-gray-300 focus:border-indigo-500 focus:outline-none" />

        <div className="mt-4 flex justify-center">
         <button onClick={addPackage} className="bg-gradient-to-tr from-teal-500 to-teal-300 text-white shadow-lg mt-4 rounded-full p-3">Add package</button>
        </div>
      </div>
    </div>
  );
}

export default AddFavourite;
