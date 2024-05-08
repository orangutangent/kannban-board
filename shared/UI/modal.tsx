

interface Props {
    title?: string;
    body?: React.ReactNode;
    onClose: () => void;
    onSubmit: () => void;
    actionLabel: string;
}

const Modal: React.FC<Props> = ({
    title,
    body,
    onClose,
    onSubmit,
    actionLabel
}) => {
    return ( <div>
        
    </div> );
}
 
export default Modal;