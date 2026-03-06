"use client";
import { useParams } from "next/navigation";
import React from "react";

const UserDetail = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="text-center p-4 text-3xl font-medium">user by id {id}</div>
  );
};

export default UserDetail;
