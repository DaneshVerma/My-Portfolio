function Tile(props) {
  return (
    <div className="tile lg:min-w-44 lg:h-24 text-sm m-1 h-14 min-w-32 flex gap-1 justify-center items-center px-1 hover:bg-slate-200 bg-slate-300 rounded-sm">
      <span>
        <img className="h-10" src={props.logo} alt="" />
      </span>
      <p className="font-semibold">{props.name}</p>
    </div>
  );
}

export default Tile;
