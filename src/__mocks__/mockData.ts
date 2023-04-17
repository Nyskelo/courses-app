import { CoursesState } from 'store/courses/coursesTypes';

export const mockedState = {
	user: {
		isAuth: true,
		name: 'Alla Oleksyn',
		email: 'allaoleksyn@gmail.com',
		token: '',
		role: 'user',
	},
	courses: {
		courses: [
			{
				id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
				title: 'JavaScript',
				description: `Lorem Ipsum i typesetting, remaining essentially  nchanged.`,
				creationDate: '08/03/2021',
				duration: 120,
				authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
			},
			{
				id: 'de5bbb59-90f5-4dbc-b8a9-aaf205bbbbba',
				title: 'Angular',
				description: `Lorem Ipsum i typesetting, remaining essentially  nchanged.`,
				creationDate: '18/06/2021',
				duration: 60,
				authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f'],
			},
		],
	},
	authors: {
		authors: [
			{
				id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				name: 'Vasiliy Dobkin',
			},
			{
				id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
				name: 'Anna Sidorenko',
			},
			{
				id: 'tttttttt-b23d-497c-9e4d-84e4dc02882f',
				name: 'Test Author',
			},
		],
		courseAuthors: [
			{
				id: 'kkkkkkkk-b23d-497c-9e4d-84e4dc02882f',
				name: 'Kate Author',
			},
		],
	},
	state: { status: 'succeeded', message: '', error: '' },
};

export const fetchCourses = [
	{
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		creationDate: '9/3/2021',
		description: 'description',
		duration: 30,
		id: '66cc289e-6de9-49b2-9ca7-8b4f409d6467',
		title: 'Course from API #1',
	},
	{
		authors: ['9b87e8b8-6ba5-40fc-a439-c4e30a373d36'],
		creationDate: '9/3/2021',
		description: 'description',
		duration: 30,
		id: '66cc289e-6de9-49b2-4444-8b4f409d6467',
		title: 'Course from API #2',
	},
];

export const initialStateCourses: CoursesState = { courses: [] };

export const newStateCourses = [
	{
		id: '1',
		title: 'New Course',
		description: 'description',
		creationDate: '2/2/2023',
		duration: 123,
		authors: ['tttttttt-b23d-497c-9e4d-84e4dc02882f'],
	},
];
