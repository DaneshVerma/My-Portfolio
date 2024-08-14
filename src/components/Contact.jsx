function Contact() {
  return (
    <div className="contact">
      <div className="box bg-slate-700 mx-4 my-2 rounded-md p-2">
        <p className="font-bold text-white text-center mb-2">Contact Me</p>
        <ul className="handels flex justify-around">
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a href="">
              <img src="../src/assets/github.svg" alt="github" />
            </a>
          </li>
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a href="">
              <img src="../src/assets/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a href="">
              <img src="../src/assets/instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
