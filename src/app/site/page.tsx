import Image from 'next/image';

import { pricingCards } from '@/lib/constants';
import { PricingCard } from './_components/pricing-card';

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen w-full flex items-center justify-center flex-col">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <div className="relative flex flex-col items-center justify-center pt-24 md:pt-44 px-4">
          <div className="relative group">
            <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-primary to-secondary-foreground blur-md opacity-70" />
            <div className="relative inline-flex items-center gap-2 bg-background rounded-full px-6 py-3 border border-white/10">
              <span className="text-sm md:text-base font-medium">
                Transform Your Agency's Digital Workflow
              </span>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text">
            <h1 className="text-9xl font-bold text-center md:text-[300px]">
              Makr
            </h1>
          </div>

          <div className="relative w-full mt-8 md:mt-[-50px]">
            <Image
              src="/assets/preview.png"
              alt="Banner Image"
              width={1200}
              height={1200}
              className="rounded-2xl border border-white/10 transition-all duration-300 hover:border-primary/50"
            />
            <div className="absolute bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 z-10 hidden md:block" />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-8 py-20 px-4">
        <div className="max-w-2xl text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text">
            Choose Your Growth Path
          </h2>
          <p className="text-muted-foreground">
            Start your journey with our flexible pricing options. Whether you're
            just starting out or scaling up, we have the perfect plan for your
            agency's needs.
          </p>
        </div>

        <div className="flex justify-center flex-col lg:flex-row gap-8 mt-8">
          {pricingCards.map((card) => (
            <PricingCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </>
  );
}
