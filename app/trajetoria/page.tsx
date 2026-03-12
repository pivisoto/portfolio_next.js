'use client';

export default function Trajetoria() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 flex flex-col items-center py-20 px-6 sm:px-16 bg-white dark:bg-black sm:items-start w-full">
        <div className="w-full max-w-4xl flex flex-col gap-12 text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-zinc-50 mb-4">
            Um pouco da minha história 📖
          </h1>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              Graduação 🎓
            </h2>
            <p className="max-w-2xl text-lg md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Em dezembro de 2025, concluí meu bacharelado em <span className="text-black dark:text-white font-medium">Ciência da Computação</span> pelo <span className="text-black dark:text-white font-medium">Instituto Mauá de Tecnologia</span>. Durante esses quatro anos, dediquei-me a dominar as bases da computação e a desenvolver projetos complexos.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-zinc-50 flex items-center gap-3">
              Experiência Profissional 💼
            </h2>
            <p className="max-w-2xl text-lg md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Entre 2024 e 2026, fiz parte da equipe de Risco da Kinea Investimentos. Como estagiário, foquei em transformar processos manuais em fluxos automatizados, utilizando principalmente o Databricks. Essa experiência me permitiu consolidar conhecimentos técnicos em Python e SQL, além de dominar ferramentas de nuvem como Azure e visualização de dados com Power BI.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}