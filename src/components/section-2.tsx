import Link from "next/link"
import Image from "next/image"

export function Section2() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex flex-col items-center justify-center text-center sm:max-w-xl">
          <div className="flex flex-col items-center">
            <span className="flex size-24 items-center justify-center" />
            <Link href="https://internetery.com">
              <Image src="/images/Brutalism-Shapes105.png" alt="SaaS Dashboard" height={500} width={750} priority className="mx-auto flex w-1/3 justify-center" />
            </Link>
            <h2 className="my-2 mb-6 font-bold">&apos;Interneterly&apos; Informed</h2>
            <span className="mb-12 w-3/4 text-[12px]">En Mass shall they becomed enlightened. For it is our hope that genius is as intoxicating as a drug.</span>
          </div>
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom, #000 10%, rgba(255, 255, 255, 0) 0%)",
              backgroundPosition: "left",
              backgroundSize: "3px 15px",
              backgroundRepeat: "repeat-y"
            }}
            className="my-3 h-36 w-[2px]"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="flex size-24 items-center justify-center" />
              <Link href="https://not.software">
                <Image src="/images/Brutalism-Shapes100.png" alt="SaaS Dashboard" width={750} height={500} priority className="mx-auto  mb-6 flex w-1/2 justify-center" />
              </Link>
              <h2 className="my-2 mb-6 font-bold">Must Be Magic </h2>
              <span className="mb-12 w-3/4 text-[12px]">&apos;Any sufficiently advanced technology is indistinguishable from magic&apos; — Arthur C. Clarke</span>
            </div>
          </div>
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom, #000 10%, rgba(255, 255, 255, 0) 0%)",
              backgroundPosition: "left",
              backgroundSize: "3px 15px",
              backgroundRepeat: "repeat-y"
            }}
            className="my-3 h-36 w-[2px]"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="flex size-24 items-center justify-center" />
              <Link href="https://tylers.wtf">
                <Image src="/images/2.png" alt="SaaS Dashboard" width={750} height={0} priority className="mx-auto  mb-6 flex w-1/2 justify-center opacity-80" />
              </Link>
              <h2 className="my-2 mb-6 font-bold">(not)&nbsp; Official</h2>
              <span className="text-[12px]">Secrets for the brilliantly brave and foolishly clever.</span>
            </div>
          </div>
          <span
            style={{
              backgroundImage: "linear-gradient(to bottom, #000 10%, rgba(255, 255, 255, 0) 0%)",
              backgroundPosition: "left",
              backgroundSize: "3px 15px",
              backgroundRepeat: "repeat-y"
            }}
            className="my-3 h-36 w-[2px]"
          />
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <span className="flex size-24 items-center justify-center" />
              <Link href="https://0ffc1al.com/">
                <Image src="/images/lumoncopy.png" alt="SaaS Dashboard" width={750} height={0} priority className="mx-auto  mb-6 flex w-1/2 justify-center opacity-80" />
              </Link>
              <h2 className="my-2 mb-6 font-bold">Macrodata Refinement</h2>
              <span className="text-[12px]">Bin em to win em. In (un)0ffc1al partnership with Lumon Industries.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
