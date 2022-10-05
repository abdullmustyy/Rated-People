import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="bg-brown text-white py-5">
      <div className="container m-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <a href="#" className="mr-3">
            <img src={logo} alt="Logo" />
          </a>
          <a href="#" className="font-bold text-gray text-sm hover:text-white ">
            Find a trade
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white hover:border-b border-b-neon"
          >
            Ask
          </a>
          <a
            href="#"
            className="font-bold text-gray text-sm hover:text-white hover:border-b border-b-neon"
          >
            Trends report
          </a>
          <a href="#" className="font-bold text-gray text-sm hover:text-white ">
            Advise
          </a>
        </div>
        <div className="flex items-center">
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
