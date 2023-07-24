import React from 'react';

const ProfilePage = () => {
  // Sample user data (replace this with actual data from your backend or state management)
  const user = {
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    age: 30,
    phone: '123-456-7890',
  };

  // Sample previously booked trips data (replace this with actual data from your backend or state management)
  const bookedTrips = []; // Add your booked trips data here

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-3/4 sm:w-1/2 px-4 py-8 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-3xl font-bold mb-8">Profile</h2>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Personal Details</h3>
          <p className="mb-2">
            <span className="font-bold">Username:</span> {user.username}
          </p>
          <p className="mb-2">
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p className="mb-2">
            <span className="font-bold">Age:</span> {user.age}
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> {user.phone}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Previously booked trips</h3>
          {bookedTrips.length === 0 ? (
            <p>No trips booked yet.</p>
          ) : (
            bookedTrips.map((trip, index) => (
              <div key={index} className="border border-gray-300 rounded p-4 mb-4">
                {/* Display trip details here (e.g., trip name, dates, etc.) */}
                <p>Trip: {trip.name}</p>
                <p>Dates: {trip.dates}</p>
                {/* Add more trip details as needed */}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

