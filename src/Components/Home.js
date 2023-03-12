import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { deleteUser, getUsers } from "../helper";

const Home = () => {
  const [userdata, setUserData] = useState();
  const navigate = useNavigate();
  const AddUser = () => {
    navigate("/user/create");
  };

  const UpdateUser = (id) => {
    navigate(`/user/edit/${id}`);
  };

  const getAllUsers = async () => {
    const user = await getUsers();
    if (user) {
      setUserData(user?.data);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    const response = await deleteUser(id);
    if (response) {
      alert("user delete successfully");
    } else {
      alert("error");
    }
  };

  return (
    <div class="antialiased bg-gray-100 text-gray-600 h-screen px-4">
      <div class="flex flex-col justify-center h-full">
        <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">ADMIN DASHBOARD</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto">
              <table class="table-auto w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      <input type={"checkbox"} />
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      FirstName
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      LastName
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Contact no.
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Age
                    </th>
                    <th class="p-2 whitespace-nowrap font-semibold text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="text-sm divide-y divide-gray-100">
                  {userdata &&
                    userdata?.map((item, index) => (
                      <tr key={index}>
                        <td class="p-2 whitespace-nowrap font-semibold text-left">
                          <input type={"checkbox"} />
                        </td>
                        <td class="p-2 whitespace-nowrap flex items-center w-10 h-10 flex-shrink-0 mr-2 sm:mr-3 font-medium text-gray-800">
                          {item?.firstName}
                        </td>
                        <td class="p-2 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <div class="font-medium text-gray-800">
                                {item?.lastName}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="p-2 whitespace-nowrap text-left font-medium text-green-500">
                          {item?.phoneNumber}
                        </td>
                        <td class="p-2 whitespace-nowrap text-lg text-center">
                          {item?.age}
                        </td>
                        <td class="p-2 whitespace-nowrap gap-2 flex items-center">
                          <button
                            onClick={() => AddUser()}
                            class="bg-blue-400 text-gray-50  rounded-md  py-2 px-2"
                          >
                            ADD
                          </button>

                          <button
                            onClick={() => UpdateUser(item?._id)}
                            class="bg-yellow-400 text-gray-50  rounded-md py-2 px-2 "
                          >
                            Update
                          </button>

                          <button
                            class="bg-red-400 text-gray-50 rounded-md  py-2 px-2"
                            onClick={() => handleDeleteUser(item?._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
