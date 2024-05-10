'use client';

import useCards, { ICard } from '@/features/useCards';
import useColumns from '@/features/useColumns';
import { useEffect } from 'react';
import Column from '../widgets/column';

export default function Home() {
	const { columns, fetchColumns } = useColumns();

	useEffect(() => {
		fetchColumns();
	}, []);

	return (
		<main className='w-screen h-screen'>
			<ul className='flex m-[40px] gap-[24px]'>
				{columns.map((data, index) => (
					<Column {...data} key={index} />
				))}
			</ul>
		</main>
	);
}
