function Header(){
    return(
        <div className="header bg-white h-10 w-full pt-2">
        <nav className="w-4/5 bg-slate-700 rounded-md text-center p- mx-auto border-slate-500 border-2 text-white ">
          <ul className="flex mx-[2px] text-white gap-2">
            <li className="hover:text-black hover:bg-white hover:rounded-md px-[2px]">About</li>
            <li className="hover:text-black hover:bg-white hover:rounded-md px-[2px]">Projects</li>
            <li className="hover:text-black hover:bg-white hover:rounded-md px-[2px]">Resume</li>
            <li className="hover:text-black hover:bg-white hover:rounded-md px-[2px]">Contact</li>
          </ul>
        </nav>
      </div>
    )
}

export default Header;