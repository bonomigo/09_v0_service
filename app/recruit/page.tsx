import Link from "next/link"

export default function RecruitPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/40">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-sm font-medium text-muted-foreground mb-3">채용</p>
          <h1 className="text-3xl lg:text-4xl font-serif font-semibold tracking-tight mb-4">
            패션 MD 채용
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl">
            MAISON과 함께 브랜드를 성장시킬 패션 MD를 찾습니다. 트렌드를 읽고,
            데이터를 분석하며, 고객의 라이프스타일을 이해하는 분을 기다립니다.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 lg:py-16 space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.5fr,1fr]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">주요 업무</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>시즌별 카테고리·상품 기획 및 운영 전략 수립</li>
              <li>매출/재고 데이터 분석을 통한 상품 운영 최적화</li>
              <li>국내외 브랜드 및 소싱 파트너 발굴·커뮤니케이션</li>
              <li>프로모션, 기획전 등 마케팅 부서와의 협업</li>
              <li>고객 리뷰와 시장 트렌드를 반영한 상품 개선 제안</li>
            </ul>
          </div>

          <div className="space-y-6 rounded-2xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold">자격 요건</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>패션/라이프스타일 브랜드 MD 경력 2년 이상</li>
              <li>데이터 기반 의사결정 및 엑셀 등 분석 툴 활용 가능자</li>
              <li>시장/트렌드에 대한 높은 관심과 인사이트 보유자</li>
              <li>내·외부 파트너와 원활한 커뮤니케이션 능력</li>
              <li>주도적으로 업무를 이끌어갈 수 있는 분</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">우대 사항</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>하이엔드/컨템포러리 패션 카테고리 경험</li>
              <li>해외 브랜드 바잉 경험 또는 영어 커뮤니케이션 가능자</li>
              <li>온라인 커머스 플랫폼 MD 경험</li>
              <li>패션/의류 관련 전공자</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">근무 조건</h2>
            <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>고용 형태: 정규직 (수습 3개월)</li>
              <li>근무 위치: 서울 ○○구 (하이브리드 근무)</li>
              <li>근무 시간: 주 5일, 10:00–19:00 (탄력 근무제)</li>
              <li>급여: 경력 및 역량에 따라 협의</li>
            </ul>
          </div>
        </div>

        <div className="border border-dashed border-border rounded-2xl p-6 lg:p-8 space-y-4 bg-muted/40">
          <h2 className="text-xl font-semibold">지원 방법</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            아래 지원 메일로 이력서와 포트폴리오(선택)를 보내주세요. 포트폴리오에는
            담당했던 카테고리, 매출 성과, 기획전 사례 등을 자유롭게 담아주시면
            됩니다.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm">
            <div>
              <p className="font-medium">지원 메일</p>
              <p className="text-muted-foreground">recruit@maison-fashion.com</p>
            </div>
            <Link
              href="mailto:recruit@maison-fashion.com?subject=%5BMAISON%5D%20패션%20MD%20지원"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
            >
              이메일로 지원하기
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex justify-between items-center text-xs text-muted-foreground">
          <span>※ 서류 전형 합격자에 한해 개별 연락드립니다.</span>
          <Link href="/" className="hover:text-foreground transition-colors">
            ← 메인 페이지로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  )
}

