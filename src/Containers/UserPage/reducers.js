import {ActionTypes} from './constants'
const initialState = {
    user: null
}
export default function userPageReducer (state = initialState, action ) {
    switch (action.type) {
        case ActionTypes.SET_USER:
            return { ...state, user:action.payload};
        default:
            return state;
    }
}