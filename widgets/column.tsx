'use client';

import Image from 'next/image';
import { useState } from 'react';

import useCards, { ICard } from '@/features/useCards';
import useColumns, { IColumn } from '@/features/useColumns';
import Card1 from '@/shared/UI/card';
import edit from '../public/icons/edit.svg';
import plus from '../public/icons/plus.svg';


export default function Column(column: IColumn) {
	const [isHovered, setIsHovered] = useState(false);
	const [modalEdit, setModalEdit] = useState(false);
	const [modalAddColumn, setModalAddColumn] = useState(false);

	const { cards } = useCards();
	const { columns, replaceColumn } = useColumns();

	

	const CardMap = (data: ICard, index:number) => {
		return data.status === column.title && (
			<Card1 color={column.color} {...data} key={index} />
		) ;
	};

	const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.preventDefault();
		const parent = event.currentTarget as HTMLElement;
		parent.style.boxShadow = '4px 4px 4px gray';
	};

	const dragLeaveHandler = (event: React.DragEvent<HTMLLIElement>) => {
		const parent = event.currentTarget as HTMLElement;
		parent.style.boxShadow = 'none';
	};

	const dragStartHandler = (event: React.DragEvent<HTMLLIElement>, column: IColumn) => {
		const columnIndex = columns.findIndex((col) => col.id === column.id);
		event.dataTransfer.setData('text/plain', columnIndex.toString());
	};

	const dropHandler = (event: React.DragEvent<HTMLLIElement>, column: IColumn) => {
		event.preventDefault();
		const parent = event.currentTarget as HTMLElement;
		parent.style.boxShadow = 'none';
		const draggedColumnIndex = Number(event.dataTransfer.getData('text/plain'));
		const columnIndex2 = columns.findIndex((col) => col.id === column.id);
		replaceColumn(draggedColumnIndex, columnIndex2);
	};

	return (
		<li
			className='custom-column relative list-none w-[256px] bg-none z-0 min-w-[208px]'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			draggable={true}
			onDragOver={(e) => dragOverHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragStart={(e) => dragStartHandler(e, column)}
			onDrop={(e) => dropHandler(e, column)}
		>
			<h2 className='text-2xl font-bold mb-[12px] lg:text-xl md:text-base '>{column.title}</h2>
			{isHovered && (
				<div className='flex gap-[8px] absolute right-[6px] top-[6px]'>
					<Image src={edit} alt='edit' width={16} className='cursor-pointer' onClick={() => setModalEdit(true)}></Image>
					<Image src={plus} alt='plus' width={16} className='cursor-pointer' onClick={() => setModalAddColumn(true)}></Image>
				</div>
			)}
			{/* {modalEdit && <Modal isOpen={} />} */}
			{/* {modalAddColumn && <Modal />} */}
			<ul className='border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]' style={{ backgroundColor: column.color }}>
				{ cards.map(CardMap)}
			</ul>
		</li>
	);

}
