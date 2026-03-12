import { Instagram, Linkedin, Github } from "lucide-react";

export default function Contato() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-10 text-center sm:items-start sm:text-left">
          
          <h1 className="text-4xl md:text-6x2 font-bold tracking-tight text-black dark:text-zinc-50">
            Caso queira me contatar 📞
          </h1>

          <p className="text-2xl text-zinc-600 dark:text-zinc-400">
            Segue abaixo algumas formas de contato e redes sociais
          </p>

          <div className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800 w-full sm:w-auto">
            <p className="text-xl md:text-2xl mb-4 text-zinc-300">
              <span className="font-semibold text-white">Telefone:</span> +55 11 97330-1717
            </p>
            <p className="text-xl md:text-2xl text-zinc-300">
              <span className="font-semibold text-white">Email:</span> pivisoto10@gmail.com
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-4"> 
            <p className="text-2xl font-medium text-zinc-600 dark:text-zinc-400">
              Redes sociais:
            </p>
            
            <div className="flex gap-8">
              <a 
                href="https://www.instagram.com/pivisoto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-pink-500 transition-all hover:scale-110"
              >
                <Instagram size={60} />
              </a>
              <a 
                href="https://www.linkedin.com/in/pietro-vival-soto-0056a3262/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-blue-600 transition-all hover:scale-110"
              >
                <Linkedin size={60} />
              </a>
              <a 
                href="https://github.com/pivisoto?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-black dark:hover:text-white transition-all hover:scale-110"
              >
                <Github size={60} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}