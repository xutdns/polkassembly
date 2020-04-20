// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ApiPromise, WsProvider } from '@polkadot/api';
import { useEffect, useState } from 'react';

export interface UseApiReturnType {
	api: ApiPromise | undefined;
	apiReady: boolean;
}
export function useApi():UseApiReturnType {
	const WS_PROVIDER = process.env.REACT_APP_WS_PROVIDER || 'wss://kusama-rpc.polkadot.io';
	const [api, setApi] = useState<ApiPromise>();
	const [apiReady, setApiReady] = useState(false);

	useEffect(() => {
		const provider = new WsProvider(WS_PROVIDER);
		setApiReady(false);
		setApi(new ApiPromise({ provider }));
	},[WS_PROVIDER]);

	useEffect(() => {
		if(api){
			api.isReady.then(() => {
				setApiReady(true);
				console.log('API ready');
			})
				.catch((error) => {
					console.error(error);
				});
		}
	}, [api]);

	return { api, apiReady };
}