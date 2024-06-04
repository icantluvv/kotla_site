import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <Image src={''} alt={''}></Image>
        <h1>Your profile id:</h1>
      </div>
    </div>
  );
};

export default Profile;
