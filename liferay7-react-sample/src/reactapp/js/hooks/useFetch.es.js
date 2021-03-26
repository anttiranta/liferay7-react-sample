import {useCallback, useState} from 'react';
import httpClient from '../utils/client.es'

const useFetch = ({
	callback = (data) => data,
	params = {},
	url,
}) => {
	const [data, setData] = useState({});

	const client = httpClient;
	const queryParamsStr = JSON.stringify(params);

	const fetchData = useCallback(
		() =>
			client.get(url, {params}).then(({data}) => {
				setData(data);

				return callback(data);
			}),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[client, queryParamsStr, url]
	);

	return {
		data,
		fetchData,
	};
};

export {useFetch};
