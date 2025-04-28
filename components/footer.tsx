import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from "next/image"
import React from 'react'

export default function Footer() {

    const t = useTranslations()

    return (
        <div className='border-t'>
            <div className='max-w-7xl mx-auto pt-16 pb-5 px-5'>
                <div className='flex items-center md:items-start flex-col md:flex-row justify-between gap-y-14 text-center md:text-left'>
                    <div className='w-full max-w-80 text-black dark:text-white'>
                        <Link href="#" className='flex justify-center md:justify-start'>
                            <Image width={100} height={100} src="/horizon.png" alt="Perfect-room Logo" className='py-4 w-32' />
                        </Link>
                        <p>Notre mission est de vous offrir des vêtements de la meilleure qualité au meilleur prix en Algérie</p>
                    </div>
                    <div className='grid grid-cols-3 md:gap-x-20 md:gap-y-20 gap-x-6 gap-y-6'>
                        <div className='flex flex-col'>
                            <div className='text-slate-400 text-sm font-light mb-3'>General</div>
                            <nav className="flex flex-col space-y-4 mt-8">
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Products</Link>
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Account</Link>
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Reviews</Link>
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Questions</Link>
                            </nav>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-slate-400 text-sm font-light mb-3'>Categories</div>
                            <nav className="flex flex-col space-y-4 mt-8">
                                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                                    {t("home.hero.home")}
                                </Link>
                                <Link href="/products" className="text-sm font-medium transition-colors hover:text-primary">
                                    {t("nav.allProducts")}
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
                                <Link href="/products?category=mens" className="text-sm font-medium transition-colors hover:text-primary">
                                    {t("product.promo")}
                                </Link>
                            </nav>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-slate-400 text-sm font-light mb-3'>Support</div>
                            <nav className="flex flex-col space-y-4 mt-8">
                                <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">Help center</Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className='border-t flex justify-between items-center flex-col sm:flex-row pt-6 mt-14'>
                    <p className='text-slate-400 font-light text-sm'>© 2024 - Tentation. All rights reserved</p>
                    <div className='flex items-center justify-start gap-x-3 gap-y-3 text-slate-400 font-light text-sm'>
                        <Link href="#">Privacy Policy</Link>
                        <p>|</p>
                        <Link href="#">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
