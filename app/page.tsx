// src/app/page.tsx
import React from 'react';
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight,
  Store,
  Truck,
  Wrench,
  Factory,
  Ruler,
  ShoppingBag,
  Paintbrush,
  Star,
  Building2,
  Boxes,
  Layers,
  Sparkles
} from 'lucide-react';

const WA_NUMBER = "6285311111010"; 
const WA_MESSAGE = encodeURIComponent("Halo Tim Ritelindo, saya ingin Konsultasi WA Gratis & Layout 3D untuk toko/minimarket saya.");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md shadow-blue-500/20">
              <Store className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                RITELINDO <span className="text-blue-600">GROUP</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-500 font-semibold uppercase mt-1">
                Akselera Kolaborasi
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#beranda" className="text-blue-600 border-b-2 border-blue-600 pb-1">Beranda</a>
            <a href="#keunggulan" className="hover:text-blue-600 transition-colors">Produk</a>
            <a href="#keunggulan" className="hover:text-blue-600 transition-colors">Layanan</a>
            <a href="#sektor" className="hover:text-blue-600 transition-colors">Sektor Bisnis</a>
            <a href="#custom" className="hover:text-blue-600 transition-colors">Tentang Kami</a>
          </nav>

          {/* CTA Header */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Konsultasi WA Gratis</span>
          </a>
        </div>
      </header>

      {/* 2. BRIGHT HERO SECTION (PERSIS PERMINTAAN & GAMBAR CONTOH) */}
      <section id="beranda" className="relative bg-slate-900 overflow-hidden min-h-[580px] flex items-center py-12 lg:py-16">
        
        {/* Background Image Terang di Sisi Kanan */}
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1920&auto=format&fit=crop')` 
          }}
        />
        
        {/* Soft Blue Fade Gradient dari Kiri ke Kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d223a] via-[#0d223a]/95 to-transparent lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d223a]/80 via-transparent to-transparent lg:hidden" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-5 text-white">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                <Factory className="w-3.5 h-3.5 text-blue-400" /> Produsen Langsung dari Pabrik
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.15]">
                Solusi Paket Rak Minimarket & Setup Toko <span className="text-blue-400">Retail Modern</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal leading-relaxed">
                Tingkatkan omset toko Anda dengan tampilan layout yang rapi, stylish, dan efisien. Kami siap melayani pembukaan toko baru maupun upgrade ke konsep modern.
              </p>

              {/* Checklist Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm font-medium text-slate-200 pt-1 max-w-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Konsultasi & Layout 3D</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bisa Custom Ukuran & Ruangan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Ongkir Jawa - Bali</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Produk Langsung dari Pabrik</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Perakitan (Jatim, Jateng, DIY)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Jasa Interior Toko</span>
                </div>
              </div>

              {/* Action Button & Rating */}
              <div className="pt-3 space-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi WA Gratis Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Rating Badge */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-slate-300 border-2 border-slate-900 flex items-center justify-center font-bold text-[10px] text-slate-800">A</div>
                    <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-slate-900 flex items-center justify-center font-bold text-[10px] text-white">B</div>
                    <div className="w-7 h-7 rounded-full bg-emerald-400 border-2 border-slate-900 flex items-center justify-center font-bold text-[10px] text-white">C</div>
                  </div>
                  <div className="text-[11px] text-slate-300">
                    <span className="font-bold text-white">Ribuan toko sudah mempercayai Ritelindo Group</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                      <span className="font-bold text-white text-[11px]">4.9/5</span>
                      <span className="text-slate-400">(dari 500+ pelanggan)</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Side Overlay Tagline & Floating Card */}
            <div className="lg:col-span-5 relative hidden lg:block h-full min-h-[400px]">
              
              {/* Cursive Tagline Top Right */}
              <div className="absolute top-4 right-4 text-right">
                <p className="font-serif italic text-2xl font-bold text-slate-900 drop-shadow-md tracking-wide">
                  Toko Lebih Rapi,
                </p>
                <p className="font-serif italic text-2xl font-bold text-blue-950 drop-shadow-md tracking-wide">
                  Bisnis Makin Naik!
                </p>
              </div>

              {/* Layout 3D Card Floating Bottom Right */}
              <div className="absolute bottom-2 right-2 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200/80 max-w-[280px]">
                <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[16/10] mb-2">
                  <img 
                    src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=400&auto=format&fit=crop" 
                    alt="Layout 3D Preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-tight">
                    Layout 3D <span className="text-blue-600">Gratis!</span>
                  </h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Visualisasikan toko impian Anda sebelum membeli.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. VALUE PROPOSITIONS GRID */}
      <section id="keunggulan" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Mengapa Memilih Ritelindo Group?
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Keunggulan layanan B2B kami untuk memastikan investasi toko dan bisnis retail Anda tepat guna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Free Konsultasi & Layout 3D</h3>
              <p className="text-[11px] text-slate-500">
                Dapatkan saran terbaik dan desain layout toko sesuai kebutuhan Anda.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Free Ongkir Jawa - Bali</h3>
              <p className="text-[11px] text-slate-500">
                Pengiriman aman dan bebas biaya kirim untuk wilayah Jawa hingga Bali.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Free Perakitan Jatim, Jateng & DIY</h3>
              <p className="text-[11px] text-slate-500">
                Tim profesional kami akan membantu proses instalasi dan perakitan di lokasi Anda.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Produk Langsung dari Pabrik</h3>
              <p className="text-[11px] text-slate-500">
                Harga kompetitif dengan kualitas standar minimarket modern tanpa perantara.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Bisa Custom Sesuai Kebutuhan</h3>
              <p className="text-[11px] text-slate-500">
                Atur ukuran, bentuk, dan desain sesuai dengan ruangan toko Anda.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Pembelian Fleksibel</h3>
              <p className="text-[11px] text-slate-500">
                Melayani pembelian satuan, paket toko, hingga proyek retail.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 text-center hover:shadow-md transition-all sm:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Jasa Interior Toko</h3>
              <p className="text-[11px] text-slate-500">
                Tampilan toko lebih stylish & modern dengan desain interior profesional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SEKTOR BISNIS CARDS */}
      <section id="sektor" className="py-16 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Melayani Berbagai Sektor Bisnis Retail
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Baik Anda membuka minimarket baru, upgrade toko kelontong ke konsep modern, maupun ekspansi cabang, kami siap membantu!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Minimarket & Supermarket",
                img: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=500&auto=format&fit=crop",
                icon: Store
              },
              {
                title: "Toko Kelontong / Sembako",
                img: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=500&auto=format&fit=crop",
                icon: ShoppingBag
              },
              {
                title: "Toko ATK & Fotokopi",
                img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=500&auto=format&fit=crop",
                icon: Layers
              },
              {
                title: "Pet Shop & Apotek",
                img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop",
                icon: Building2
              },
              {
                title: "Baby Shop & Fashion",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500&auto=format&fit=crop",
                icon: Paintbrush
              },
              {
                title: "Toko Bahan Kue",
                img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop",
                icon: Store
              },
              {
                title: "Toko Bahan Bangunan",
                img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=500&auto=format&fit=crop",
                icon: Wrench
              },
              {
                title: "Gudang / Storage B2B",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop",
                icon: Boxes
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200 transition-all group">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-900/10" />
                    <div className="absolute bottom-2.5 left-2.5 p-2 bg-blue-600 text-white rounded-lg shadow-md">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="p-3.5">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CUSTOM INTERIOR FEATURE BANNER */}
      <section id="custom" className="py-14 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl overflow-hidden border border-slate-700 aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop" 
                  alt="Desain Interior Modern"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <Paintbrush className="w-3.5 h-3.5" /> Jasa Interior & Custom Furniture
              </span>

              <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                Bisa Custom Sesuai Ukuran & Konsep Toko Anda
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Selain menyediakan paket rak standar minimarket, kami juga menyediakan layanan Jasa Interior Toko agar tampilan visual tempat usaha Anda lebih stylish, modern, dan menarik minat pelanggan.
              </p>

              <div className="pt-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Diskusi Custom Layout WA</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-bold text-white text-sm">PT Ritelindo Akselera Kolaborasi</p>
            <p className="text-slate-500">Solusi Retail, Untuk Masa Depan Bisnis Anda.</p>
          </div>
          <p className="text-slate-500 text-center md:text-right">
            &copy; 2026 Ritelindo Akselera Kolaborasi (Ritelindo Group). All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* 7. FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-2xl font-bold text-xs sm:text-sm transition-all transform hover:scale-110 active:scale-95 border border-white/20"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">Konsultasi WA Gratis</span>
        </a>
      </div>

    </main>
  );
}