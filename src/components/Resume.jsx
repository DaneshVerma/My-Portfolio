function Resume() {
  return (
    <div id="resume" className="resume rounded-md bg-slate-700 py-2 ">
      <div className=" rounded-md bg-white mx-4 ">
        <p className="text-center rounded-md font-bold h-10 p-2">
          My Resume
        </p>
      </div>
      <div className="resume mx-4 mt-2">
        <img className="rounded-md " src="src\assets\Resume\res.jpg" alt="" />
      <a href="src\assets\Resume\Resume Danesh.pdf" download={true} className="flex justify-center pt-2">
        <button className="bg-white rounded font-semibold p-1">Download</button>
      </a>
      </div>
    </div>
  );
}
export default Resume;
