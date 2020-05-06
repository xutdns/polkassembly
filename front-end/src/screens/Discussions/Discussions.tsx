// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';

import DiscussionsListing from '../../components/Listings/DiscussionsListing';
import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const DiscussionsContainer = () => {

	const { data, error, refetch } = useLatestDiscussionPostsQuery({ variables: { limit: 20 } });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) {
		return <FilteredError text={error.message}/>;
	}

	if (data) return <DiscussionsListing data={data} />;

	return <Loader/>;

};

export default DiscussionsContainer;
