export default function UserProfile({ params }: any) {
  return (
    <div className="flex justify-center mt-5">
      <h1 className="text-xl">
        Profile params id:{" "}
        <span className="bg-slate-500 px-4">{params.id}</span>
      </h1>
    </div>
  );
}
