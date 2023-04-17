import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
	applyMiddleware,
	legacy_createStore as createStore,
	Store,
} from 'redux';
import React from 'react';
import { mockedState } from './mockData';
import { rootReducer } from 'store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { RootState } from 'store/storeTypes';

function render(
	ui: React.ReactElement = <></>,
	initial = mockedState,
	storeMock: Store = createStore(
		rootReducer,
		initial,
		composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootState>))
	)
) {
	function Wrapper({
		children,
	}: {
		children: JSX.Element | JSX.Element[] | string;
	}) {
		return <Provider store={storeMock}>{children}</Provider>;
	}

	return { storeMock, ...rtlRender(ui, { wrapper: Wrapper }) };
}

export default render;

export const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUsedNavigate,
}));
