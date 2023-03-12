import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, updateUser } from "../helper";

const Update = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState();
  const [userData, setUserData] = useState();
  const { id } = useParams();

  const handleUpdateUser = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      age: age,
    };
    const update = await updateUser(data);
    if (update) {
      alert("user updated");
    } else {
      alert("error");
    }
  };

  const getAllUserById = async () => {
    const user = await getUserById(id);
    if (user) {
      setUserData(user?.data);
    }
  };

  useEffect(() => {
    getAllUserById();
  }, []);

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Update User</h1>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstname"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={userData?.firstName}
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastname"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
            value={userData?.lastName}
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="number"
            placeholder="Phone no."
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={userData?.phoneNumber}
          />
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            value={userData?.age}
          />

          <button
            type="submit"
            class="bg-purple-500 text-center font-bold py-3 px-4 rounded text-white"
            onClick={() => handleUpdateUser()}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
