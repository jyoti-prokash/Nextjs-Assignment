import PostCard from './PostCard';

const FeaturePost = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {data.slice(0, 8).map((post) => (
          <PostCard key={post.id} title={post.title} body={post.body}></PostCard>
        ))}
      </div>
    );
};

export default FeaturePost;