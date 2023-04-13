export const localStorageRemoveItem = (arr: string[]) => {
	arr.forEach((el) => localStorage.removeItem(el));
};
// export const localStorageAddItem = <T>(obj: T) => {
// 	Object.entries(obj).forEach(([key, value]) => {
// 		if (typeof value !== 'string') {
// 			localStorage.setItem(key, JSON.stringify(value));
// 		} else {
// 			localStorage.setItem(key, value);
// 		}
// 	});
// };
