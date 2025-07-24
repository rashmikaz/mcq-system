import React from "react";

function Dashboard() {
  return (
    <>
      <div className="absolute top-10 left-10 size-10 w-200">
        <h1 className="font-mono font-semibold text-6xl">Hello, Student 👋</h1>
        <p className="font-light text-2xl w-125">
          Welcome to your dashboard. Here you can see Available Exams for today
          and upcoming exams.);
        </p>
      </div>

      <div className="absolute top-30 left-140 size-10 w-180">
        <img src="src/assets/image.jpg" alt="Banner" width="800" height="800" />
      </div>

      <div className="bg-white rounded-lg px-6 py-8 ring shadow-xl w-40 h-30 absolute top-50 right-315 size-18">
        <h3 className="text-gray-900 absolute bottom-18">
          java script foundation exam
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm absolute top-11">
          from 10:00 AM to 12:00 PM on 25th October
        </p>
      </div>

      <div className="bg-white rounded-lg px-6 py-8 ring shadow-xl w-50 h-30 absolute top-50 right-260 size-18">
        <h3 className="text-gray-900 absolute bottom-18">
          database management exam
        </h3>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm absolute top-11">
          from 12:00 AM to 4:00 PM on 25th October
        </p>
      </div>
    </>
  );
}

export default Dashboard;
