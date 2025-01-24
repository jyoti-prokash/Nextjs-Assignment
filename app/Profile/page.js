import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const Profile = async () => {
  try {
    // Retrieve the server session and user details
    const session = await getKindeServerSession();
    const user = await session?.getUser();

    // Handle cases where user data might be undefined or incomplete
    if (!user) {
      throw new Error("User data not found");
    }

    return (
      <div className="m-10 border-2 border-blue-600 p-10">
        <h2 className="text-center font-bold text-2xl">
          Welcome to your profile, {user?.given_name || "Guest"} {user?.family_name || ""}
        </h2>
        <p className="text-center font-bold my-3">
          Email: {user?.email || "Not available"}
        </p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user details:", error.message);

    // Show a fallback UI in case of an error
    return (
      <div className="m-10 border-2 border-red-600 p-10">
        <h2 className="text-center font-bold text-2xl text-red-600">
          Failed to load profile information
        </h2>
        <p className="text-center font-bold my-3">
          Please try again later.
        </p>
      </div>
    );
  }
};

export default Profile;
