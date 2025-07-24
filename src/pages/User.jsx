import React from "react";

const User = () => {
  return (
    <div>
      <div>
        <h1 className="font-mono font-semibold text-6xl absolute top-40 left-150 size-10 w-200">
          Online MCQ System);
        </h1>
      </div>
      <div className="mb-12 absolute top-58 right-107 size-10 w-100 ">
        <p className="font-light">
          Welcome ,please enter your details to the continue
        </p>
      </div>

      <div className="p-6 w-100 absolute top-79 right-75 size-16">
        <div className="flex flex-col gap-5 mb-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-155 bottom-70 ">
          register
        </button>
      </div>

      <div className="flex justify-end">
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-131 bottom-70 ">
          dashboard
        </button>
      </div>

      <div>
        <img src="src/assets/image.jpg" alt="" width="800" height="800" />
      </div>
    </div>
  );
};

export default User;
