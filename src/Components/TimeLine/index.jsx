import Stories from "../Stories";
import UserSuggests from "../UserSuggests";
import UserTile from "../UserTile";

export default function TimeLine() {
  return (
    <div className="my-0 mx-auto max-w-4xl flex flex-row gap-8 pt-6 justify-center">
      <div className="w-full max-w-md">
        <Stories />
      </div>
      <div className="w-full max-w-sm">
        <UserTile />
        <UserSuggests />
      </div>
    </div>
  );
}
