import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async() => {
   const {getUser} = getKindeServerSession();
   const user = await getUser();
   console.log(user);
  return (
    <div className="bg-gray-400">
      <div className="container mx-auto flex items-center justify-between px-2 py-3">
        <div>
          <h2>Blog|Post</h2>
        </div>
        <div>
          <ul className="flex gap-5">
            <Link href="/">Home</Link>
            <Link href="/Profile">Profile</Link>
          </ul>
        </div>
        <div>
          {user ? (
            <Link href="/api/auth/logout" className="btn btn-primary ml-5">
              Logout
            </Link>
          ) : (
            <Link href="/api/auth/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
