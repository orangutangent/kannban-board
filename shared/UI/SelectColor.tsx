'use client';
import { columnColors } from '@/features/useColumns';
import React from 'react';

interface Props {
	value: columnColors | string;
	onChange: (value: columnColors | string) => void;
}

const SelectColor: React.FC<Props> = ({ value, onChange }) => {
	const colors = Object.values(columnColors);
	return (
		<div className='w-fit flex flex-wrap gap-[8px] p-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.15)] rounded'>
			{colors.map((color) => (
				<div
					onClick={() => onChange(color)}
					key={color}
					style={{
						backgroundColor: color,
					}}
					className={`w-[32px] h-[32px] cursor-pointer rounded
                ${value === color ? 'border-2 border-purple-500' : ''}
                }
                `}
				/>
			))}
		</div>
	);
};

export default SelectColor;
