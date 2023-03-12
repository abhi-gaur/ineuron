import React, { useState } from "react";
import { createUser } from "../helper";

const Add = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState();

  const addUser = async () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      age: age,
    };
    const response = await createUser(data);
    if (response) {
      alert("user added");
      //   revert back to /dashboard route
    }
  };

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
      <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Add user</h1>
          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="firstname"
            placeholder="FirstName"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="lastname"
            placeholder="LastName"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="number"
            placeholder="Phone no."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="age"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          <button
            type="submit"
            class="bg-green-500 text-center font-bold py-3 px-4 rounded text-white"
            onClick={() => addUser()}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
