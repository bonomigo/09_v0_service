import Link from "next/link"

const footerLinks = {
  company: [
    { label: "회사소개", href: "#about" },
    { label: "브랜드 스토리", href: "#story" },
    { label: "팀 소개", href: "#team" },
    { label: "채용", href: "/recruit" },
  ],
  support: [
    { label: "고객센터", href: "#" },
    { label: "배송 안내", href: "#" },
    { label: "교환/반품", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "이용약관", href: "#" },
    { label: "개인정보처리방침", href: "#" },
    { label: "사업자정보", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "KakaoTalk", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="font-serif text-2xl font-semibold text-foreground">
              MAISON
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              당신의 스타일을 완성하는
              <br />
              프리미엄 패션 브랜드
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Social
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 MAISON. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            대표: 김민수 | 사업자등록번호: 123-45-67890
          </p>
        </div>
      </div>
    </footer>
  )
}
