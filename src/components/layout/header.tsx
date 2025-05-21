
"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#technology-flow", label: "技術紹介" },
  { href: "#pricing", label: "料金（ベータ版無料）" },
  { href: "#faq", label: "よくある質問" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    console.log('Tracking: Nav Item Clicked');
  };

  const handleCTAClick = () => {
    setIsMobileMenuOpen(false);
    console.log('Tracking: Header CTA Clicked - Pre-registration');
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex py-0 items-center justify-between pl-0 pr-2 md:pl-0 md:pr-4">
        <Link href="/" className="flex items-center gap-2 -ml-2" onClick={handleNavClick} aria-label="Yamet AI ホームページ">
          <Image
            src="/logo_name.png"
            alt="Yamet AI Logo"
            width={188}
            height={40}
            className="h-10 w-auto md:h-12" // Increased logo height
            data-ai-hint="logo brand"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button
            size="sm" // Reverted button size
            onClick={handleCTAClick}
            data-tally-open="w85kR5"
            data-tally-layout="modal"
            data-tally-width="1000"
            data-tally-height="500"
            data-tally-hide-title="1"
            className="bg-gray-800 text-white hover:bg-gray-700 focus-visible:ring-ring rounded-full px-8 py-2.5"
          >
            事前登録
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="メニューを開く">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex items-center justify-between">
                 <Link href="/" className="flex items-center gap-2" onClick={handleNavClick} aria-label="Yamet AI ホームページ">
                    <Image
                      src="/logo_name.png"
                      alt="Yamet AI Logo"
                      width={188}
                      height={40}
                      className="h-20 w-auto" // Increased logo height for mobile menu
                      data-ai-hint="logo brand"
                      priority
                    />
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon" aria-label="メニューを閉じる">
                    <X className="h-6 w-6 text-foreground" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
                      className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button
                    className="w-full bg-gray-800 text-white hover:bg-gray-700 focus-visible:ring-ring rounded-full"
                    onClick={handleCTAClick}
                    data-tally-open="w85kR5"
                    data-tally-layout="modal"
                    data-tally-width="1000"
                    data-tally-height="500"
                    data-tally-hide-title="1"
                  >
                    事前登録
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
