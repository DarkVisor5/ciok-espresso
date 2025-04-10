import { useEffect, useState } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(prevScroll > currentScroll || currentScroll < 10);
      setPrevScroll(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll]);

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 shadow-md ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar header-fade text-white px-4">
        {/* Start: Logo + Mobile dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow header-fade rounded-box w-52">
              <li><a href="#chi-siamo"  className="link-nav">La nostra storia</a></li>
              <li><a href="#prodotti" className="link-nav">I nostri prodotti</a></li>
              <li><a href="#lavora-con-noi" className="link-nav">Lavora con noi</a></li>
              <li><a href="#contatti" className="link-nav">Contatti</a></li>
              <li>
              <a href="/ordina" className="btn-overlay-dark w-full text-center mt-2">
                Ordina Ora
              </a>

              </li>
            </ul>
          </div>
          <a href="/" className="flex items-center">
            <img
              src="./Logo.jpg"
              alt="Logo"
              className="h-16 max-h-20 w-auto max-w-[160px]"
            />
          </a>
        </div>

        {/* Center: Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-sm">
            <li><a href="#chi-siamo" className="hover:text-yellow-200">La nostra storia</a></li>
            <li><a href="#prodotti" className="hover:text-yellow-300">I nostri prodotti</a></li>
            <li><a href="#lavora-con-noi" className="hover:text-yellow-300">Lavora con noi</a></li>
            <li><a href="#contatti" className="hover:text-yellow-300">Contatti</a></li>
          </ul>
        </div>

        {/* End: CTA button */}
        <div className="navbar-end hidden lg:flex items-center">
          <a href="/ordina" className="btn-overlay-dark px-4 py-2 text-sm">
            Ordina Ora
          </a>
        </div>

      </div>
    </header>
  );
}

