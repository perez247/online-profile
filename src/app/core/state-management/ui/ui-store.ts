import { UIActionConstant } from './ui-action-constants';
import { tassign } from 'tassign';


export interface IUIAppState {
    rightLoader: boolean;
}

export const UI_INITIAL_STATE: IUIAppState = {
    rightLoader: true,
};

export function uiReducer(state: IUIAppState = UI_INITIAL_STATE, action): IUIAppState {

    const obj = new UiActions(state, action);

    switch (action.type) {
        case UIActionConstant.LOADING_RIGHT_CONTENT: return obj.setrightSideLoading();
        // case UserActionConstant.SET_PERSONAL_DETAILS: return obj.setPersonalDetails();
        default: return state;
    }
}




class UiActions {

    constructor(private state: IUIAppState, private action: any) {}

    setrightSideLoading() {
        return tassign(this.state, { rightLoader: this.action.loading });
    }

}
