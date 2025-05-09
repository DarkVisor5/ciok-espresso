import { useState, useEffect } from "react";
import "../styles/global.css";

/** @param {{ products: Array<{ title: string, description: string, image: string, alt: string, tags: string[], category: string }> }} props */

export default function ProductShowcase({ products }) {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const singoloProducts = products.filter(p => p.category === "singolo").slice(0, 3);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveCategory(null);
      setIsClosing(false);
    }, 300); // deve combaciare con la durata dell’animazione
  };
  

  return (
    <>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
          {singoloProducts.map((product, index) => (
            <div
              key={index}
              className="product-card group p-8 rounded-3xl bg-[#fffaf3] shadow-[0_6px_20px_rgba(65,25,0,0.35)] hover:shadow-[0_10px_32px_rgba(65,25,0,0.45)] transition-transform duration-300 hover:scale-[1.03] border border-[#ebddd2]"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-36 h-36 object-contain mb-4 mx-auto group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  data-zoom-target
                />
              </div>
              <h3 className="text-[#411900] text-lg font-semibold">{product.title}</h3>
              

              <div className="mt-4">
                <button
                  onMouseEnter={(e) => {
                    const card = e.currentTarget.closest(".product-card");
                    const img = card?.querySelector("[data-zoom-target]");
                    img?.classList.add("drop-shadow-[0_8px_18px_rgba(65,25,0,0.45)]");
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget.closest(".product-card");
                    const img = card?.querySelector("[data-zoom-target]");
                    img?.classList.remove("drop-shadow-[0_8px_18px_rgba(65,25,0,0.45)]");
                  }}
                  onClick={() => {
                    console.log("Categoria selezionata:", product.title); 
                    if (product.title.includes("Praline")) setActiveCategory("astucci");
                    else if (product.title.includes("Tavolette")) setActiveCategory("tavolette");
                    else if (product.title.includes("Totem") || product.category === "singolo") setActiveCategory("singolo");
                    else setActiveCategory(null);
                  }}

                  className="btn-choco text-sm px-5 py-2 mt-4 mx-auto block text-center "
                >
                  SCOPRI DI PIÙ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {console.log("Modale attivo:", activeCategory)}

      {activeCategory && (
        <div 
          className={`modal modal-open ${isClosing ? 'fade-out' : 'fade-in'} inset-0 flex justify-center overflow-y-auto`}
          onLoad={() => window.scrollTo({ top: document.querySelector('.modal-box').offsetTop - 100, behavior: 'smooth' })}
        >
          <div className="modal-box max-w-2xl w-auto max-h-[90vh] overflow-y-auto p-6 my-8 relative bg-[#fffaf3] rounded-3xl border border-[#ebddd2] shadow-[0_6px_20px_rgba(65,25,0,0.35)]">
            <button 
              onClick={closeModal}
              className="btn btn-circle btn-sm absolute top-2 right-2 text-[#411900] bg-[#CBAF87] hover:bg-[#5a2a0e]"
            >
              ✕
            </button>
            {activeCategory === 'singolo' ? (
              <div className="flex flex-col gap-6 max-w-[70vw] mx-auto">
                {products.filter(p => p.category === "singolo").map((p, i) => (
                  <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="w-full md:w-[65%] flex justify-center">
                      <img 
                        src={p.image} 
                        alt={p.alt} 
                        className="w-[90%] md:w-full h-auto object-contain rounded-lg shadow-md"
                      />
                    </div>
                    <div className="w-full md:w-[35%] text-left mt-4 md:mt-0">
                      <h3 className="text-[#411900] text-xl md:text-2xl font-semibold mb-2">Informazioni sul prodotto</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify">{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>





            ) : (
              <>
                <h3 className="font-bold text-3xl text-[#411900] mb-6">Prodotti della categoria: {activeCategory}</h3>
                <div className="space-y-4">
                  {products
                    .filter(p => p.category === activeCategory)
                    .map((p, i) => (
                      <div key={i} className="flex items-center gap-6 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-200">
                        <div className="overflow-hidden w-40 h-40 rounded-lg relative group">
                          <img 
                            src={p.image} 
                            alt={p.alt} 
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="flex flex-col max-w-[65%]">
                          <h4 className="font-semibold text-[#411900] text-xl">{p.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{p.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            )}

          </div>
        </div>
      )}



    </>
  );
}
