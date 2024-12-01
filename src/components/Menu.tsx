import React from "react";

const Menu = ({ isExpanded }: { isExpanded: boolean }) => {
  return (
    <div className="">
      {isExpanded ? (
        <svg
          width="32"
          height="27"
          viewBox="0 0 32 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="4.33667"
            y="0.239502"
            width="34.1531"
            height="6"
            rx="3"
            transform="rotate(38.6285 4.33667 0.239502)"
            fill="#D9D9D9"
          />
          <rect
            x="0.732422"
            y="21.6646"
            width="33.3043"
            height="6"
            rx="3"
            transform="rotate(-40.4927 0.732422 21.6646)"
            fill="#D9D9D9"
          />
        </svg>
      ) : (
        <svg
          width="29"
          height="24"
          viewBox="0 0 29 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="29" height="7" rx="3.5" fill="#D9D9D9" />
          <rect y="17" width="29" height="7" rx="3.5" fill="#D9D9D9" />
          <rect y="9" width="29" height="6" rx="3" fill="#D9D9D9" />
        </svg>
      )}
    </div>
  );
};

export default Menu;
