// src/components/ChiSiamo.jsx
import { motion } from "framer-motion";
import { useState} from "react";

const ChiSiamo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.section
      id="chi-siamo"
      className="container mx-auto className=bg-[#FAF3E0] text-[#411900] py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold">Chi siamo</h2>

        <p className="mt-4">
          Ciok Espresso nasce come azienda produttiva di eccellenze dociarie legate alla lavorazione di confetti e cioccolata. Il nostro obbiettivo primario è quello di rispondere alla domanda di consumatori sempre più esigenti, guidati da una scelta consapevole e capaci di riconoscere la qualità oltre che la bontà. A questo scopo abbiamo messo a punto uno stabilimento produttivo altamente performante capace di offire un prodotto sicuro e di qualità garantita e certificata.
        </p>
        <motion.div
          initial={false}
          animate={isExpanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden mt-4 space-y-4"
        >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
              <img src="/Azienda1.JPG" alt="Ingresso stabilimento" className="rounded-xl shadow-choco" />
              <img src="/Azienda3.JPG" alt="Cancello e insegna" className="rounded-xl shadow-choco" />
            </div>
            <p>
              <strong>La nostra storia</strong><br />
              Ci sono delle specialità che naturalmente rievocano antiche sapienze e maestrie artigianali. La nascita di Ciok Espresso rapprensenta l'unione tra la tradizione e l'evoluzione della produzione dolciaria, legata all'arte del confetto e del cioccolato, in una cornice di eccezione, quale l'Abruzzo, fatta di colline,mare e montagne del Gran Sasso. Lo splendido scenario abruzzese aiuta l'immaginazione e la mente ad assaporare, ancor prima del palato, prelibatezze autentiche e di estrema bontà. L'obbiettivo di Ciok Espresso è quello di creare eccellenze dolciarie,per questo ha messo a punto uno stabilimento produttivo nuovo e moderno capace di interpretare le esigenze del mercato nazionle e internazionale sia in termini di quantità che di qualità.
            </p>
            <p>
              <strong>Scelte di qualità</strong><br />
              La selezione e qualifica di fornitori e materie prime è un must per Ciok Espresso che lavora per offrire il meglio al consumatore. Vogliamo che il nostro marchio di fabbrica sia la realizzazione di prodotti di Qualità con la ricerca continua di benessere,piacere e bontà. Cacao-Cioccolato-Gingeng-Caffè-Nocciola-Pistacchio, sono i nostri ingredienti principi, vengono accuratamente scelti, selezionati e trattati nel pieno rispetto delle loro proprietà organolettiche.
            </p>
            <p>
              <strong>I principi del "saper fare"</strong><br />
              Ciok Espresso diventa un autentico laboratorio di prodotti che, seppur legati alla tradizione, vengono concepiti in maniera innovativa e moderna sia nel gusto che nell'aspetto. Le certificazioni di qualità insieme a processi produttivi ben pensati ed eseguiti ci permettono di ottenere ed offrire ai nostri clienti prodotti alimentari in completa sicurezza,godendo di ogni singolo ingrediente accuratamente selezionato e senza glutine.
            </p>
        </motion.div>.
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="btn-choco mt-6"
        >
          {isExpanded ? "Leggi meno" : "Leggi di più"}
        </button>

      </div>
    </motion.section>
  );
};

export default ChiSiamo;