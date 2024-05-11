'use client'
import useConfirmModal from "@/features/useConfirmModal"
import Modal from "@/shared/UI/modal"
import { useCallback } from "react"

interface IProps {
	text?: string;
	title?: string;
	actionLabel?: string;
	onConfirm: () => void;
}

const ConfirmModal: React.FC<IProps> = ({ text, title, actionLabel, onConfirm }) => {
	const { isOpen, setClose } = useConfirmModal();
	return <Modal title={title} actionLabel={actionLabel || 'Confirm'} body={text} onSubmit={onConfirm} onClose={setClose} isOpen={isOpen} />;
};

const ConfirmModal = () => {
	const { isOpen, setClose, title, actionLabel, text, onConfirmFunc } =
		useConfirmModal();
	const body = (
		<div className='w-full flex flex-col gap-4 text-black   '>
			<p>{text}</p>
		</div>
	);

    const handleConfirm = (e: any) => {
        e.preventDefault()
        onConfirmFunc()
        setClose()
    }

	return (
		<Modal
			title={title}
			actionLabel={actionLabel || 'Confirm'}
			body={body}
			onSubmit={(e) => handleConfirm(e)}
			onClose={setClose}
			isOpen={isOpen}
		/>
	);
};

export default ConfirmModal