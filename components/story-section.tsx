const timeline = [
  {
    year: "2018",
    title: "브랜드 설립",
    description: "서울 성수동의 작은 쇼룸에서 MAISON의 첫 걸음을 시작했습니다.",
  },
  {
    year: "2020",
    title: "온라인 스토어 오픈",
    description: "디지털 전환을 통해 전국의 고객들을 만나기 시작했습니다.",
  },
  {
    year: "2022",
    title: "지속가능성 선언",
    description: "친환경 소재 100% 전환을 목표로 지속가능 패션을 선도합니다.",
  },
  {
    year: "2024",
    title: "글로벌 진출",
    description: "아시아 주요 도시로 브랜드를 확장하며 글로벌 시장에 진출했습니다.",
  },
]

export function StorySection() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
              작은 쇼룸에서
              <br />
              시작된 이야기
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              MAISON은 패션을 사랑하는 두 명의 디자이너가 
              일상에서 특별함을 찾는 모든 사람들을 위해 시작한 브랜드입니다.
              우리는 트렌드를 쫓기보다 시간이 지나도 변하지 않는 
              클래식한 아름다움을 추구합니다.
            </p>
            <blockquote className="mt-8 pl-6 border-l-2 border-accent">
              <p className="font-serif text-xl italic text-foreground">
                {"\""}패션은 단순한 옷이 아닌, 자신을 표현하는 언어입니다.{"\""}
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — 김민수, MAISON 공동 창립자
              </footer>
            </blockquote>
          </div>

          {/* Right - Timeline */}
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-[3px] top-3 w-px h-full bg-border" />
                )}
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[7px] h-[7px] bg-foreground rounded-full" />
                
                <div className="bg-card border border-border p-6 hover:border-foreground/20 transition-colors">
                  <span className="text-accent text-sm font-medium">{item.year}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
