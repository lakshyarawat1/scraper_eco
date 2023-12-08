"use client";

import React from "react";

const Login = () => {
//   const handleSubmit = () => {
//     alert("Submitted");
//   };
  return (
    <div className="w-1/3 border-2 m-auto mt-20 rounded-xl flex flex-col">
      <h2 className="text-center m-5 text-2xl font-bold">
        Login <span className="text-red-400">/ SignUp</span>
      </h2>
      <form className="m-auto flex flex-col gap-4 text-xl font-bold mt-10">
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="Enter your email ..."
            className="text-lg font-normal pl-5 ml-16"
          />
        </div>
        <div>
          <label>Username : </label>
          <input
            type="text"
            placeholder="Enter the username ..."
            className="text-lg font-normal pl-5 ml-4"
          />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter the password ..."
            className="text-lg font-normal pl-5 ml-5"
          />
        </div>
        <button
        //   onClick={handleSubmit}
          className=" bg-red-400 w-1/2 mx-auto my-10 py-3 text-white rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
