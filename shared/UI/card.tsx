"use client";
import { useState } from "react";
import Status from "./status";
import Tag from "./tag";

interface IProps {
  id?: number;
  title: string;
  description: string;
  status: string;
  tag: string[];
}
interface IColor {
  color: string
}
export default function Card({ title, description, status, tag }: IProps, {color}:IColor) {

  const [active, setActive] = useState(false);
  return (
    <li
      className="p-2 w-full box-border list-none font-sans bg-white rounded shadow-md flex flex-col gap-[8px] relative transition-all cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <h3 className="font-medium text-sm text-black">{title}</h3>
      <svg
        className={active ? "absolute right-[8px] top-[8px] " : "hidden"}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.96484 0.488281C7.57223 0.488281 7.17994 0.640371 6.875 0.945312L1.02734 6.79297L0.945312 6.875L0.921875 6.99219L0.511719 9.05469L0.394531 9.60547L0.945312 9.48828L3.00781 9.07812L3.125 9.05469L3.20703 8.97266L9.05469 3.125C9.66457 2.51512 9.66457 1.5552 9.05469 0.945312C8.74975 0.640371 8.35745 0.488281 7.96484 0.488281ZM7.96484 1.20312C8.15348 1.20312 8.34478 1.2901 8.52734 1.47266C8.89246 1.83777 8.89246 2.23254 8.52734 2.59766L8.25781 2.85547L7.14453 1.74219L7.40234 1.47266C7.5849 1.2901 7.7762 1.20312 7.96484 1.20312ZM6.61719 2.26953L7.73047 3.38281L3.19531 7.91797C2.94993 7.43775 2.56225 7.05007 2.08203 6.80469L6.61719 2.26953ZM1.60156 7.41406C2.05122 7.59627 2.40373 7.94878 2.58594 8.39844L1.35547 8.64453L1.60156 7.41406Z"
          fill="#6C6C6C"
        />
      </svg>

      <p className="font-normal text-xs font-sans text-[#6C6C6C] box-border ">
        {description} 
      </p> 
      <Status color={color}
      />

      <ul className="flex flex-row gap-[4px] flex-wrap">
        {tag?.map((name, key) => (
          <Tag name={name} key={key} />
        ))}
      </ul>
    </li>
  );
}
