"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Menu, Search, ShoppingBag, User } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Link } from '@/i18n/routing';
import { useState } from "react"

export default function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 w-full px-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t("common.menu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
                {t("nav.allProducts")}
              </Link>
              <Link href="/products?category=mens" className="text-sm font-medium transition-colors hover:text-primary">
                {t("nav.men")}
              </Link>
              <Link
                href="/products?category=womens"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t("nav.women")}
              </Link>
              <Link
                href="/products?category=accessories"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t("nav.accessories")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center md:px-2 space-x-2">
          <div className="relative md:right-0 h-8 w-8 md:h-10 md:w-10">
            <Image src="/shopping-basket.ico?height=40&width=40" alt="Logo" fill className="object-contain grayscale" priority />
          </div>
          <span className="hidden sm:inline-block text-xl uppercase font-bold">Tentation</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-1 justify-center">
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.allProducts")}
          </Link>
          <Link href="/products?category=mens" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.men")}
          </Link>
          <Link href="/products?category=womens" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.women")}
          </Link>
          <Link
            href="/products?category=accessories"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.accessories")}
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2">
          {/* Search Button */}
          <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">{t("common.search")}</span>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                2
              </span>
              <span className="sr-only">{t("common.cart")}</span>
            </Link>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">{t("common.account")}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{t("common.account")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile" className="flex w-full">
                  {t("common.profile")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders" className="flex w-full">
                  {t("common.order")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex w-full">
                  {t("common.setting")}
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button className="flex w-full">{t("common.logout")}</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t">
          <div className="container py-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder={t("common.search")}
                className="w-full bg-background pl-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-9 rounded-md border border-input px-3 py-1"
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

