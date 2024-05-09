interface IProps{
    name:string
}

const Tag:React.FC<IProps> = ({name}) => {
    return(
        <div className="rounded p-[4px] bg-[#FFF6E1] text-[#52565C] w-max">
                    <p className="font-medium text-sm">{name}</p>
                </div>
    )
}

export default Tag