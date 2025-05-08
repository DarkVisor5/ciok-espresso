import { useEffect, useState } from 'react';

const navItems = [
  { href: "#chi-siamo", label: "La nostra storia" },
  { href: "#prodotti", label: "I nostri prodotti" },
  { href: "#lavora-con-noi", label: "Lavora con noi" },
];

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
  
    // Scroll offset fix
    const links = document.querySelectorAll('a[href^="#"]');
    const OFFSET = 80;
    const smoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    links.forEach(link => link.addEventListener('click', smoothScroll));
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      links.forEach(link => link.removeEventListener('click', smoothScroll));
    };
  }, [prevScroll]);
  

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 shadow-md ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar header-fade text-white px-4 py-2">

        {/* Start: Logo + Mobile dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow header-fade bg-cacao rounded-box w-52">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="link-nav">{label}</a>
                </li>
              ))}
              <li>
                <a href="/ordina" className="btn-overlay-dark w-full text-center mt-2">Ordina Ora</a>
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

        {/* Desktop: Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4 text-sm">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="link-nav hover:text-yellow-300">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="navbar-end hidden lg:flex items-center">
          <a href="/ordina" className="btn-choco px-4 py-2 text-sm text-cacao shadow-choco">
            Ordina Ora
          </a>
        </div>

      </div>
    </header>
  );
}

