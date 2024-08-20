function Card(props) {
  return (
    <div className="card shadow-black shadow-md sm:w-fit min-w-72  sm:h-fit md:h-auto min:h-[28rem] p-3 rounded-md my-1 h-[60vh]">
      <div className="image my-2 border-slate-500 border-2 rounded-md">
        <img className="rounded-md" src={props.img} alt="" />
      </div>
      <p className="Title text-center font-bold">{props.name}</p>
      <hr className="mt-2" />
      <div className="description sm:h-28 h-36 md:h-28  overflow-auto ">
        <p className="Description lg:text-xl text-sm">{props.des}</p>
      </div>
      <div className="text-center my-2 sm:my-2 pt-2">
        <a target="_blank" href={props.link}><button className="bg-white shadow-black shadow-sm  text-black font-semibold p-1  rounded-md">
          Visit Project
        </button></a>
      </div>
    </div>
  );
}
export default Card;
