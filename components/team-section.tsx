const team = [
  {
    name: "김민수",
    role: "CEO & 공동 창립자",
    bio: "10년간의 패션 업계 경험을 바탕으로 MAISON을 이끌고 있습니다.",
    initial: "김",
  },
  {
    name: "이수진",
    role: "크리에이티브 디렉터",
    bio: "파리에서 패션 디자인을 전공하고 글로벌 브랜드에서 경력을 쌓았습니다.",
    initial: "이",
  },
  {
    name: "박준혁",
    role: "운영 총괄",
    bio: "효율적인 운영 시스템으로 고객에게 최상의 경험을 제공합니다.",
    initial: "박",
  },
  {
    name: "최예린",
    role: "마케팅 디렉터",
    bio: "브랜드 스토리텔링을 통해 MAISON의 가치를 전달합니다.",
    initial: "최",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
            Our Team
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight tracking-tight">
            함께 만들어가는 사람들
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            열정과 전문성을 갖춘 팀이 MAISON의 모든 순간을 만들어갑니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden bg-card border border-border aspect-[3/4] flex items-center justify-center group-hover:border-foreground/20 transition-colors">
                <span className="font-serif text-6xl text-muted-foreground/30 group-hover:text-accent/50 transition-colors">
                  {member.initial}
                </span>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-accent text-sm mt-1">{member.role}</p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
