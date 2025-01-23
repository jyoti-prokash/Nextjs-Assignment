import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        <div>
          <h2>logo</h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/Profile">Profile</Link>
          </ul>
        </div>
        <div>
            <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
