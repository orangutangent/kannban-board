'use client';

import useCards from '@/features/useCards';
import useColumns from '@/features/useColumns';
import useMessage from '@/features/useMessage';
import MessagePP from '@/widgets/MessagePP';
import { useEffect, useRef, useState } from 'react';
import Column from '../widgets/column';

export default function Home() {
	const { columns, fetchColumns } = useColumns();
	const [active, setActive] = useState(false);
	const { fetchCards } = useCards();
	const { message } = useMessage();
	const dataFetch = useRef<boolean>(false);
	const [mes, setMes] = useState('');

	useEffect(() => {
		if (dataFetch.current) return;
		dataFetch.current = true;

		fetchColumns();
		fetchCards();
	}, []);

	useEffect(() => {
		if (message !== '' && !active) {
			const toModal = setTimeout(() => {
				console.log(message);
				setMes(message);
				setActive(true);
				clearTimeout(toModal);
			}, 1000);
		}
	}, [message]);
	useEffect(() => {
		if (active) {
			const toModal = setTimeout(() => {
				setActive(false);
				clearTimeout(toModal);
			}, 4000);
		}
	}, [active]);

	return (
		<main className='w-screen h-screen relative'>
			<ul className='flex m-[40px] gap-[24px]'>
				{columns.map((data, index) => (
					<Column {...data} key={index} />
				))}
			</ul>
			{active ? <MessagePP message={mes} active={active} /> : <></>}
		</main>
	);
}
