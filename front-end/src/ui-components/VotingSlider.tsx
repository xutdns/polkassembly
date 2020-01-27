import React, { useState } from 'react';
import Slider from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import styled from '@xstyled/styled-components';

interface Props {
	className?: string
}

const VotingSlider = ({ className }:Props) => {
	const tokensAvailable = 762;

	const [lockedTokens, setLockedTokens] = useState(0);
	const handleLockedTokens = (value: number) => {
		setLockedTokens(value);
	};

	const [sliderValue, setSliderValue] = useState(0);
	const handleSliderValue = (value: number) => {
		setSliderValue(value);
	};

	const lockPeriods = sliderValue/12.5;
	let lockWeeks = Math.pow(2, (sliderValue/12.5));

	return (
		<div className={className}>
			<h5>Tokens Locked</h5>
			<Slider
				className='slider'
				max={tokensAvailable}
				onChange={handleLockedTokens}
			/>
			<div className='text-muted'> {tokensAvailable - lockedTokens} / {tokensAvailable} KSM available.</div>
			<h5>Lock Period</h5>
			<Slider
				className='slider'
				dots={true}
				max={100}
				onChange={handleSliderValue}
				step={12.5}
			/>
			<div className='vote-calculation'>
				{lockedTokens} KSM * {lockPeriods} lock period ({lockWeeks == 1 ? 0 : lockWeeks} weeks) = <strong>{lockedTokens * lockPeriods} votes</strong>.
			</div>
		</div>
	);
};

export default styled(VotingSlider)`
	.rc-slider-rail {
		background-color: grey_light;
	}

	.rc-slider-track {
		background-color: red_primary;	
	}

	.rc-slider-handle {
		border-top-color: grey_secondary;
		border-bottom-color: grey_secondary;
		border-left-color: grey_secondary;
		border-right-color: grey_secondary;
		border-top-width: 1px;
		border-bottom-width: 1px;
		border-left-width: 1px;
		border-right-width: 1px;
		&:active {
			box-shadow: none;
		}
	}

	.rc-slider-dot-active {
		border-top-color: red_primary;
		border-bottom-color: red_primary;
		border-left-color: red_primary;
		border-right-color: red_primary;
	}

	h5 {
		font-size: sm;
		margin-bottom: 2rem;
	}

	.slider {
		margin-bottom: 2rem;
	}

	.text-muted {
		font-size: sm;
		margin-bottom: 2rem;
	}

	.vote-calculation {
		margin-bottom: 2rem;
	}
`;