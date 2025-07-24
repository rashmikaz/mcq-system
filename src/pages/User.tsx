import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../reducers/UserSlice";
import { AppDispatch } from "../store/Store";
import { UserModel } from "../model/UserModel";

function User() {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state) => state.users);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleAdd = () => {
    if (!name || !email) {
      alert("Please fill in both name and email");
      return;
    }

    const newUser = new UserModel(name, email);
    dispatch(saveUser(newUser));
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
  };

  return (
    <div>
      <div>
        <h1 className="font-mono font-semibold text-6xl absolute top-40 left-150 size-10 w-200">
          Online MCQ System
        </h1>
      </div>

      <div className="mb-12 absolute top-58 right-107 size-10 w-100">
        <p className="font-light">
          Welcome, please enter your details to continue
        </p>
      </div>

      <div className="p-6 w-100 absolute top-79 right-75 size-16">
        <div className="flex flex-col gap-5 mb-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleAdd}
          className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-145 bottom-70 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </div>

      <div className="flex justify-end">
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute right-111 bottom-70 text-white px-4 py-2 rounded">
          Dashboard
        </button>
      </div>

      <div>
        <img src="src/assets/image.jpg" alt="Banner" width="800" height="800" />
      </div>
    </div>
  );
}

export default User;
