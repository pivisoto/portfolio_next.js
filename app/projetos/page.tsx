export default function Projetos() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-12 text-center sm:items-start sm:text-left">
          
          <h1 className="text-4xl md:text-6x2 font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Portfólio de Projetos 📖
          </h1>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              SafeView 👁️
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Backend para detecção de EPIs via visão computacional, utilizando câmeras e IA. Desenvolvido com Python, FastAPI e Firebase.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              Aquasys 💧
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Sistema backend para análise de fluxos de entrada e saída de água, com geração de dashboards e métricas de vazão, pressão e volume. Desenvolvido com Python, FastAPI e Firebase.
            </p>
          </div>
         
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              PyCross 🧩
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Jogo de palavras cruzadas focado em conceitos de Python, desenvolvido em Java com Apache e Tomcat.
            </p>
          </div>

           <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              6DDrones 🚁
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Sistema backend para gestão de projetos entre empresas e clientes, desenvolvido com Python, Django e Firebase.
            </p>
          </div>

            <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              MoveHive 🐝
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Backend de rede social esportiva para conexão de usuários por nível de habilidade e interesses. Desenvolvido com Python, FastAPI e Firebase (em desenvolvimento).
            </p>
           </div>
          
           <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              Simulador de Volatilidade 📈
            </h2>
            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                Plataforma fullstack de simulação para gestão de risco da Kinea, utilizada na avaliação de volatilidade de fundos e carteiras. Desenvolvido com Python, Streamlit e Databricks.
            </p>
           </div>
        </div>
      </main>
    </div>
  );
}