"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CTA12 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h3 className="mb-3 max-w-3xl text-xl font-semibold md:mb-4 lg:mb-6">
            were not going to beg
          </h3>
          <div className="mb-12 max-w-3xl text-sm text-muted-foreground">
            <span className="font-extrabold text-red-500/60"> /WARNING/</span> Not for the ungenius.
            But for the geniusly-inclined, know that we rarely initiate contact but will engage in
            relevant communication in rare circumstances (not lame).
          </div>
          <div className="w-full md:max-w-xl">
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Input className="text-sm" placeholder="your email, or someone's email" />
              <Button className="text-sm">(dont) not send</Button>
            </div>
            <div className="mt-2 pt-4 text-left text-xs text-muted-foreground">
              View our{" "}
              <a href="#" className="underline hover:text-foreground">
                privacy policy
              </a>
              <span className="inline-flex px-4"> and </span>
              <a href="#" className="underline hover:text-foreground">
                terms here
              </a>
              .
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 text-center text-sm opacity-30 font-mono">
          {" "}
          copyright not software© 0ffc1al© notOfficial_01© Internetery© notTyler.org© _2025_
          ...so dont even try...{" "}
        </div>
      </div>
    </section>
  );
};

export default CTA12;
