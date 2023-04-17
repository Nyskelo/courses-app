export const localStorageRemoveItem = (arr: string[]) => {
	arr.forEach((el) => localStorage.removeItem(el));
};
