import { IUserAppState, USER_INITIAL_STATE, userReducer } from '../user-state/user-store';
import { combineReducers } from 'redux';
import { IUIAppState, UI_INITIAL_STATE, uiReducer } from '../ui/ui-store';

export interface IAppState {
    user: IUserAppState;
    ui: IUIAppState;
}

export const INITIAL_STATE: IAppState = {
    user: USER_INITIAL_STATE,
    ui: UI_INITIAL_STATE
};

export const rootReducer = combineReducers({
    user: userReducer,
    ui: uiReducer
});
