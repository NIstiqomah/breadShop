import { createAction } from '@reduxjs/toolkit';
import { dataType, userType } from '../pages/type';

export const setDataUser = createAction<dataType<userType>>('user/setDataUser');
