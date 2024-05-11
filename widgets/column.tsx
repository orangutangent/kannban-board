'use client';

import { useState } from 'react';

import Image from 'next/image';

import useCards, { ICard } from '@/features/useCards';
import useColumns, { IColumn } from '@/features/useColumns';
import useConfirmModal from '@/features/useConfirmModal';
import useCreateCardModal from '@/features/useCreateCardModal';
import useEditColumnModal from '@/features/useEditColumnModal';
import trashcan from '@/public/icons/trashcan.svg';
import Card1 from '@/shared/UI/card';
import edit from '../public/icons/edit.svg';
import plus from '../public/icons/plus.svg';

export default function Column(column: IColumn) {
	const [isHovered, setIsHovered] = useState(false);

  const {setOpen:setConfirmModalOpen,setTitle,setText, setActionLabel, setOnConfirmFunc} = useConfirmModal();
	const {setEditColumnId, setOpen: setEditColumnModalOpen} = useEditColumnModal();
	const { setOpen: setCreateCardModalOpen,setStatus } = useCreateCardModal();
	const { cards, addCardInEmptyColumn,deleteCard } = useCards();
	const { columns, replaceColumn, deleteColumn } = useColumns();

	const CardMap = (data: ICard, index: number) => {
		return data.status === column.title && <Card1 color={column.color} {...data} key={index} />;
	};

	const dragStartHandler = (event: React.DragEvent<HTMLLIElement>, column: IColumn) => {
		if (event.target === event.currentTarget) {
			const columnIndex = columns.findIndex((col) => col.id === column.id);
			event.dataTransfer.setData('text/plain', JSON.stringify({ type: 'column', index: columnIndex }));
		}
	};

	const dropHandler = (event: React.DragEvent<HTMLLIElement>, column: IColumn) => {
		event.preventDefault();
		event.currentTarget.style.boxShadow = 'none';
		const draggedItem = JSON.parse(event.dataTransfer.getData('text/plain'));
		const draggedCardIndex = draggedItem.index;
		const columnTitle = column.title;
		if (draggedItem.type === 'column') {
			const columnIndex2 = columns.findIndex((col) => col.id === column.id);
			replaceColumn(draggedItem.index, columnIndex2);
		} else if (draggedItem.type === 'card' && !cards.find((card) => card.status === columnTitle)) {
			addCardInEmptyColumn(draggedCardIndex, columnTitle);
		}
	};

	const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.preventDefault();

		event.currentTarget.style.boxShadow = '0px -4px 0px gray';
	};

	const dragLeaveHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.currentTarget.style.boxShadow = 'none';
	};

	const editColumnHandler = () => {
		setEditColumnId(column.id);
		setEditColumnModalOpen();
	};

	const createCardHandler = () => {
		setStatus(column.title);
		setCreateCardModalOpen();
	};

	const deleteColumnHandler = (e: any) => {
		e.preventDefault();
		setTitle('Are you sure you want to delete this column?');
		setText('This action cannot be undone.');
		setActionLabel('Delete');
		setOnConfirmFunc(() => {
			const cardsToDelete = cards.filter(
				(card) => card.status === column.title
			);
			cardsToDelete.forEach((card) => {
				card.id && deleteCard(card.id);
			});
			deleteColumn(column.id);
		});
		setConfirmModalOpen();
	};


	return (
		<li
			className='custom-column relative list-none w-[256px] bg-none z-0 min-w-[220px] sm:min-w-[240px]'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			draggable={true}
			onDragOver={(e) => dragOverHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragStart={(e) => dragStartHandler(e, column)}
			onDrop={(e) => dropHandler(e, column)}
		>
			<h2 className='text-ellipsis overflow-hidden w-4/6 text-xl font-bold mb-[12px] lg:text-2xl  '>{column.title}</h2>
			{isHovered && (
				<div className='flex gap-[8px] absolute right-[6px] top-[6px]'>
					<Image
						priority
						src={trashcan}
						alt='trashcan'
						width={16}
						className='cursor-pointer'
						onClick={(e)=>deleteColumnHandler(e)}
					></Image>
					<Image
						priority
						src={edit}
						alt='edit'
						width={16}
						className='cursor-pointer'
						onClick={editColumnHandler}
					></Image>
					<Image
						priority
						src={plus}
						alt='plus'
						width={16}
						className='cursor-pointer'
						onClick={createCardHandler}
					></Image>
				</div>
			)}
			<ul className='border-[#D6D8DB] border p-[24px] rounded flex flex-col gap-[24px]' style={{ backgroundColor: column.color }}>
				{cards.map(CardMap)}
			</ul>
		</li>
	);
}
