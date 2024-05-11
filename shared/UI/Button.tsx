import Image, { StaticImageData } from 'next/image';

interface IProps {
	label?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset' | undefined;
	className?: string;
	buttonType: ButtonTypes;
	icon?: StaticImageData;
}

export enum ButtonTypes {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	ICON = 'icon',
}

const Button: React.FC<IProps> = ({ label, onClick, disabled, type, className, buttonType, icon }) => {
	switch (buttonType) {
		case ButtonTypes.PRIMARY:
			return (
				<button
					onClick={onClick}
					disabled={disabled}
					type={type}
					className={`${className} px-[12px] py-[8px] bg-[#F5F5F5]
                    hover:bg-[#EBEBFF] hover:scale-105 duration-300 ease-in
                    text-black text-[15px] rounded-[8px] max-w-max h-[40px] disabled:opacity-50 disabled:cursor-not-allowed`}
				>
					{label}
				</button>
			);
		case ButtonTypes.SECONDARY:
			return (
				<button
					onClick={onClick}
					disabled={disabled}
					type={type}
					className={`${className} px-[12px] py-[8px] bg-white
                    hover:bg-[#EBEBFF] hover:scale-105 duration-300 ease-in
                    text-black text-[15px] rounded-[8px] max-w-max h-[40px] disabled:opacity-50 disabled:cursor-not-allowed`}
				>
					{label}
				</button>
			);
		case ButtonTypes.ICON:
			if (!icon) return null;
			return (
				<button
					onClick={onClick}
					disabled={disabled}
					type={type}
					className={`${className} flex justify-center items-center border border-[#2F80ED] text-[#2F80ED] font-medium text-sm rounded-[8px] w-[40px] h-[40px] disabled:opacity-50 disabled:cursor-not-allowed`}
				>
					<Image src={icon} alt='icon' width={20} height={20} />
				</button>
			);
	}
};

export default Button;
