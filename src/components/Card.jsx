function Card(props){
    return (<div className="card w-72  p-3 rounded-md bg-slate-700 text-white ">
        <div className="image my-2 border-slate-500 border-2 rounded-md">
        <img className="rounded-md" src={props.img} alt="" /></div>
        <p className="Title text-center font-bold">{props.name}</p>
        <hr />
        <p className="Description text-sm">{props.des}</p>
        <div className="text-center m-1 pt-2">
        <button className="bg-white text-black font-bold p-1 border-none rounded-md">Visit Project</button>
        </div>
    </div>
    )
}
export default Card