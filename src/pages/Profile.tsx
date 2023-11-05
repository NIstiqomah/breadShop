import React from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/service';
import { AppDispatch } from '../app/store';
// import { userType } from './type';

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    // const data = useSelector((state: any) => state.userReducer.users) as Array<userType>;

    React.useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    // React.useEffect(() => {
    //     console.log(data);
    // }, []);

    return (
        <div>
            <span>Hi</span>
        </div>
    );
};

export default Profile;
