import React, { useState }  from 'react';
import styled from '@xstyled/styled-components';

interface Props {
	className?: string
/* 	count?: number */
}

const EmojiReactions = ({ className }:Props) => {
	const [count, setCount] = useState(0);
	const handleCounter = () => {
		setCount(count + 1);
	};

	const [dislikeCount, setDislikeCount] = useState(0);
	const handleDislikeCounter = () => {
		setDislikeCount(dislikeCount + 1);
	};

	return (
		<div className={className}>
			<div
				className='emoji-count'
				onClick={handleCounter}
			>
				<span>👍</span>{ count }
			</div>
			<div
				className='emoji-count'
				onClick={handleDislikeCounter}
			>
				👎{ dislikeCount }
			</div>
		</div>
	);
};

export default styled(EmojiReactions)`
	dispaly: inline-block;
	padding: 1rem;
	border-top-style: solid;
	border-top-width: 1px;
	border-top-color: grey_light;
	color: #4D9999;
	&:hover {
		cursor: pointer;
	}
	
	span {
		font-size: lg;
	}

	.emoji-count {
		display: inline-block;
		margin-right: 2rem;
		font-size: md;
	}
`;