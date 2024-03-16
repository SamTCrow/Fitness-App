import { useQuery } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';

const lang: string = 'en';
export interface ExerciseSearchItemResponse {
	data: {
		id: number;
		base_id?: number;
		name: string;
		category?: string;
		image?: string;
		image_thumbnail?: string;
	};
}

type Category = {
	id: number;
	name: string;
};

const categoriesQuery = 'https://wger.de/api/v2/exercisecategory/';

const config: AxiosRequestConfig = {
	headers: {
		Authorization: process.env.WGER_API,
	},
};

const baseWgerUrl = 'https://wger.de/api/v2/';
export const useSearchQuery = async (query: string) => {
	const { data } = await axios.get(
		`${baseWgerUrl}exercise/search/?language=${lang}&term=${query}`,
		config
	);
	return data;
};

export const useSearch = (query: string) => {
	return useQuery({
		enabled: false,
		queryKey: ['searchQuery'],
		queryFn: async () => {
			const { suggestions } = await useSearchQuery(query);
			return suggestions as ExerciseSearchItemResponse[];
		},
	});
};

export const useCategories = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: async () => {
			const { data } = await axios.get(categoriesQuery, config);
			return data.results as Category[];
		},
	});
};
