import { FC } from "react";

const Header: FC = () => {
  const downloadCV = () => {
    // Replace 'your-cv.pdf' with the actual path to your CV file
    const cvUrl = '/RajshekharCV01.pdf';

    // Create an invisible anchor element and trigger a click event
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'RajshekharCV01.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-lg">
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="mx-2 logo">&#60;&#47;&#62;</span>
            <span className="text-slate-300 text-xl font-semibold">Rajshekhar.info</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-slate-200 hover:text-gray-400 px-4 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-200 hover:text-gray-400 px-4 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-slate-200 hover:text-gray-400 px-4 transition duration-300"
            >
              Contact
            </a>
            <button
              className="text-slate-200 hover:text-gray-400 px-4 transition duration-300"
              onClick={downloadCV} // Call the downloadCV function on button click
            >
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
