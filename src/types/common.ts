export type TypeButton = {
	[key: string]: TypeButtonExtra;
	text: string;
	width: string;
};

export type TypeButtonExtra =
	| React.HTMLAttributes<HTMLButtonElement>
	| string
	| (() => void)
	| ((id: string, name: string) => void)
	| ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean)
	| ((e: React.ChangeEvent<HTMLInputElement>) => void)
	| ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);

export type TypeInput = {
	[key: string]: TypeInputExtra;
	labelVisibility: string;
	labelText: string;
	name: string;
	type: string;
	placeholder: string;
	value: string;
};

type TypeInputExtra =
	| React.HTMLAttributes<HTMLButtonElement>
	| string
	| (() => void)
	| ((e: React.ChangeEvent<HTMLInputElement>) => void)
	| ((e: React.ChangeEvent<HTMLInputElement>) => boolean)
	| ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => boolean);

export type TypeTextarea = {
	[key: string]: string | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void);
	name: string;
	labelVisibility: string;
	labelText: string;
};

export type TypeUserMessage = {
	children?: JSX.Element | JSX.Element[] | string;
	messageType: string;
	text: string;
};
