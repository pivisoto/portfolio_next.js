import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black">
        <Image
          className = "rounded-full"
          src="/my_photo.jpg"
          alt="Next.js logo"
          width={270}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl md:text-6x2 font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Olá meu nome é Pietro Vival Soto.
          </h1>
          <p className="text-3xl md:text-4xl leading-8 text-zinc-600 dark:text-zinc-400">
            Estou aprendendo mais sobre next.js e este é o meu portfolio criado com ele.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
        </div>
      </main>
    </div>
  );
}
