import { FeedProvider } from "../../Contexts/Feed";
import { StorieProvider } from "../../Contexts/Storie";
import { SuggestUsersProvider } from "../../Contexts/SuggestUsers";
import Feed from "../Feed";
import Footer from "../Footer";
import Stories from "../Stories";
import UserSuggests from "../UserSuggests";
import UserTile from "../UserTile";

export default function TimeLine() {
  return (
    <div className="my-0 mx-auto max-w-4xl flex flex-row gap-8 py-6 justify-center">
      <div className="w-full max-w-lg  px-2 lg:px-0">
        <StorieProvider>
          <Stories />
        </StorieProvider>
        <FeedProvider>
          <Feed />
        </FeedProvider>
      </div>
      <aside className="w-full max-w-sm hidden lg:block">
        <UserTile />
        <SuggestUsersProvider>
          <UserSuggests />
        </SuggestUsersProvider>
        <Footer />
      </aside>
    </div>
  );
}
