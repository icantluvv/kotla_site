'use client';

import React, { useEffect, useState } from 'react';
import { Login } from '../lib/login';
import { Register } from '../lib/register';

export default function Auth() {
  const [showReg, setShowReg] = useState(true);
  const [showLog, setShowLog] = useState(false);
  const [email, setEmail] = useState('');
  const [Nickname, setNickname] = useState('');
  const [Phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [hasToken, setHasToken] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setHasToken(false);
    }
  }, []);

  function CloseAuth() {
    setShowReg(false);
    setShowLog(false);
  }

  function changeToLogIn() {
    setShowReg(false);
    setShowLog(true);
  }

  function changeToRegister() {
    setShowLog(false);
    setShowReg(true);
  }

  async function loginToAcc() {
    try {
      await Login(email, password);
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async function createNewAcc() {
    try {
      await Register(email, Phone, Nickname, password);
      window.location.reload();
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  // If the user has a token, do not show the registration or login forms
  if (hasToken) {
    return null;
  }

  return (
    <>
      {showReg && (
        <div className="w-[300px] absolute top-[20%] flex flex-col items-center h-[450px] bg-white border ">
          <div className="w-full flex justify-end">
            <button
              onClick={CloseAuth}
              className="bg-black w-[30px] text-white"
            >
              x
            </button>
          </div>
          <h1 className="text-[20px] mt-[1em]">Register</h1>
          <div className="flex flex-col mt-[2em] flex-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full mt-[1em] border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
            <input
              type="Phone"
              id="Phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="border w-full mt-[1em] border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
            <input
              type="Nickname"
              id="Nickname"
              placeholder="Nickname"
              onChange={(e) => setNickname(e.target.value)}
              className="border w-full mt-[1em] border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
          </div>

          <button
            onClick={createNewAcc}
            className="bg-black w-[85%] h-[48px] mb-[0.5em] text-white"
          >
            Register
          </button>

          <button onClick={changeToLogIn} className="mb-[0.5em]">
            Have account?
          </button>
        </div>
      )}
      {showLog && (
        <div className="w-[300px] absolute top-[20%] flex flex-col items-center h-[400px] bg-white border ">
          <div className="w-full flex justify-end">
            <button
              onClick={CloseAuth}
              className="bg-black w-[30px] text-white"
            >
              x
            </button>
          </div>
          <h1 className="text-[20px] mt-[1em]">LogIn</h1>
          <div className="flex flex-col mt-[5em] flex-1">
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full mt-[1em] border-black pl-[1em] pr-[1em] pt-[0.5em] pb-[0.5em]"
            />
          </div>

          <button
            onClick={loginToAcc}
            className="bg-black w-[85%] h-[48px] mb-[0.5em] text-white"
          >
            LogIn
          </button>

          <button onClick={changeToRegister} className="mb-[0.5em]">
            Create account
          </button>
        </div>
      )}
    </>
  );
}
