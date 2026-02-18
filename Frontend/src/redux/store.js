import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "../redux/reducers/user"


const myStore= new configureStore({
    reducer :{
        userGS:userReducer,
    }
});
export default myStore;