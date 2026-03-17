"use client"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ContactSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    setEmail("")
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p className="text-primary-foreground/70 text-sm tracking-[0.2em] uppercase mb-4">
              Contact Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
              함께 이야기
              <br />
              나눠요
            </h2>
            <p className="mt-8 text-primary-foreground/80 leading-relaxed">
              궁금한 점이 있으시거나 협업을 원하시면 언제든 연락해 주세요.
              MAISON 팀이 친절하게 답변드리겠습니다.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">주소</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    서울시 성동구 성수이로 77, 3층
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">이메일</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    hello@maison.co.kr
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-primary-foreground/10 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">전화</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    02-1234-5678
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div className="lg:pl-8">
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                뉴스레터 구독
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                MAISON의 최신 소식과 특별한 혜택을 가장 먼저 받아보세요.
                매주 한 번, 스타일 팁과 신상품 정보를 보내드립니다.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground"
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  구독하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-primary-foreground/50 text-xs mt-4">
                구독은 언제든 취소할 수 있습니다. 개인정보는 안전하게 보호됩니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
