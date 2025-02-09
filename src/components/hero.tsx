import Image from "next/image";

export function Hero() {
  return (
    <section className="container flex flex-col items-center pt-12">
      <div>
        <Image
          src="/images/dddssd.png"
          alt="SaaS Dashboard"
          width={500}
          height={500}
          priority
          fill={false}
          className="mx-auto  flex w-1/2 justify-center brightness-75"
        />
      </div>
      <div className="relative sm:mt-8">
        <Image
          src="/images/New-Asset.png"
          alt="SaaS Dashboard"
          width={750}
          height={0}
          priority
          className="mx-auto  flex w-4/5 mt-4 justify-center"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
      <h1 className="pt-8 text-center text-[12px] tracking-tighter">
        facts are the opinions of the indoctrinated
      </h1>
    </section>
  );
}
