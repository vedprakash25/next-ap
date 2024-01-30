export default function UserProfile({ params }: any) {
  return (
    <div>
      Profile
      <h1>
        {" "}
        Params ID <span className="bg-slate-500 px-4">{params.id}</span>
      </h1>
    </div>
  );
}
