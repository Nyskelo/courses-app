import { AxiosRequestConfig } from 'axios';
import { Author } from './types';

export type TypeUseAuthorsReducer = {
	authors: Array<Author>;
	setAuthors: (value: React.SetStateAction<Array<Author>>) => void;
};
export type TypeUseAuthorsReducerReturn =
	| { authors: Array<Author>; courseAuthors: Array<Author> }
	| string
	| ((e: React.ChangeEvent<HTMLInputElement>) => void)
	| ((id: string, name: string) => void);

export type TypeUseFetchReq = {
	method: 'get' | 'post' | 'put' | 'delete';
	url: string;
	start?: boolean | undefined;
	body?: object | undefined;
	headers?: object;
	auth?: object;
};

export type TypeUseFetchRes = {
	data: AxiosRequestConfig['data'];
	loading: boolean;
	error: Error;
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
	status: number | undefined;
};
