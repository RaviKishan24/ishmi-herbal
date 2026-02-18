import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from "../constants/user";

const userInitialstate = {
    user: null,
    success: "",
    failure: "",
    isLoading: false,
    error: null,
}

export const userReducer = (state = userInitialstate, action) => {
    
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                success: "",
                failure: "",
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                success: "User created successfully"
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:action.payload,
                failure:action.payload
            }
            default:
                return state;
    }
    


}