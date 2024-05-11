interface IProps {
	id?: string;
	title?: string;
	color: string;
}

export default function Status({ title, color }: IProps) {
	const colorElem = {
		backgroundColor: color,
	};
	const colorElemPoint = {
		backgroundColor: color,
	};
	return (
		<div
			style={colorElemPoint}
			className='w-max max-w-[100%] flex flex-row items-center justify-center rounded-full   pt-0.5 pb-0.5 pr-1 pl-1 gap-[4px]'
		>
			<span className='w-[8px] h-[8px] rounded-full  m-0 bg-[#60616A]'></span>
			<p className='max-w-[90%] truncate font-medium text-sm  text-center  text-black'>{title}</p>
		</div>
	);
}
