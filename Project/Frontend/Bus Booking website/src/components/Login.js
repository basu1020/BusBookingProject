import React, { useState } from 'react';

const Login = () => {
  // State for storing email and password input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your login logic here, e.g., sending data to a backend API for authentication
    // For this example, we will just log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear input fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[url(https://img.freepik.com/free-vector/characters-people-holding-giant-digital-devices_53876-32614.jpg?w=900&t=st=1690033061~exp=1690033661~hmac=29cf3a0eee5c0558b4bd394c57cb2bbe578929495a4cd520ade40976702dda89)] bg-cover bg-no-repeat bg-[center]">
      <form className="w-1/4 xl:w-2/5 flex flex-col justify-center align-middle bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl text-center mb-8 font-bold">Please login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="my-font appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="my-font appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <button
            className="bg-orange text-white font-bold py-2 px-4 rounded w-full mb-4 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p className="text-sm text-gray-600 mb-2">Not a user?</p>
          <button
            className="bg-orange text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            type="button"
            // Add the logic for handling the sign-up action here
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
