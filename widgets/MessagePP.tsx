const MessagePP = ({ message, active }: { message: string; active: boolean }) => {
	return (
		<div className=' bg-white rounded shadow-md absolute top-1 left-2  w-[200px] h-auto z-200  p-3 text-center z-100 border-red-600 border-2 box-border'>
			<h3 className='text-red-500 font-medium'>{message}</h3>
		</div>
	);
};
export default MessagePP;
