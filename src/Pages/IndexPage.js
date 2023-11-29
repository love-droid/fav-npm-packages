import React from "react";
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

  return (
    <>
      <div className="h-[20vh] flex items-center justify-center">
        <GradientText>Welcome to the Favorite NPM Packages.</GradientText>
      </div>

      <div className="flex justify-center items-center mt-2">
        <Buton />
      </div>

      <TableContainer>
        <CustomTable aria-label="Example table with dynamic content">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </CustomTable>
      </TableContainer>
    </>
  );
}

export default IndexPage;
