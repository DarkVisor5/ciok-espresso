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
    <header
      className={`bg-[#411900] text-white py-4 px-10 flex flex-wrap md:flex-nowrap justify-between items-center sticky top-0 z-50 shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <a href="/" className="flex-shrink-0">
        <img src="./Logo.jpg" alt="Logo" className="h-16" />
      </a>

      <nav className="flex-1 overflow-hidden">
        <ul className="flex justify-center space-x-4 md:space-x-8 text-lg font-medium">
          <li><a href="#chi-siamo" className="hover:text-yellow-200 transition whitespace-nowrap">La nostra storia</a></li>
          <li><a href="#prodotti" className="hover:text-yellow-300 transition whitespace-nowrap">I nostri prodotti</a></li>
          <li><a href="#lavora-con-noi" className="hover:text-yellow-300 transition whitespace-nowrap">Lavora con noi</a></li>
          <li><a href="#contatti" className="hover:text-yellow-300 transition whitespace-nowrap">Contatti</a></li>
        </ul>
      </nav>

      <a
        href="#contatti"
        class="bg-[#411900] text-[#FAF3E0] rounded-lg transition hover:bg-[#5a2a0e]"
      >
        Ordina Ora
      </a>
    </header>
  );
}
