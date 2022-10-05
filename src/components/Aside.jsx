export default function Aside({ showSidebar, openSidebar }) {
  return (
    <>
      {showSidebar && (
        <aside className="bg-brown text-white w-80 absolute z-10 h-full">
          <div className="bg-gray flex flex-col space-y-4 p-6 font-bold">
            <button className="w-fit text-2xl py-4" onClick={openSidebar}>
              X
            </button>
            <a href="#">Log-in</a>
            <a href="#">Get quotes</a>
            <a href="#">Tradesperson sign up</a>
          </div>
          <div className="flex flex-col space-y-4 p-6 font-bold">
            <a href="#" className="inline-flex justify-between">
              <span>Find a trade</span> <span>{">"}</span>
            </a>
            <a href="#">Ask</a>
            <a href="#">Trends report</a>
            <a href="#">Cost guides</a>
            <a href="#">Homeowner advice center</a>
            <a href="#">Inspiration center</a>
            <a href="#">Trade advice center</a>
          </div>
        </aside>
      )}
    </>
  );
}
