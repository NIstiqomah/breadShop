import React from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { dataType, userType } from './type';
import { getUser } from '../redux/service';

const Profile = () => {
    const dispatch = useAppDispatch();
    const data = useAppSelector((state) => state.userReducer.users) as dataType<userType>;

    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    console.log(data.products);

    return (
        <div>
            <span>Hi</span>
        </div>
    );
};

export default Profile;
