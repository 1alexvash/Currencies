import React, { useState } from "react";

const Preloader = () => {
  const [preloaderContent, setPreloaderContent] = useState(
    <div className="Preloader">
      <div className="content">
        <img src="logo.png" alt="" />
        <p>Author: Alexander Vashchuk</p>
      </div>
    </div>
  );

  setTimeout(() => {
    setPreloaderContent("");
  }, 4000);

  return preloaderContent;
};

export default Preloader;
