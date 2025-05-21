
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleCTAClick = () => {
    console.log('Tracking: Hero Section CTA Clicked');
    // Tally popup will be triggered by data attributes on the button
  };

  return (
    <section id="hero" className="bg-background pt-24 pb-16 md:pt-40 md:pb-24 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="space-y-8 md:space-y-10 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-tight">
              Yamet AI: 世界初の
              <span className="block mt-1 md:mt-2"> 
                退職代行 AIエージェント
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-normal mt-1 block">
              Yamet AI → YametAI → Yametai → やめたい
            </p>
            <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto">
              「辞めたい」その一言が言い出せないあなたへ。
              Yamet AIが、退職の不安を解消し、新しい未来への扉を開きます。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCTAClick}
                className="bg-gray-800 text-white hover:bg-gray-700 shadow-lg rounded-full px-10 py-6 text-lg" 
                data-tally-open="w85kR5"
                data-tally-layout="modal"
                data-tally-width="1000"
                data-tally-height="500"
                data-tally-hide-title="1"
              >
                今すぐ事前登録をする
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

