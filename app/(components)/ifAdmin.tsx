'use client';
import React from 'react';
import Link from 'next/link';
const IfAdmin = () => {
  const role = localStorage.getItem('role');
  return (
    <div className="absolute right-[100px] flex h-full items-center">
      {role == 'admin' && (
        <Link href={'/admin'} className="text-[14px] ">
          Редактировать товары
        </Link>
      )}
    </div>
  );
};

export default IfAdmin;
