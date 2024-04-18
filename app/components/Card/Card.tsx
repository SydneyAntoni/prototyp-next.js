import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	textColor: string;
	backgroundColor: string;
	isTitle: boolean;
}

const Card = ({ children, textColor, backgroundColor, isTitle }: Props) => {
	if (isTitle) {
		return (
			<div className={'containerTitle'} style={{ background: backgroundColor, color: textColor }}>
				<h2 className={'containerInnerTitle1'} color={textColor}>
					{children}
				</h2>
			</div>
		);
	} else {
		return <p style={{ background: backgroundColor, color: textColor }}>{children}</p>;
	}
};

export default Card;
