import logo from "../assets/logo.svg";

export default function Navbar({ openSidebar }) {
  return (
    <nav className="bg-brown text-white py-5 sm:px-0 px-4">
      <div className="container m-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button
            className="text-2xl mr-4 lg:hidden block"
            onClick={openSidebar}
          >
            ☰
          </button>
          <a href="#" className="mr-3">
            <img src={logo} alt="Logo" />
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white lg:inline-block hidden"
          >
            Find a trade
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white hover:border-b border-b-neon lg:inline-block hidden"
          >
            Ask
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white hover:border-b border-b-neon lg:inline-block hidden"
          >
            Trends report
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white lg:inline-block hidden"
          >
            Advise
          </a>
        </div>
        <div className="md:flex hidden items-center">
          <a href="#" className="font-bold text-xs p-2 border-r border-r-neon">
            GET QUOTES
          </a>
          <a href="#" className="font-bold text-xs p-2 border-l border-l-neon">
            LOG IN
          </a>
          <a
            href="#"
            className="font-bold text-xs ml-2 p-2 bg-neon rounded-lg hover:bg-[#72a50d]"
          >
            TRADESPERSON SIGN UP
          </a>
        </div>
      </div>
    </nav>
  );
}
