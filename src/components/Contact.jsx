function Contact() {
  let year = new Date
  return (
    <div id="contact" className="contact">
      <div className="box shadow-black shadow-md mx-4 my-2 rounded-md p-2">
        <p className="font-semibold animate-pulse text-center mb-2">See You</p>
        <hr />
        <ul className="handels flex w-40 mt-1 gap-1 justify-center mx-auto">
          <li className="cursor-pointer bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://github.com/DaneshVerma">
              <img src="assets/Icon/github.svg" alt="github" />
            </a>
          </li>
          <li className="cursor-pointer bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://www.linkedin.com/in/daneshverma/">
              <img src="assets/Icon/linkedin.svg" alt="linkedin" />
            </a>
          </li>
          <li className="cursor-pointer bg-white rounded-lg p-1 border-slate-500 border-2">
            <a target="_blank" href="https://www.instagram.com/thedanesh7/">
              <img src="assets/Icon/instagram.svg" alt="instagram" />
            </a>
          </li>
        </ul>
        <p className="text-center text-slate-500">&copy; Danesh {year.getFullYear()}</p>
      </div>
    </div>
  );
}
export default Contact;
