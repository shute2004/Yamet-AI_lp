
import { MessagesSquare, BrainCircuit, ThumbsUp } from "lucide-react"; // Updated icons

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: MessagesSquare, // Represents chat input
    title: "チャットで簡単入力",
    description: "いくつかの質問にチャットで答えるだけで、AIがあなたの状況に合わせた最適な退職意思の伝え方を準備します。手間なく、スムーズなスタートを切れます。",
  },
  {
    icon: BrainCircuit, // Represents AI processing and communication
    title: "AIが安全に連絡代行",
    description: "指定した日時に、AIがあなたに代わって会社へ連絡。退職の意思と必要な情報を、感情を排し、正確かつ丁寧に伝達します。直接のやり取りは不要です。",
  },
  {
    icon: ThumbsUp, // Represents successful result delivery / confirmation
    title: "進捗をチャットで把握",
    description: "会社からの返答や手続きの進捗は、AIが整理して逐次チャットでご報告。あなたは状況をリアルタイムで確認でき、安心して次のステップに進めます。",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            ご利用は簡単 3ステップ
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            AIサポートで、あっという間に退職手続きが完了します。
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12 items-start">
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-center text-center">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-1/2 transform -translate-y-1/2 ml-4">
                   <svg width="100%" height="2">
                    <line x1="0" y1="1" x2="100%" y2="1" strokeDasharray="5,5" stroke="hsl(var(--border))" strokeWidth="1.5"/>
                  </svg>
                </div>
              )}
              <div className="mb-5 p-3 text-primary rounded-full bg-primary/10"> {/* Icon styled with primary color */}
                <step.icon className="h-10 w-10" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                <span className="text-primary mr-2">{index + 1}.</span>{step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

