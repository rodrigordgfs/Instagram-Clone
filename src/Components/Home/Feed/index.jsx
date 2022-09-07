import { useContext } from "react";
import { FeedContext } from "../../../Contexts/Feed";
import Post from "../Post";

export default function Feed() {
  const { feed } = useContext(FeedContext);
  return (
    <div className="flex flex-col px-3 lg:px-0 gap-5 my-3 lg:mt-6">
      {feed.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
