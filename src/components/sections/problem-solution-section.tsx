
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, MessageSquarePlus } from "lucide-react"; // Updated icons

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
  problem: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap, // Represents AI speed and efficiency
    title: "AIが代行伝達",
    description: "AIが冷静かつ的確に退職の意思を代行伝達。感情的な交渉や気まずさとは無縁です。AIがあなたの状況に合わせた最適な伝え方をサポートします。",
    problem: "電話や対面が怖い…"
  },
  {
    icon: MessageSquarePlus, // Represents clear, effective communication aid
    title: "面倒な交渉ゼロ",
    description: "AIが事務的な手続きのポイントを整理し、ナビゲート。あなたは複雑なやり取りに悩む必要はありません。",
    problem: "言い負かされそうで不安…"
  },
  {
    icon: ShieldCheck, // Represents safety, reliability, and a secure process
    title: "安心のプロセス",
    description: "Yamet AIはあなたの意思を伝える「使者」です。退職の自由は法律で保障されており、AIが関連情報を提供し安心してご利用いただけます。",
    problem: "手続きが分からない…"
  },
];

export function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="bg-muted">
      <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
        <div className="mb-16 text-center">

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
            こんなお悩みありませんか？
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Yamet AIがあなたの退職に関する不安を、AIの力で具体的に解消します。
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 lg:gap-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="flex flex-col bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <CardHeader className="items-center text-center pt-8 pb-4">
                <div className="mb-5 rounded-full bg-primary/10 p-3 text-primary inline-block"> {/* Icon styled with primary color */}
                  <benefit.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <p className="text-base font-semibold text-muted-foreground">{benefit.problem}</p>

                <CardTitle className="mt-2 text-2xl text-balance">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center px-6 pb-8">
                <p className="text-muted-foreground leading-relaxed text-balance">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
