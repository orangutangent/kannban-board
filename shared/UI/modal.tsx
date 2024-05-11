import Button, { ButtonTypes } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
	isOpen: boolean;
	title?: string;
	body?: React.ReactNode;
	onClose: () => void;
	onSubmit: (e?: any) => void;
	actionLabel: string;
}

const Modal: React.FC<Props> = ({ title, body, onClose, onSubmit, actionLabel, isOpen }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					onClick={(e) => {
						onClose();
					}}
					className='fixed z-50 p-[20px] top-0 left-0 w-full h-full flex items-center justify-center bg-black/50'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						onClick={(e) => {
							e.stopPropagation();
						}}
						className='w-full  max-w-[500px] p-[20px] rounded-[8px] bg-white flex flex-col space-y-4'
					>
						<h1 className='w-full text-[24px] font-[500] text-black '>{title}</h1>
						<form action='' onSubmit={onSubmit} className='flex flex-col w-full gap-4'>
							<div>{body}</div>
							<div className='flex gap-4'>
								<Button label={actionLabel} type='submit' onClick={onSubmit} buttonType={ButtonTypes.PRIMARY} />
								<Button label='Cancel' onClick={onClose} buttonType={ButtonTypes.SECONDARY} />
							</div>
						</form>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
