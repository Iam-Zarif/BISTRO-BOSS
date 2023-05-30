/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Title from "c:/assignment-11/toy-marketplace-client/src/title/title";

const AllUsers = () => {

const handleDelete =(user) =>{

}

  Title("BISTRO | ALL USERS");
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  return (
    <div>
      <h1 className="text-3xl font-bold">Total Users : {users.length}</h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>Blue</td>
                  <td>
                    {" "}
                    <button className="btn" onClick={() => handleDelete(user)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
