import Link from 'next/link';
import React from 'react';

const PostCard = ({id,title,body}) => {
    return (
      <div className="card card-compact bg-base-100  shadow-xl hover:scale-52">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <Link href={`DetailsPost/${id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    );
};

export default PostCard;