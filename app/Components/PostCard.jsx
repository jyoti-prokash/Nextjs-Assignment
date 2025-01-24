import {
  LoginLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";

const PostCard = async ({ id, title, body }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="card card-compact bg-base-100  shadow-xl hover:scale-52">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          {user ? (
            <Link href={`DetailsPost/${id}`} className="btn btn-primary">
              Details
            </Link>
          ) : (
            <LoginLink className="btn btn-primary">Details</LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
