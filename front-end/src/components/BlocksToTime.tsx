// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Popup } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import { chainProperties } from 'src/global/networkConstants';
import blockToTime from 'src/util/blockToTime';
import getNetwork from 'src/util/getNetwork';

interface Props {
	blocks: number | BN;
	className?: string
}

const DivContent = styled.div`
	font-size: xs;
	color: black_text;
`;

const BlocksToTime = ({ blocks, className }:Props ) => {
	const network = getNetwork();
	const { api, apiReady } = useContext(ApiContext);
	const DEFAULT_TIME = chainProperties?.[network]?.blockTime;
	const [blocktime, setBlocktime] = useState(DEFAULT_TIME);

	useEffect(() => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!apiReady) {
			console.error('api not ready');
			return;
		}

		setBlocktime(api.consts.babe?.expectedBlockTime.toNumber());
	}, [ api, apiReady]);

	return (
		<Popup
			className={className}
			trigger={<div>{blockToTime(blocks , blocktime)}</div>}
			content={<DivContent>{`${blocks} blocks`}</DivContent>}
			hoverable={true}
			position='top left'
		/>
	);
};

export default BlocksToTime;