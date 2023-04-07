const HOUR = 60;
export const minutesToHoures = (duration) => {
	const hours = String(Math.floor(duration / HOUR)).padStart(2, '0');
	const minutes = String(Math.floor(duration % HOUR)).padStart(2, '0');
	return `${hours}:${minutes}`;
};
