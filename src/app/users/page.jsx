import axios from "axios";
import Link from "next/link";
import React from "react";

const Users = async () => {
  const {
    data: { users },
  } = await axios.get("https://dummyjson.com/users");

  return (
    <div>
      <h2 className="p-4 text-center text-3xl uppercase font-medium">Users</h2>
      <div className="grid grid-cols-5 gap-4 p-4">
        {users.map(({ id, firstName, lastName }) => {
          return (
            <div key={id} className="border border-slate-300 p-2 relative">
              <Link href={"/users/" + id} className="absolute inset-0"></Link>
              <p>
                {firstName}
                {lastName}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
