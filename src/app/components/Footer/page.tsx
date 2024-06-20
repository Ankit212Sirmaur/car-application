const Footer = () => {
    return (
      <footer className=" bg-gray-800 text-white pt-8 pb-6">
  
        <div className="container mx-auto px-4">
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
                <a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Liftu.tech
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;