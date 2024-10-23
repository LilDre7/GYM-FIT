export default function Button(props) {
  const { text, func } = props;

  return (
    <button
      onClick={func}
      className="mb-6 px-8 font-medium mx-auto py-4 rounded-md border-[2px] bg-slate-950 border-blue-600 border-solid 
      blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
