import useConfirmModal from "@/features/useConfirmModal"
import Modal from "@/shared/UI/modal"

interface IProps {
    text?: string
    title?: string
    actionLabel?: string
    onConfirm: () => void
}


const ConfirmModal: React.FC<IProps> = ({
    text,
    title,
    actionLabel,
    onConfirm,
}) => {
    const { isOpen, setClose } = useConfirmModal()
    return ( 
        <Modal title={title} actionLabel={actionLabel || "Confirm"} body={text} onSubmit={onConfirm} onClose={setClose} isOpen={isOpen}/>
     );
}
 
export default ConfirmModal;