import Actions from "./Actions";
import Comments from "./Comments";
import Date from "./Date";
import Description from "./Description";
import Images from "./Images";
import Likes from "./Likes";
import NewComment from "./NewComment";
import User from "./User";

export default function Post({ post }) {
  return (
    <article className="bg-white w-full border rounded-md">
      <User
        data={{
          username: post.user.username,
          verified: post.user.verified,
          image: post.user.image,
          location: post.location,
        }}
      />
      <Images data={post.images} />
      <Actions />
      <Likes data={post.likes} />
      <Description
        data={{ description: post.description, username: post.user.username }}
      />
      <Comments data={post.comments} />
      <Date data={post.createdAt} />
      <NewComment />
    </article>
  );
}
