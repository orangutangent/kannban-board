import plus from '@/public/icons/plus.svg';

import Image from 'next/image';
const CreateColumnBtn = () => {
	return (
		<button
			type='button'
			className='p-2 items-center mt-[40px] ml-[40px]  flex flex-row gap-2 rounded bg-white
                    hover:bg-[#EBEBFF] hover:scale-105 duration-300 ease-in
                    text-black text-[15px] w-max '
		>
			<Image src={plus} alt='plus' width={16} className='cursor-pointer text-black align-center'></Image>
			<p className=''>Создать колонку</p>
		</button>
	);
};

export default CreateColumnBtn;
