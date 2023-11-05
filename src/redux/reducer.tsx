import { createReducer } from '@reduxjs/toolkit';
import { userState } from '../pages/type';
import { setDataUser } from './action';

const initiate: userState = {
    users: {
        products: [],
        limit: 30,
        skip: 0,
        total: 0,
    },
};

const userReducer = createReducer(initiate, (builder) => {
    builder.addCase(setDataUser, (state, action) => {
        state.users = action.payload;
    });
});

export default userReducer;
