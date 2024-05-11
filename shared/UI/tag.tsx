interface IProps {
	name: string;
}

const Tag: React.FC<IProps> = ({ name }) => {
	return (
		<div className='rounded p-[4px] bg-[#FFF6E1] text-[#52565C] max-w-full'>
			<p className='text-ellipsis overflow-hidden font-medium text-sm'>{name}</p>
		</div>
	);
};

export default Tag;
