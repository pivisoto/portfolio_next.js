'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FuturaNoiva() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false);
  const [senha, setSenha] = useState("");
  const [acessoLiberado, setAcessoLiberado] = useState(false);

  const verificarSenha = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha.toLowerCase().trim() === "vede") {
      setAcessoLiberado(true);
    } else {
      alert("Senha incorreta! Dica: Foi onde nos beijamos pela primeira vez.");
    }
  };

  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <AnimatePresence mode="wait">
        {!acessoLiberado ? (
          <motion.div
            key="bloqueio"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="m-auto flex flex-col items-center gap-6 p-8 md:p-10 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 w-[90%] max-w-md"
          >
            <div className="text-4xl">🔐</div>
            <h2 className="text-2xl font-bold text-black dark:text-white">Área Restrita</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-center text-sm md:text-base">
              Digite o nome do lugar do nosso primeiro encontro para entrar (sem acento)
            </p>
            <form onSubmit={verificarSenha} className="flex flex-col gap-4 w-full">
              <input
                type="text"
                placeholder="Qual o lugar?..."
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 w-full"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all active:scale-95 w-full"
              >
                Desbloquear ❤️
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.main
            key="conteudo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center py-20 px-6 sm:px-16 bg-white dark:bg-black sm:items-start w-full"
          >
            <div className="w-full max-w-4xl flex flex-col gap-12 text-left">
              
              <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-black dark:text-zinc-50">
                Futura Noiva - Gabriela Sousa ❤️
              </h1>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
                  Primeiro encontro 🥂
                </h2>
                <p className="max-w-2xl text-lg md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                  No nosso primeiro encontro, antes mesmo de encontrá-la, eu já estava muito nervoso. Era estranho, pois não tinha o costume de ficar assim nessas situações, era como se meu corpo já soubesse que ela era a mulher da minha vida. Primeiro, tentamos ir ao Bar Central, porém estava muito lotado e logo perdi 40 reais para o velho do estacionamento KKKKKKKKK. Em seguida, fomos para o Vede, onde deixamos o carro na minha casa e fomos a pé até o bar. Lá, conversamos por horas e o tempo passou voando. Enquanto falávamos, eu tentava encontrar o momento certo para beijá-la. Como ela havia mencionado que não gostava de beijar em público, esperei o lugar esvaziar e, quando estava quase fechando, finalmente a beijei. Depois, ficamos mais um tempo conversando do lado de fora e fomos para a minha garagem, onde apresentei o Bob a ela. Após deixar o Bob em casa, nos beijamos mais um pouco dentro do carro antes de eu levá-la embora. Depois de deixá-la em casa, eu não fazia ideia de que amaria tanto essa pessoa em um futuro tão próximo.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
                  Qualidades
                </h2>
                <ul className="max-w-2xl text-lg md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Linda</li>
                  <li>Gentil</li>
                  <li>Cozinheira profissional</li>
                  <li>Carinhosa</li>
                  <li>Esforçada</li>
                  <li>Professora de Português</li>
                  <li>Inteligente</li>
                  <li>Gosto musical</li>
                  <li>Prestativa</li>
                  <li>Cheirosa</li>
                  <li>Irresistível</li>
                  <li>Interessante</li>
                </ul>
              </div>

              <button
                onClick={() => setMostrarMensagem(!mostrarMensagem)}
                className="w-full sm:w-fit px-8 py-4 bg-red-500 text-white rounded-full font-bold hover:bg-red-600 transition-all shadow-lg active:scale-95"
              >
                {mostrarMensagem ? "Esconder segredo 🔒" : "Clique aqui ❤️"}
              </button>

              <AnimatePresence>
                {mostrarMensagem && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center mt-10 text-4xl md:text-6xl font-bold text-red-600 dark:text-red-400 text-center"
                  >
                    Eu te amo!
                    <svg
                      viewBox="0 0 24 24"
                      className="w-32 h-32 md:w-48 md:h-48 mt-6 text-red-500 fill-none stroke-current"
                      strokeWidth="0.5"
                    >
                      <motion.path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        initial={{ pathLength: 0, fill: "rgba(239, 68, 68, 0)" }}
                        animate={{ pathLength: 1, fill: "rgba(239, 68, 68, 1)" }}
                        transition={{
                          pathLength: { duration: 2, ease: "easeInOut" },
                          fill: { duration: 1, delay: 1.5, ease: "easeIn" }
                        }}
                      />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}