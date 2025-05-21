
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const handleCTAClick = () => {
    console.log('Tracking: Final CTA Section Button Clicked');
    // Tally popup will be triggered by data attributes
  };

  return (
    <section id="final-cta" className="bg-background border-t border-border"> {/* Changed to bg-background */}
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          準備はできましたか？
        </h2>
        <p className="mt-4 mb-8 max-w-xl mx-auto text-lg text-muted-foreground">
          Yamet AIで、退職の悩みをスムーズに解決し、新しいキャリアへの一歩を踏み出しましょう。
        </p>
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
         <p className="mt-6 text-xs text-muted-foreground text-center max-w-xl mx-auto">
          ご入力いただいた個人情報は、本サービスおよび本サービスに関するご連絡の目的にのみ利用いたします。また、事前登録していただいた時点でこれに同意したものとさせていただきます。
        </p>
      </div>
    </section>
  );
}

