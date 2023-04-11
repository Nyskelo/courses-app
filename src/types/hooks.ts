import { AxiosRequestConfig } from 'axios';
import { Author } from 'store/authors/authorsTypes';

export type TypeUseAuthorsReducer = {
	authors: Array<Author>;
	setAuthors: (value: React.SetStateAction<Array<Author>>) => void;
};
export type TypeUseAuthorsReducerReturn =
	| { authors: Array<Author>; courseAuthors: Array<Author> }
	| string
	| ((e: React.ChangeEvent<HTMLInputElement>) => void)
	| ((id: string, name: string) => void);

export enum Method {
	GET = 'get',
	POST = 'post',
	PUT = 'put',
	DELETE = 'delete',
}
export type TypeUseFetchReq = {
	method: Method;
	url: string;
	start?: boolean | undefined;
	body?: object;
	headers?: object;
	withCredentials?: boolean;
};

export type TypeUseFetchRes = {
	data: AxiosRequestConfig['data'];
	loading: boolean;
	error: Error;
	setStart: React.Dispatch<React.SetStateAction<boolean>>;
	status: number | undefined;
};
