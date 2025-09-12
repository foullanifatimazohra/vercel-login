"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./ui/language-switcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");

  const navigation = t.raw("navigation") as { label: string; href: string }[];

  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src={t("company.logo")}
                alt={t("company.name")}
                className="h-10 w-10 mr-3"
              />
              <span className="text-2xl font-bold text-[#031e32]">
                {t("company.name").split(" ")[0]}{" "}
                <span className="text-[#FF8200]">
                  {t("company.name").split(" ")[1]}
                </span>
              </span>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#031e32] hover:text-[#FF8200] transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex gap-5">
            <LanguageSwitcher />
            <Link
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#FF8200] px-4 py-2 text-sm rounded-md hover:bg-[#ff9b33] text-white border-0"
            >
              {t("cta")}
            </Link>
          </div>

          {/* Menu Mobile Toggle */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-3 py-2 text-[#031e32] hover:text-[#FF8200] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2 flex gap-5">
                <LanguageSwitcher />
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-[#FF8200] px-4 py-2 text-sm rounded-md hover:bg-[#ff9b33] text-white border-0"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
