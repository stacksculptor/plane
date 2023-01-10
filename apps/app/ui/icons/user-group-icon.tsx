import React from "react";

import type { Props } from "./types";

export const UserGroupIcon: React.FC<Props> = ({ width = "24", height = "24", className }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.754 10C15.72 10 16.504 10.784 16.504 11.75V16.499C16.504 17.6927 16.0298 18.8376 15.1857 19.6817C14.3416 20.5258 13.1967 21 12.003 21C10.8093 21 9.66441 20.5258 8.82031 19.6817C7.97621 18.8376 7.502 17.6927 7.502 16.499V11.75C7.502 10.784 8.285 10 9.252 10H14.754ZM14.754 11.5H9.252C9.1857 11.5 9.12211 11.5263 9.07522 11.5732C9.02834 11.6201 9.002 11.6837 9.002 11.75V16.499C9.002 17.2949 9.31818 18.0582 9.88097 18.621C10.4438 19.1838 11.2071 19.5 12.003 19.5C12.7989 19.5 13.5622 19.1838 14.125 18.621C14.6878 18.0582 15.004 17.2949 15.004 16.499V11.75C15.004 11.6837 14.9777 11.6201 14.9308 11.5732C14.8839 11.5263 14.8203 11.5 14.754 11.5ZM3.75 10H7.131C6.7782 10.4261 6.56274 10.949 6.513 11.5H3.75C3.6837 11.5 3.62011 11.5263 3.57322 11.5732C3.52634 11.6201 3.5 11.6837 3.5 11.75V14.999C3.49994 15.3769 3.5855 15.7499 3.75027 16.0899C3.91504 16.43 4.15473 16.7283 4.45133 16.9625C4.74793 17.1966 5.09374 17.3605 5.46277 17.4418C5.83179 17.5231 6.21445 17.5198 6.582 17.432C6.667 17.936 6.822 18.417 7.035 18.864C6.44228 19.0226 5.82103 19.0427 5.21929 18.9228C4.61756 18.8029 4.05145 18.5463 3.56475 18.1727C3.07805 17.7991 2.68379 17.3185 2.41246 16.7682C2.14114 16.2179 2.00001 15.6126 2 14.999V11.75C2 10.784 2.784 10 3.75 10ZM16.875 10H20.25C21.216 10 22 10.784 22 11.75V15C22.0001 15.6132 21.8593 16.2182 21.5884 16.7682C21.3175 17.3183 20.9237 17.7987 20.4376 18.1724C19.9514 18.546 19.3858 18.8029 18.7846 18.9232C18.1833 19.0435 17.5625 19.0239 16.97 18.866C17.184 18.418 17.339 17.937 17.425 17.433C17.7921 17.5198 18.174 17.5223 18.5423 17.4405C18.9105 17.3587 19.2554 17.1946 19.5512 16.9606C19.847 16.7265 20.086 16.4286 20.2503 16.089C20.4147 15.7495 20.5 15.3772 20.5 15V11.75C20.5 11.6837 20.4737 11.6201 20.4268 11.5732C20.3799 11.5263 20.3163 11.5 20.25 11.5H17.493C17.4433 10.949 17.2278 10.4261 16.875 10ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6C15 6.79565 14.6839 7.55871 14.1213 8.12132C13.5587 8.68393 12.7956 9 12 9C11.2044 9 10.4413 8.68393 9.87868 8.12132C9.31607 7.55871 9 6.79565 9 6C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM18.5 4C19.163 4 19.7989 4.26339 20.2678 4.73223C20.7366 5.20107 21 5.83696 21 6.5C21 7.16304 20.7366 7.79893 20.2678 8.26777C19.7989 8.73661 19.163 9 18.5 9C17.837 9 17.2011 8.73661 16.7322 8.26777C16.2634 7.79893 16 7.16304 16 6.5C16 5.83696 16.2634 5.20107 16.7322 4.73223C17.2011 4.26339 17.837 4 18.5 4ZM5.5 4C6.16304 4 6.79893 4.26339 7.26777 4.73223C7.73661 5.20107 8 5.83696 8 6.5C8 7.16304 7.73661 7.79893 7.26777 8.26777C6.79893 8.73661 6.16304 9 5.5 9C4.83696 9 4.20107 8.73661 3.73223 8.26777C3.26339 7.79893 3 7.16304 3 6.5C3 5.83696 3.26339 5.20107 3.73223 4.73223C4.20107 4.26339 4.83696 4 5.5 4ZM12 4.5C11.6022 4.5 11.2206 4.65804 10.9393 4.93934C10.658 5.22064 10.5 5.60218 10.5 6C10.5 6.39782 10.658 6.77936 10.9393 7.06066C11.2206 7.34196 11.6022 7.5 12 7.5C12.3978 7.5 12.7794 7.34196 13.0607 7.06066C13.342 6.77936 13.5 6.39782 13.5 6C13.5 5.60218 13.342 5.22064 13.0607 4.93934C12.7794 4.65804 12.3978 4.5 12 4.5ZM18.5 5.5C18.2348 5.5 17.9804 5.60536 17.7929 5.79289C17.6054 5.98043 17.5 6.23478 17.5 6.5C17.5 6.76522 17.6054 7.01957 17.7929 7.20711C17.9804 7.39464 18.2348 7.5 18.5 7.5C18.7652 7.5 19.0196 7.39464 19.2071 7.20711C19.3946 7.01957 19.5 6.76522 19.5 6.5C19.5 6.23478 19.3946 5.98043 19.2071 5.79289C19.0196 5.60536 18.7652 5.5 18.5 5.5ZM5.5 5.5C5.23478 5.5 4.98043 5.60536 4.79289 5.79289C4.60536 5.98043 4.5 6.23478 4.5 6.5C4.5 6.76522 4.60536 7.01957 4.79289 7.20711C4.98043 7.39464 5.23478 7.5 5.5 7.5C5.76522 7.5 6.01957 7.39464 6.20711 7.20711C6.39464 7.01957 6.5 6.76522 6.5 6.5C6.5 6.23478 6.39464 5.98043 6.20711 5.79289C6.01957 5.60536 5.76522 5.5 5.5 5.5Z"
        fill="black"
      />
    </svg>
  );
};
