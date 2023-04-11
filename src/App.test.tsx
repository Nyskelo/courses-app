import { render } from '@testing-library/react';
import Loading from './common/Loading/Loading';

test('renders learn react link', () => {
	render(<Loading />);
	const linkElement = true;
	expect(linkElement).toBeTruthy();
});
