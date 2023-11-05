import axios from 'axios';
import { AppThunk } from '../app/store';
import { setDataUser } from './action';

export const getUser = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        const data = {
            products: response.data.products,
            total: response.data.total,
            skip: response.data.skip,
            limit: response.data.limit,
        };
        dispatch(setDataUser(data));
    } catch (error) {
        console.log(error);
    }
};
