'use client';
import useCards from '@/features/useCards';
import trashcan from '@/public/icons/trashcan.svg';
import Image from 'next/image';
import { useState } from 'react';
import edit from './../../public/icons/edit.svg';
import Status from './status';
import Tag from './tag';

import useConfirmModal from '@/features/useConfirmModal';
import useEditCardModal from '@/features/useEditCardModal';

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

const Card = (card: IProps) => {
	const {setOpen:setConfirmModalOpen,setTitle,setText, setActionLabel, setOnConfirmFunc} = useConfirmModal();
	const { setEditCardId, setOpen: setEditCardModalOpen } = useEditCardModal();
	const { cards,deleteCard, replaceCard } = useCards();

	const dragStartHandler = (event: React.DragEvent<HTMLLIElement>, card: IProps) => {
		if (event.target === event.currentTarget) {
			const cardIndex = cards.findIndex((col) => col.id === card.id);
			event.dataTransfer.setData('text/plain', JSON.stringify({ type: 'card', index: cardIndex }));
		}
	};

	const dropHandler = (event: React.DragEvent<HTMLLIElement>, card: IProps) => {
		event.preventDefault();
		event.currentTarget.style.boxShadow = 'none';

		const draggedItemIndex = JSON.parse(event.dataTransfer.getData('text/plain'));
		const cardIndex = cards.findIndex((item) => item.id === card.id);
		const statusDragged = cards[draggedItemIndex.index].status;
		const status = cards[cardIndex].status;

		replaceCard(draggedItemIndex.index, statusDragged, cardIndex, status);
	};

	const dragOverHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.preventDefault();
		event.currentTarget.style.boxShadow = '4px 4px 0px gray';
	};

	const dragLeaveHandler = (event: React.DragEvent<HTMLLIElement>) => {
		event.currentTarget.style.boxShadow = 'none';
	};

	const [active, setActive] = useState(false);

	const handleEdit = () => {
		if (!card.id) return;
		setEditCardId(card.id);
		setEditCardModalOpen();
	};

	const deleteHandler = (e:any)=>{
		e.stopPropagation();
		setTitle('Delete Card');
		setText('Are you sure you want to delete this card?');
		setActionLabel('Delete');
		setOnConfirmFunc(()=>{
			card.id && deleteCard(card.id);
		});
		setConfirmModalOpen();
	}
	
	return (
		<li
			className='p-4  w-full box-border list-none font-sans bg-white rounded shadow-md flex flex-col gap-[8px] relative transition-all cursor-pointer'
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
			draggable={true}
			onDragOver={(e) => dragOverHandler(e)}
			onDragLeave={(e) => dragLeaveHandler(e)}
			onDragStart={(e) => dragStartHandler(e, card)}
			onDrop={(e) => dropHandler(e, card)}
		>
			<h3 className='text-ellipsis overflow-hidden font-medium text-sm text-black'>{card.title}</h3>
			
			<Image
				priority
				src={trashcan}
				alt='trashcan'
				width={14}
				className={active ? 'absolute right-[26px] top-[8px] ' : 'hidden'}
				onClick={deleteHandler}
			></Image>
			<Image
				priority
				onClick={handleEdit}
				src={edit}
				alt='edit'
				width={14}
				className={active ? 'absolute right-[8px] top-[8px] ' : 'hidden'}
			></Image>
			<p className='font-normal text-xs font-sans text-[#6C6C6C] box-border '>
				{card.description}
			</p>
			<Status title={card.status} color={card.color} />

			<ul className='flex flex-row gap-[4px] flex-wrap'>
				{card.tag?.map((name, key) => (
					<Tag name={name} key={key} />
				))}
			</ul>
		</li>
	);
};

export default Card;
