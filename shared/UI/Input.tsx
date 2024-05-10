
interface IProps {
    placeholder?:string
    onChange?: (e:any) => void
    value?:string
    name?:string
    onKeyDown?: (e:any) => void
}


const Input:React.FC<IProps> = ({
    placeholder,
    onChange,
    value,
    name,
    onKeyDown
}) => {
    return ( 
        <input
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={value}
            name={name}
            className="bg-white shadow-md h-[40px] text-black text-[16px] focus:scale-[1.02] duration-300 ease-in-out outline-none border p-[8px] rounded-[8px] w-full"
        />
     );
}
 
export default Input;