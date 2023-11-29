import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 bg-gray-800 text-white p-4 text-center w-full">
      <p>
        Made with{" "}
        <span role="img" aria-label="heart" className="text-red-500">
          ❤️
        </span>{" "}
        by Love{" "}
      </p>
    </footer>
  );
};

export default Footer;
