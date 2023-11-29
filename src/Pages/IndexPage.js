import {React , useContext, useEffect} from "react";
import styled, { keyframes } from "styled-components";
import Buton from "../Components/Button";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import {FavoriteContext} from "../Store/FavoriteState";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  // Define the gradient animation
  const gradient = keyframes`
    0% {background-position: 0% 50%}
    50% {background-position: 80% 50%}
    100% {background-position: 0% 50%}
  `;

  // Create a styled div with the gradient animation and increased font size
  const GradientText = styled.div`
    font-size: 3em;
    text-align: center;
    font-weight: bold;
    background: linear-gradient(270deg, #4ecdc4, #4ecdc4);
    background-size: 600% 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradient} 5s ease infinite; // Increase the duration to slow down the animation
  `;

  const CustomTable = styled(Table)`
    th {
      background-color: #f5f5f5; /* Light grey color for table header */
      text-align: left; /* Align header text to the left */
    }
    margin-left: 20px; /* Margin from the left side */
    margin-right: 20px; /* Margin from the right side */
    padding: 10px; /* Padding around the table content */
  `;

  const TableContainer = styled.div`
    margin-top: 10px; /* Adjust the margin-top as needed */
    overflow-x: auto; /* Add horizontal scroll for smaller screens */
  `;

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    // ... (other rows)
  ];

  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
  ];
  const { data , setData } =  useContext(FavoriteContext);
  useEffect(() => {
    console.log(data)
  }, [])
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[20vh] flex items-center justify-center">
        <GradientText>Welcome to the Favorite NPM Packages.</GradientText>
      </div>

      <div className="mt-4 flex justify-center">
         <button onClick={ () => {
            navigate('/AddFavourite')
            // alert({data})
         }} className="bg-gradient-to-tr from-teal-500 to-teal-300 text-white shadow-lg mt-4 rounded-full p-3">Add package</button>
        </div>
        

<div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead class="ltr:text-left rtl:text-right">
      <tr>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Package Name
        </th>
        <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Description
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200 h-[40vh]">
  {data.map((item, index) => (
    <tr key={index} className="bg-red-500 h-10">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {item.packagename}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
        {item.description}
      </td>
    </tr>
  ))}
</tbody>

  </table>
</div>
    </>
  );
}

export default IndexPage;
