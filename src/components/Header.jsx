function Header(){
    return(
        <div className="header bg-white sm:h-16 h-12 w-full pt-2">
        <nav className="w-fit  bg-slate-700 rounded-md text-center p-1 sm:p-2 mx-auto border-slate-500 border-2 sm:text-xl text-white ">
          <ul className="flex mx-[2px] text-white gap-2">
            <li className="hover:text-black hover:font-bold hover:bg-white hover:rounded-sm px-[2px]"><a href="#about">About</a></li>
            <li className="hover:text-black hover:font-bold hover:bg-white hover:rounded-sm px-[2px]"><a href="#projects">Projects</a></li>
            <li className="hover:text-black hover:font-bold hover:bg-white hover:rounded-sm px-[2px]"><a href="#resume">Resume</a></li>
            <li className="hover:text-black hover:font-bold hover:bg-white hover:rounded-sm px-[2px]"><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    )
}

export default Header;