'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import useCards, { ICard } from '@/features/useCards';
import { IColumn } from '@/features/useColumns';
import Card1 from '@/shared/UI/card';
import edit from '../public/icons/edit.svg';
import plus from '../public/icons/plus.svg';

export default function Column({ title, color }: IColumn) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		fetchCards();
	}, []);

	const CardMap = (data: ICard, index: number) => {
		return data.status === title ? <Card1 {...data} {...{ color }} key={index} /> : <></>;
	};

	const { cards, fetchCards } = useCards();
	return (
		<li className='relative list-none w-[256px] bg-none' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<h2 className='text-2xl font-bold mb-[12px]'>{title}</h2>
			{isHovered && (
				<div className='flex gap-[8px] absolute right-0 top-0'>
					<Image src={edit} alt='edit' width={16}></Image>
					<Image src={plus} alt='plus' width={16}></Image>
				</div>
			)}
			<ul className='border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]' style={{ backgroundColor: color }}>
				{cards.map(CardMap)}
			</ul>
		</li>
	);
}
