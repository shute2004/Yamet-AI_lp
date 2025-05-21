
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  value: string;
}

const faqs: FAQItem[] = [
  {
    value: "item-1",
    question: "退職代行サービスを使っていることが会社や上司にバレる心配はありませんか？",
    answer: "ご安心ください。弊社はお客様のプライバシーを最優先に考え、個人情報保護を徹底しております。お客様の情報が会社や第三者に漏れることは一切ございません。AIによる連絡も、お客様ご本人からの意思伝達として行われます。",
  },
  {
    value: "item-2",
    question: "会社が退職を拒否した場合はどうなりますか？",
    answer: "日本の法律では、労働者には退職の自由が保障されています。通常、退職の意思を伝えてから2週間で退職が成立します。また、会社が「退職の自由」に違反した場合は罰則が課せられます。ご安心ください。",
  },
  {
    value: "item-3",
    question: "Yamet AIは弁護士法に抵触しませんか？",
    answer: "Yamet AIは、退職の意思を伝える「使者」としての役割をAIが担うサービスであり、退職代行サービスというよりも「電話」や「メール」に近い性質を持ちます。そのため、弁護士法に抵触するリスクはありません。安心してご利用いただけます。",
  },
  {
    value: "item-4",
    question: "利用料金は、職種や役職、雇用形態によって変わりますか？",
    answer: "いいえ、Yamet AIのご利用料金は、職種・役職・雇用形態にかかわらず一律です。ベータ期間中は全ての機能を完全無料でご利用いただけます。正式版リリース後に有料プランへ移行する際には、改めてお客様にご確認のうえお手続きいただきますので、自動的に課金されることはございません。ご安心ください。",
  },
  {
    value: "item-5",
    question: "退職が完了したら、すぐに解約できますか？",
    answer: "はい、退職手続きが完了したらいつでも解約いただけます。必要な期間だけ、無駄なくご利用ください。",
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-muted"> {/* Changed to bg-muted */}
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24"> 
        <div className="mb-16 text-center"> 
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            よくあるご質問
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4"> 
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value} className="bg-card rounded-lg shadow-sm border border-border"> {/* Card bg should be distinct */}
              <AccordionTrigger className="text-left text-lg hover:no-underline px-6 py-5"> 
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base px-6 pb-5 pt-1 leading-relaxed"> 
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

