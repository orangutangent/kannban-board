<<<<<<< Updated upstream
'use client';
import { useState } from 'react';
import Status from './status';
import Tag from './tag';
import useCards from '@/features/useCards';
=======
"use client";
import { useState } from "react";
import Status from "./status";
import Tag from "./tag";
import useEditCardModal from "@/features/useEditCardModal";
>>>>>>> Stashed changes

interface IProps {
	id?: number;
	title: string;
	description: string;
	status: string;
	tag: string[];
	color: string;
}
interface IColor {
	color: string;
}
<<<<<<< Updated upstream
const Card = (card: IProps) => {
	const { cards, replaceCard } = useCards();

	const dragStartHandler = (event: React.DragEvent<HTMLLIElement>, card: IProps) => {
		if (event.target === event.currentTarget) {
			const cardIndex = cards.findIndex((col) => col.id === card.id);
			event.dataTransfer.setData('text/plain', JSON.stringify(cardIndex));
		}
	};
=======
export default function Card({ color, title, description, status, tag }: IProps, ) {
  const { setOpen } = useEditCardModal();
  const [active, setActive] = useState(false);
  return (
    <li
      className="p-2 w-full box-border list-none font-sans bg-white rounded shadow-md flex flex-col gap-[8px] relative transition-all cursor-pointer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <h3 className="font-medium text-sm text-black">{title}</h3>
      <svg
        onClick={() => setOpen()}
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
>>>>>>> Stashed changes

	const dropHandler = (event: React.DragEvent<HTMLLIElement>, card: IProps) => {
		event.preventDefault();
		event.currentTarget.style.boxShadow = 'none';

		const draggedItemIndex = Number(event.dataTransfer.getData('text/plain'));
		const cardIndex = cards.findIndex((col) => col.id === card.id);
		const statusDragged = cards[draggedItemIndex].status;
		const status = cards[cardIndex].status;
		replaceCard(draggedItemIndex, statusDragged, cardIndex, status);
	};

	const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.preventDefault();
		event.currentTarget.style.boxShadow = '4px 4px 4px gray';
	};

	const dragLeaveHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.currentTarget.style.boxShadow = 'none';
	};

	const [active, setActive] = useState(false);
	return (
		<li
			className='p-2 w-full box-border list-none font-sans bg-white rounded shadow-md flex flex-col gap-[8px] relative transition-all cursor-pointer'
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
			draggable={true}
			onDragOver={(e) => dragOverHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragStart={(e) => dragStartHandler(e, card)}
			onDrop={(e) => dropHandler(e, card)}
		>
			<h3 className='font-medium text-sm text-black'>{card.title}</h3>
			<svg
				className={active ? 'absolute right-[8px] top-[8px] ' : 'hidden'}
				width='10'
				height='10'
				viewBox='0 0 10 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M7.96484 0.488281C7.57223 0.488281 7.17994 0.640371 6.875 0.945312L1.02734 6.79297L0.945312 6.875L0.921875 6.99219L0.511719 9.05469L0.394531 9.60547L0.945312 9.48828L3.00781 9.07812L3.125 9.05469L3.20703 8.97266L9.05469 3.125C9.66457 2.51512 9.66457 1.5552 9.05469 0.945312C8.74975 0.640371 8.35745 0.488281 7.96484 0.488281ZM7.96484 1.20312C8.15348 1.20312 8.34478 1.2901 8.52734 1.47266C8.89246 1.83777 8.89246 2.23254 8.52734 2.59766L8.25781 2.85547L7.14453 1.74219L7.40234 1.47266C7.5849 1.2901 7.7762 1.20312 7.96484 1.20312ZM6.61719 2.26953L7.73047 3.38281L3.19531 7.91797C2.94993 7.43775 2.56225 7.05007 2.08203 6.80469L6.61719 2.26953ZM1.60156 7.41406C2.05122 7.59627 2.40373 7.94878 2.58594 8.39844L1.35547 8.64453L1.60156 7.41406Z'
					fill='#6C6C6C'
				/>
			</svg>

			<p className='font-normal text-xs font-sans text-[#6C6C6C] box-border '>{card.description}</p>
			<Status title={status} color={card.color} />

			<ul className='flex flex-row gap-[4px] flex-wrap'>
				{card.tag?.map((name, key) => (
					<Tag name={name} key={key} />
				))}
			</ul>
		</li>
	);
};

export default Card;
