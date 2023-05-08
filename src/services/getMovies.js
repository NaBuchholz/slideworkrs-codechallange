import axios from 'axios';

const generateBaseUrl = (limit = 20) => {
	const baseUrl = `https://movies.slideworks.cc/movies?limit=${limit}`;
	return baseUrl;
};

export const dataLoader = async () => {
	const response = await axios.get(generateBaseUrl());
	const moviesArray = response.data.data;
	return moviesArray;
};
