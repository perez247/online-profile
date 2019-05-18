
import { tassign } from 'tassign';
import { UserActionConstant } from './user-action-constants';


export interface IUserAppState {
    user: firebase.User;
    // personalDetails: {};
}

export const USER_INITIAL_STATE: IUserAppState = {
    user: Object.assign({})
    // personalDetails: Object.assign({}),
};




export function userReducer(state: IUserAppState = USER_INITIAL_STATE, action): IUserAppState {

    const obj = new UserActions(state, action);

    switch (action.type) {
        case UserActionConstant.SET_AUTH_USER: return obj.setUser();
        // case UserActionConstant.SET_PERSONAL_DETAILS: return obj.setPersonalDetails();
        default: return state;
    }
}




class UserActions {

    constructor(private state: IUserAppState, private action: any) {

    }

    setUser() {
        return tassign(this.state, { user: this.action.user });
    }

}
