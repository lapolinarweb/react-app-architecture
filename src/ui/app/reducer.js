// @flow
import {
	CLEAR_PAGE_TITLE,
	SET_PAGE_TITLE,
	UPDATE_APP_USER_NAME
} from './actions';

const PAGE_DEFAULT_TITLE = 'AfterAcademy | OpenSource Project';

export type State = {
	currentPageTitle: string | null,
	updatedUserName: string | null,
}

const defaultState: State = {
	currentPageTitle: null,
	updatedUserName: null
};

const reducer = (state: State = defaultState, action: Action) => {
	switch (action.type) {
		case CLEAR_PAGE_TITLE:
			return { ...defaultState }
		case SET_PAGE_TITLE:
			return {
				...state,
				currentPageTitle: typeof (action.data) === 'string' ? action.data : PAGE_DEFAULT_TITLE
			}
		case UPDATE_APP_USER_NAME:
			return {
				...state,
				updatedUserName: action.data
			}
		default:
			return state;
	}
}

export default reducer;