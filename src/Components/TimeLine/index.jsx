import Stories from "../Stories";

export default function TimeLine() {
  return (
    <div className="my-0 mx-auto max-w-4xl flex flex-row gap-8 pt-6 justify-center">
      <div className="w-full max-w-md">
        <Stories />
      </div>
      <div className="bg-blue-600 w-full max-w-sm">teste2</div>
    </div>
  );
}
