interface IProps {
	id?: string;
	title?: string;
	color?: string;
}

export default function Status({ title, color }: IProps) {
	return (
		<div className='w-max flex flex-row items-center justify-center rounded-full bg-[#E8EDF3]  pt-0.5 pb-0.5 pr-1 pl-1 gap-[4px]'>
			<span className='w-[8px] h-[8px] rounded-full bg-[#BBBFC4] m-0'></span>
			<p className=' font-medium text-sm  text-center  '>{title}</p>
		</div>
	);
}
