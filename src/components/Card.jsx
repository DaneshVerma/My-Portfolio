function Card(props) {
  return (
    <div className="card min-w-72 h-96 p-3 rounded-md my-1  bg-slate-700 text-white ">
      <div className="image my-2 border-slate-500 border-2 rounded-md">
        <img className="rounded-md" src={props.img} alt="" />
      </div>
      <p className="Title text-center font-bold">{props.name}</p>
      <hr className="mt-2" />
      <div className="description h-32 overflow-y-auto">
        <p className="Description text-sm">{props.des}</p>
      </div>
      <div className="text-center my-2 pt-2">
        <a href={props.link}><button className="bg-white text-black font-semibold p-1 border-none rounded-md">
          Visit Project
        </button></a>
      </div>
    </div>
  );
}
export default Card;
