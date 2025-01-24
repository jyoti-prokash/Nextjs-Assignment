import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';

const Profile = async() => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return (
        <div className='m-10 border-2 border-blue-600 p-10'>
            <h2 className='text-center font-bold text-2xl'>Welcome to your profile {user.given_name} {user.family_name}</h2>
            <p className='text-center font-bold my-3'>Email: {user.email}</p>
        </div>
    );
};

export default Profile;