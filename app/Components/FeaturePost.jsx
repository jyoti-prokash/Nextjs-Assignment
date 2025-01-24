import AllData from '../PostData/AllData';
import PostCard from './PostCard';


const FeaturePost = async() => {
    const data = await AllData();
    return (
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        {data.slice(0, 8).map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} body={post.body}></PostCard>
        ))}
      </div>
    );
};

export default FeaturePost;