
import { Button } from "@/components/ui/button";

export function PricingTeaserSection() {
  const handleCTAClick = () => {
    console.log('Tracking: Mid-Page CTA Clicked');
    // Tally popup will be triggered by data attributes
  };
  return (
    <section id="pricing" className="bg-background"> {/* Changed to bg-background as per alternation */}
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl text-balance">
          今だけ！<span className="text-foreground">ベータ期間中は完全無料</span>
        </h2>
        <p className="mt-4 text-lg text-foreground max-w-xl mx-auto text-balance">
          正式版の料金については、リリース時に改めてお知らせいたします。
        </p>
        <p className="mt-6 mb-8 text-lg text-muted-foreground max-w-xl mx-auto text-balance">
          面倒な手続きから解放され、新しいスタートを切りましょう！
        </p>
        <Button
          size="lg"
          className="bg-gray-800 text-white hover:bg-gray-700 shadow-lg rounded-full px-10 py-6 text-lg"
          onClick={handleCTAClick}
          data-tally-open="w85kR5"
          data-tally-layout="modal"
          data-tally-width="1000"
          data-tally-height="500"
          data-tally-hide-title="1"
        >
          今すぐ事前登録をする
        </Button>
      </div>
    </section>
  );
}

