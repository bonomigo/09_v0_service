import { Sparkles, Leaf, Heart, Shield } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "품질 우선",
    description: "엄선된 소재와 세심한 디테일로 오래 입어도 변함없는 품질을 보장합니다.",
  },
  {
    icon: Leaf,
    title: "지속가능성",
    description: "환경을 생각하는 친환경 소재와 윤리적인 생산 과정을 통해 지구와 함께합니다.",
  },
  {
    icon: Heart,
    title: "고객 중심",
    description: "고객의 니즈를 최우선으로 생각하며, 맞춤형 스타일링 서비스를 제공합니다.",
  },
  {
    icon: Shield,
    title: "신뢰와 투명성",
    description: "정직한 가격 정책과 투명한 정보 공개로 고객과의 신뢰를 쌓아갑니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Our Values
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
            우리가 추구하는 가치
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            MAISON은 단순한 패션 브랜드가 아닙니다. 
            우리는 고객, 환경, 그리고 사회와 함께 성장하는 가치를 추구합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border p-8 hover:border-foreground/20 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground mb-6 group-hover:bg-accent transition-colors">
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
