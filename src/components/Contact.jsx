function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="box bg-slate-700 mx-4 my-2 rounded-md p-2">
        <p className="font-bold text-white text-center mb-2">Contact Me</p>
        <ul className="handels flex justify-around">
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://github.com/DaneshVerma">
              <img src="assets/github.svg" alt="github" />
            </a>
          </li>
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://www.linkedin.com/in/daneshverma/">
              <img src="assets/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className="bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://www.instagram.com/thedanesh7/">
              <img src="assets/instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Contact;
