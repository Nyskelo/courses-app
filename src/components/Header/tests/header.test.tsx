import { screen } from '@testing-library/react';
import render from '__mocks__/test-utils';
import Header from '../Header';

describe("Header should have logo and user's name", () => {
	beforeEach(() => {
		render(<Header />);
	});
	it('Should have logo', () => {
		const logo = screen.getByRole('img', { name: /logo/i });
		expect(logo).toBeInTheDocument();
	});
	it("Should have user's name", () => {
		expect(screen.queryByText('Alla Oleksyn')).toBeInTheDocument();
	});
});
