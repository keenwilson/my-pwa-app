import React, { useState } from "react";
import IconUp from "./IconUp";

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log("scrolled", scrolled)
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    console.log("scrollToTop is called")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div onClick={scrollToTop} className="fixed bottom-0 right-0 h-16 w-16 w-full flex items-center justify-center border border-transparent text-base font-medium rounded-md text-stone-700 bg-stone-100">
      <IconUp
        className={`h-10 w-10 ${visible? "inline": "hidden"}`}
      /> 
    </div>
  );
};

export default ScrollButton;
