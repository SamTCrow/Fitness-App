import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

type Bodypart =
	| "back"
	| "cardio"
	| "chest"
	| "lower arms"
	| "lower legs"
	| "neck"
	| "shoulders"
	| "upper arms"
	| "upper legs"
	| "waist";

type Equipment =
	| "assisted"
	| "band"
	| "barbell"
	| "body weight"
	| "bosu ball"
	| "cable"
	| "dumbbell"
	| "elliptical machine"
	| "ez barbell"
	| "hammer"
	| "kettlebell"
	| "leverage machine"
	| "medicine ball"
	| "olympic barbell"
	| "resistance band"
	| "roller"
	| "rope"
	| "skierg machine"
	| "sled machine"
	| "smith machine"
	| "stability ball"
	| "stationary bike"
	| "stepmill machine"
	| "tire"
	| "trap bar"
	| "upper body ergometer"
	| "weighted"
	| "wheel roller";

export type Target =
	| "abductors"
	| "abs"
	| "adductors"
	| "biceps"
	| "calves"
	| "cardiovascular system"
	| "delts"
	| "forearms"
	| "glutes"
	| "hamstrings"
	| "lats"
	| "levator scapulae"
	| "pectorals"
	| "quads"
	| "serratus anterior"
	| "spine"
	| "traps"
	| "triceps"
	| "upper back";

export type Exercise = {
	bodyPart: string;
	equipment: string;
	gifUrl: string;
	id: string;
	name: string;
	target: string;
	secondaryMuscles: string[];
	instructions: string[];
};

const limit = 15;

const getData = async (url: string) => {
	const options = {
		method: "GET",
		url: url,
		headers: {
			"X-RapidAPI-Key": process.env.EXERCISE_DB,
			"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const getALotOfData = async (url: string, offset = 0) => {
	const options = {
		method: "GET",
		url: url,
		params: { limit: limit.toString(), offset: offset.toString() },
		headers: {
			"X-RapidAPI-Key": process.env.EXERCISE_DB,
			"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		},
	};

	try {
		const response = await axios.request(options);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export const useBodyParts = () => {
	return useQuery({
		queryKey: ["bodyParts"],
		queryFn: async () => {
			const results = await getData(
				"https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
			);
			return results;
		},
	});
};

export const useEquipmentList = () => {
	return useQuery({
		queryKey: ["bodyParts"],
		queryFn: async () => {
			const results = await getData(
				"https://exercisedb.p.rapidapi.com/exercises/equipmentList",
			);
			return results;
		},
	});
};

export const useTargetList = () => {
	return useQuery({
		queryKey: ["bodyParts"],
		queryFn: async () => {
			const results = await getData(
				"https://exercisedb.p.rapidapi.com/exercises/targetList",
			);
			return results;
		},
	});
};

export const useExercisesList = () => {
	return useQuery({
		queryKey: ["ExercisesList"],
		queryFn: async () => {
			const results = await getALotOfData(
				"https://exercisedb.p.rapidapi.com/exercises",
			);
			return results;
		},
	});
};

export const useExerciseById = (id: string) => {
	return useQuery({
		queryKey: ["exerciseById"],
		queryFn: async () => {
			const results = await getData(
				`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
			);
			return results as Exercise;
		},
	});
};

export const useExerciseByName = (name: string) => {
	return useQuery({
		queryKey: ["exerciseByName"],
		enabled: false,
		queryFn: async () => {
			const results = await getALotOfData(
				`https://exercisedb.p.rapidapi.com/exercises/name/${name}`,
			);
			return results as Exercise[];
		},
	});
};

export const useExercisesByBodyPart = (bodyPart: Bodypart) => {
	return useQuery({
		queryKey: ["exerciseByBodyPart"],
		queryFn: async () => {
			const results = await getALotOfData(
				`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
			);
			return results as Exercise[];
		},
	});
};

export const useExerciseByEquipment = (equipment: Equipment) => {
	return useQuery({
		queryKey: ["exerciseByEquipment"],
		queryFn: async () => {
			const results = await getData(
				`https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
			);
			return results;
		},
	});
};

export const useExerciseByTarget = (target: Target) => {
	return useQuery({
		queryKey: ["exerciseByTarget"],
		queryFn: async () => {
			const results = await getData(
				`https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
			);
			return results;
		},
	});
};

export const useInfiniteExercises = (url: string) => {
	return useInfiniteQuery({
		queryKey: ["infiniteExercises", url],
		queryFn: ({ pageParam }: { pageParam: number }) =>
			getALotOfData(url, pageParam),
		initialPageParam: 0,
		getNextPageParam: (lastPage, _allPages, lastPageParam) => {
			return lastPage.length < limit ? undefined : lastPageParam + limit;
		},
	});
};
