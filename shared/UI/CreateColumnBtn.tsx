'use client';
import plus from '@/public/icons/plus.svg';
import useCreateColumnModal from '@/features/useCreateColumnModal';

import Image from 'next/image';
const CreateColumnBtn = () => {
	const { setOpen } = useCreateColumnModal();
	return (
		<button
			type='button'
			onClick={() => setOpen()}
			className='p-2 align-middle mt-[40px] ml-[40px]  flex flex-row gap-2 rounded   bg-white
                    hover:bg-[#EBEBFF] hover:scale-105 duration-300 ease-in
                    text-black text-[15px] w-max '
		>
			<Image
				src={plus}
				alt='plus'
				width={16}
				className='cursor-pointer text-black'
			></Image>
			<p className=''>Создать колонку</p>
		</button>
	);
};

export default CreateColumnBtn
