import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1 flex flex-col items-center justify-center py-20 px-6 sm:px-16 bg-white dark:bg-black sm:items-start w-full">
        <div className="w-full max-w-3xl flex flex-col items-center gap-12 sm:items-start">
          
          <Image
            className="rounded-full object-cover"
            src="/my_photo.jpg"
            alt="Foto de Pietro Vival Soto"
            width={270}
            height={270}
            priority
          />

          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50">
              Olá, meu nome é Pietro Vival Soto.
            </h1>
            <p className="text-xl md:text-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estou aprendendo mais sobre Next.js e este é o meu portfólio criado com ele.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          </div>
        </div>
      </main>
    </div>
  );
}