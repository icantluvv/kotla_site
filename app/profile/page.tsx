'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getProfile } from '../lib/getProfile';

const Profile = () => {
  const [hasToken, setHasToken] = useState(false);
  const [me, setMe] = useState<Profile | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setHasToken(true);
    }
    async function getMe() {
      const me = await getProfile();
      setMe(me);
    }
    getMe();
  }, []);

  function logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  if (!hasToken) {
    return (
      <div className="w-full min-h-[20em] mb-[10em] mt-[10em] flex flex-col justify-center items-center"></div>
    );
  }

  return (
    <main className="w-full mb-[10em] mt-[10em] flex flex-col justify-center items-center">
      <div className="w-[200px] h-[200px] p-[2em] border-2 border-black mb-[3em]">
        <Image
          src={'/profile.svg'}
          alt={''}
          width={200}
          height={200}
          layout="responsive"
        ></Image>
      </div>
      <h1>Your profile id: {me?.id}</h1>
      <h1>Your email: {me?.email}</h1>
      <h1>Your nickname: {me?.Nickname}</h1>
      <button
        onClick={logout}
        className="w-[200px] mt-[2em] h-[48px] bg-black text-white"
      >
        Log Out
      </button>
    </main>
  );
};

export default Profile;
