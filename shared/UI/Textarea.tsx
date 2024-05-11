interface IProps {
	placeholder?: string;
	onChange?: (e: any) => void;
	value?: string;
	name?: string;
}

const Input: React.FC<IProps> = ({ placeholder, onChange, value, name }) => {
	return (
		<textarea
			placeholder={placeholder}
			onChange={onChange}
			value={value}
			name={name}
			className='bg-white shadow-md h-[150px] resize-none text-black text-[16px] focus:scale-[1.02] duration-300 ease-in-out outline-none border p-[8px]  rounded-[8px] w-full'
		/>
	);
};

export default Input;
