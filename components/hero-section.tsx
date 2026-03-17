import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-32 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-primary-foreground/70 text-sm tracking-[0.3em] uppercase mb-6">
          Since 2018
        </p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-8xl font-semibold text-primary-foreground leading-tight tracking-tight text-balance">
          당신의 스타일을
          <br />
          완성하다
        </h1>
        <p className="mt-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty">
          MAISON은 시대를 초월한 우아함과 현대적인 감각을 조화롭게 담아
          <br className="hidden md:block" />
          당신만의 특별한 스타일을 완성합니다
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-base"
          >
            브랜드 스토리 보기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
          >
            컬렉션 둘러보기
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-primary-foreground/30 relative">
          <div className="absolute top-0 w-px h-8 bg-primary-foreground animate-pulse" />
        </div>
      </div>
    </section>
  )
}
