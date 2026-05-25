"use client";

import { useEffect } from "react";

export default function CimnastikPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      document.querySelectorAll('.reveal').forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Gymnastics Hero"
            className="w-full h-full object-cover brightness-[0.4]"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 md:px-16 reveal">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-secondary-container text-on-primary font-label-md text-label-md mb-6 uppercase tracking-widest">
              Profesyonel Branş
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary leading-tight mb-6">
              Profesyonel Cimnastik Eğitimi
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">
              Çocukların fiziksel ve zihinsel gelişimini en üst düzeye çıkaran cimnastik programımızla; esneklik, güç, denge ve özgüveni bir araya getiriyoruz. Modern ekipmanlar ve uzman antrenörler eşliğinde geleceğin şampiyonlarını yetiştiriyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="bg-secondary-container text-on-primary px-8 py-4 font-headline-md text-headline-md font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                <span>Hemen Ücretsiz Deneme Dersi Alın</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-secondary-container"></div>
      </section>

      {/* About Gymnastics */}
      <section className="py-20 bg-surface-container-lowest">
        <div className="container mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                Geleceğin Temeli Burada Atılıyor
              </h2>
              <div className="w-20 h-1.5 bg-secondary-container mb-8"></div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Cimnastik, tüm spor branşlarının temeli olarak kabul edilir. Elite Junior Sports Center bünyesinde sunduğumuz cimnastik programı, çocuğunuzun motor becerilerini geliştirmesine yardımcı olurken disiplin ve kararlılık duygularını pekiştirir.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                Müfredatımız, 0-3 yaş "Baby Gym" seanslarından başlayarak, performans gruplarına kadar uzanan geniş bir yelpazeyi kapsar. Her yaş grubuna özel olarak tasarlanmış çalışma programları ve pedagojik yaklaşımımızla fark yaratıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-surface-container border-l-4 border-primary">
                  <span className="material-symbols-outlined text-secondary-container mb-2">
                    fitness_center
                  </span>
                  <h4 className="font-label-md text-label-md text-primary">
                    Uzman Antrenörler
                  </h4>
                </div>
                <div className="p-4 bg-surface-container border-l-4 border-primary">
                  <span className="material-symbols-outlined text-secondary-container mb-2">
                    health_and_safety
                  </span>
                  <h4 className="font-label-md text-label-md text-primary">
                    Güvenli Ortam
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative reveal delay-200">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary-container z-0"></div>
              <img
                alt="Gymnastics Hall"
                className="relative z-10 w-full rounded shadow-xl"
                src="/home-1.webp"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="py-20 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-6 h-full">
            <div className="border-r border-white"></div>
            <div className="border-r border-white"></div>
            <div className="border-r border-white"></div>
            <div className="border-r border-white"></div>
            <div className="border-r border-white"></div>
            <div></div>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">
              Eğitim Seviyelerimiz
            </h2>
            <p className="font-body-md opacity-80">
              Her yaştan sporcu adayına uygun, bilimsel yöntemlerle hazırlanmış branş sınıflarımız.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="reveal bg-white p-8 border-t-4 border-secondary-container group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-primary-container font-headline-md text-headline-md mb-4 group-hover:text-secondary-container transition-colors">
                Baby Gym
              </div>
              <div className="text-on-surface-variant font-label-md text-label-md mb-6 uppercase">
                0 - 3 YAŞ
              </div>
              <ul className="space-y-4 mb-8 text-on-surface-variant font-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Ebeveyn katılımlı oyun odaklı gelişim</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Temel denge ve koordinasyon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Sosyalleşme ve duyusal aktivite</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-white transition-colors cursor-pointer">
                Bilgi Al
              </button>
            </div>

            {/* Card 2 */}
            <div className="reveal delay-100 bg-white p-8 border-t-4 border-secondary-container group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-primary-container font-headline-md text-headline-md mb-4 group-hover:text-secondary-container transition-colors">
                Temel Cimnastik
              </div>
              <div className="text-on-surface-variant font-label-md text-label-md mb-6 uppercase">
                4 - 7 YAŞ
              </div>
              <ul className="space-y-4 mb-8 text-on-surface-variant font-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Esneklik ve temel teknik hareketler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Vücut disiplini ve postür gelişimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Haftalık düzenli takip çizelgesi</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-white transition-colors cursor-pointer">
                Bilgi Al
              </button>
            </div>

            {/* Card 3 */}
            <div className="reveal delay-200 bg-white p-8 border-t-4 border-secondary-container group hover:-translate-y-2 transition-transform duration-300">
              <div className="text-primary-container font-headline-md text-headline-md mb-4 group-hover:text-secondary-container transition-colors">
                Performans Grubu
              </div>
              <div className="text-on-surface-variant font-label-md text-label-md mb-6 uppercase">
                8+ YAŞ
              </div>
              <ul className="space-y-4 mb-8 text-on-surface-variant font-body-md">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>İleri seviye akrobatik teknikler</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Yarışma odaklı kondisyon antrenmanı</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                    check_circle
                  </span>
                  <span>Bölgesel ve ulusal müsabaka hazırlığı</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-white transition-colors cursor-pointer">
                Bilgi Al
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-16">
          <div className="flex justify-between items-end mb-20 reveal">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Salonumuzdan Kareler
              </h2>
              <p className="font-body-md text-on-surface-variant mt-2">
                Enerji, başarı ve disiplin dolu anlar.
              </p>
            </div>
          </div>
          <div className="masonry-grid">
            <div className="reveal masonry-item-tall group overflow-hidden relative">
              <img
                alt="Training area"
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                src="/cimnastik-1.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-label-md">
                  Tecrübeli Hocalarımız Eşliğinde
                </p>
              </div>
            </div>
            <div className="reveal delay-100 group overflow-hidden relative">
              <img
                alt="Action shot"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="/cimnastik-2.webp"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-label-md">
                  Eğitim Sırasında
                </p>
              </div>
            </div>
            <div className="reveal delay-200 group overflow-hidden relative">
              <img
                alt="Equipment"
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-label-md">
                  Ödüllerimiz
                </p>
              </div>
            </div>
            <div className="reveal delay-300 group overflow-hidden relative masonry-item-tall">
              <div className="w-full h-full bg-primary flex flex-col items-center justify-center p-8 text-center">
                <span
                  className="material-symbols-outlined text-secondary-container text-5xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  military_tech
                </span>
                <h3 className="text-on-primary font-headline-md mb-2">
                  Başarı Dolu Geçmiş
                </h3>
                <p className="text-white/70 font-body-md">
                  Sporcularımız bölgesel turnuvalarda 50+ madalya kazanmıştır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="container mx-auto px-4 md:px-16">
          <div className="bg-primary rounded shadow-2xl p-12 md:p-20 text-center max-w-3xl mx-auto reveal">
            <h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">
              Çocuğunuzun Potansiyelini Açığa Çıkarın
            </h2>
            <p className="font-body-md text-on-primary/80 mb-8 max-w-2xl mx-auto">
              Cool Kids Sports Center'daki cimnastik eğitimi ile çocuğunuz sadece bir spor yapmıyor, beden ve zihni geliştirebilir, disiplin ve özgüven kazanıyor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-secondary-container text-on-primary px-8 py-4 font-headline-md font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                <span>Ücretsiz Deneme Dersi İçin Kayıt Ol</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <button className="border-2 border-secondary-container text-secondary-container px-8 py-4 font-headline-md font-bold hover:bg-secondary-container hover:text-on-primary transition-all flex items-center justify-center gap-2 cursor-pointer">
                <span>Daha Fazla Bilgi</span>
                <span className="material-symbols-outlined">info</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
