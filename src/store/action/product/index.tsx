import { AppDispatch } from '../../store';
import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../../slice/productSlice';

export const fetchUserData = () => async (dispatch: AppDispatch) => {
  dispatch(fetchDataStart());
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure());
  }
};
