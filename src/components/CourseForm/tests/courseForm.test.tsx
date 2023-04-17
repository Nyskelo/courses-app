import { fireEvent, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { addAuthor, deleteAuthor } from 'store/authors/authorsCreators';
import { actions } from 'store/authors/authorsTypes';
import * as dispatch from 'store/storeTypes';
import render from '__mocks__/test-utils';
import CourseForm from '../CourseForm';

describe('CourseForm:', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('CourseForm should show authors lists (all and course authors - "Kate Author").', () => {
		render(<CourseForm />);
		expect(screen.getAllByTestId('author')).toHaveLength(4);
		expect(screen.getByText('Kate Author')).toBeInTheDocument();
	});

	it("CourseForm 'Create author' click button should call dispatch.", () => {
		const jsdomAlert = window.alert;
		window.alert = () => console.log;

		const useDispatchMock = jest.spyOn(dispatch, 'useAppDispatch');

		const { getByTestId } = render(<CourseForm />);
		const btn = getByTestId('create-course');

		fireEvent.click(btn);

		expect(useDispatchMock).toHaveBeenCalled();

		window.alert = jsdomAlert;
	});

	it("CourseForm 'Add author' button click should add an author to course authors list.", async () => {
		const useDispatchSpy = jest.spyOn(dispatch, 'useAppDispatch');
		const mockDispatchFn = jest.fn();
		useDispatchSpy.mockReturnValue(mockDispatchFn);

		const { storeMock } = render(<CourseForm />);

		const firstAuthorInTheList = storeMock.getState().authors.authors[0];

		const buttons = screen.getAllByRole('button', {
			name: /Add author/i,
		});
		buttons.forEach((button) => fireEvent.click(button));

		expect(mockDispatchFn).toHaveBeenCalledWith({
			payload: [firstAuthorInTheList],
			type: actions.ADD_AUTHOR_TO_COURSE_LIST,
		});

		expect(storeMock.getState().authors.authors).toHaveLength(3);
		expect(storeMock.getState().authors.courseAuthors).toHaveLength(1);

		act(() => {
			storeMock.dispatch(addAuthor(firstAuthorInTheList));
		});

		expect(storeMock.getState().authors.authors).toHaveLength(2);
		expect(storeMock.getState().authors.courseAuthors).toHaveLength(2);

		expect(storeMock.getState().authors.authors).not.toContain(
			firstAuthorInTheList
		);
		expect(storeMock.getState().authors.courseAuthors).toContain(
			firstAuthorInTheList
		);
	});

	it("CourseForm 'Delete author' button click should delete an author from the course list", async () => {
		const useDispatchSpy = jest.spyOn(dispatch, 'useAppDispatch');
		const mockDispatchFn = jest.fn();
		useDispatchSpy.mockReturnValue(mockDispatchFn);

		const { storeMock } = render(<CourseForm />);

		const firstAuthorInTheList = storeMock.getState().authors.courseAuthors[0];

		const buttons = screen.getAllByRole('button', {
			name: /Delete author/i,
		});
		buttons.forEach((button) => fireEvent.click(button));

		expect(mockDispatchFn).toHaveBeenCalledWith({
			payload: [firstAuthorInTheList],
			type: actions.DELETE_AUTHOR_FROM_COURSE_LIST,
		});

		expect(storeMock.getState().authors.authors).toHaveLength(3);
		expect(storeMock.getState().authors.courseAuthors).toHaveLength(1);

		act(() => {
			storeMock.dispatch(deleteAuthor(firstAuthorInTheList));
		});

		expect(storeMock.getState().authors.authors).toHaveLength(4);
		expect(storeMock.getState().authors.courseAuthors).toHaveLength(0);

		expect(storeMock.getState().authors.authors).toContain(
			firstAuthorInTheList
		);
	});
});
