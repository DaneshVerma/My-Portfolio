function Tile(props) {
  console.log(props);
  
  return (
    <div className="tile text-sm m-2 h-14 w-32 flex gap-2 justify-center items-center px-1 bg-slate-300 rounded-sm">
      <span>
        <img className="h-10" src={props.logo} alt="" />
      </span>
      <p className="font-semibold">{props.name}</p>
    </div>
  );
}

export default Tile;
