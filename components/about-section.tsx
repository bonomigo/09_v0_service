export function AboutSection() {
  const stats = [
    { number: "50K+", label: "고객" },
    { number: "200+", label: "제품" },
    { number: "15+", label: "파트너 브랜드" },
    { number: "98%", label: "고객 만족도" },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              패션을 통해
              <br />
              삶의 가치를 높이다
            </h2>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                MAISON은 2018년, 일상 속에서 특별함을 찾는 모든 분들을 위해 시작되었습니다. 
                우리는 단순히 옷을 판매하는 것이 아닌, 고객 한 분 한 분의 라이프스타일에 
                어울리는 스타일을 제안합니다.
              </p>
              <p>
                품질과 디자인, 그리고 지속가능성까지 고려한 제품들로 
                당신의 일상에 가치를 더합니다. 트렌드를 쫓기보다 
                시간이 지나도 변하지 않는 아름다움을 추구합니다.
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border p-8 text-center hover:border-foreground/20 transition-colors"
              >
                <p className="font-serif text-4xl lg:text-5xl font-semibold text-foreground">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
