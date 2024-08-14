function Card(Props){
    return (<div className="card  p-3 rounded-md bg-slate-700 text-white ">
        <p className="Title font-bold">{Props.name}</p>
        <div className="image my-2 border-slate-500 border-2 rounded-md">
        <img className="rounded-md" src="src\assets\bloghost.png" alt="" /></div>
        <hr />
        <p className="Description text-sm">{Props.des}</p>
    </div>
    )
}
export default Card