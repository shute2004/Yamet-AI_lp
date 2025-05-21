
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, MessageSquareText, PhoneCall, CheckCircle } from "lucide-react"; // Example icons

interface TechStep {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
}

const techSteps: TechStep[] = [
  {
    icon: MessageSquareText,
    title: "Step 1: 自然言語解析",
    description: "チャット形式で退職先や要望を入力。",
    details: "最新LLMで入力内容を即時解析し、手続きに必要な情報を自動抽出します。"
  },
  {
    icon: PhoneCall,
    title: "Step 2: 自動通話",
    description: "TTSとSTTのシームレスな連携で、自然な会話を実現。",
    details: "音声合成で丁寧に話しかけ、音声認識で相手の応答をリアルタイム処理します。"
  },
  {
    icon: Cpu, 
    title: "Step 3: 再ヒアリング",
    description: "AIエージェントが通話中の不足情報を即座に検知し、自動で再通話を実行。",
    details: "あらゆる会社側の質問にも対応し、退職手続きの漏れを防ぎます。"
  },
  {
    icon: CheckCircle,
    title: "Step 4: 退職完了",
    description: "通話終了後、AIエージェントがチャット画面で退職完了を即時報告。",
    details: "あなたは状況をリアルタイムで確認でき、安心して次のステップに進めます。"
  },
];

export function TechnologyFlowSection() {
  return (
    <section id="technology-flow" className="bg-muted"> {/* Changed to bg-muted */}
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            AIエージェントの技術フロー
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Yamet AIは最新のAI技術を駆使し、あなたの退職をスマートにサポートします。
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {techSteps.map((step) => (
            <Card key={step.title} className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center pt-8 pb-4">
                <div className="mb-5 rounded-full bg-primary/10 p-3 text-primary inline-block">
                  <step.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center px-6 pb-8">
                <p className="font-medium text-foreground mb-2">{step.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

