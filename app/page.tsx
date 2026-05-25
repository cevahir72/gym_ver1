"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

const heroTitleVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
};

const heroButtonContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 16,
      delayChildren: 0.35,
      staggerChildren: 0.12,
    },
  },
};

const heroButtonVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 90, damping: 16 },
  },
};

export default function Home() {
  const router = useRouter();
  const [medalCount, setMedalCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedBranches, setSelectedBranches] = useState<string[]>([]);
  const [wantsTrial, setWantsTrial] = useState(false);
  const medalRef = useRef<HTMLDivElement | null>(null);
  const medalInView = useInView(medalRef, { once: true, amount: 0.4 });

  const toggleBranch = (branch: string) => {
    setSelectedBranches((prev) =>
      prev.includes(branch) ? prev.filter((item) => item !== branch) : [...prev, branch]
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const message = encodeURIComponent(
      `*Ön Kayıt Talebi - Cool Kids Sport Center*%0A%0AEbeveyn Adı Soyadı: ${parentName || "-"}%0AÇocuğun Yaşı: ${childAge || "-"}%0ATelefon: ${phone || "-"}%0Aİlgilenilen Branşlar: ${
        selectedBranches.length > 0 ? selectedBranches.join(", ") : "-"
      }%0AÜcretsiz Deneme Dersi İstiyorum: ${wantsTrial ? "Evet" : "Hayır"}`
    );
    window.open(`https://wa.me/9005010076070?text=${message}`, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
    }, 1200);
  };

  useEffect(() => {
    if (!medalInView) return;

    const duration = 2000;
    const target = 47;
    const startTime = performance.now();
    let frame = 0;

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setMedalCount(Math.round(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [medalInView]);

  return (
    <main>
        <section className="relative overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,101,34,0.22),_transparent_40%),linear-gradient(180deg,#1B2B5E_0%,#0d1735_100%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                className="space-y-8"
              >
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, type: "spring", stiffness: 90, damping: 18 }}
                  className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80"
                >
                  Geleceğin Yıldızları İçin
                </motion.p>
                <motion.h1
                  variants={heroTitleVariant}
                  className="max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl"
                >
                  Çocuğunuzun <span className="text-accent">şampiyonluk yolculuğu</span> burada başlıyor.
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.1, type: "spring", stiffness: 90, damping: 18 }}
                  className="max-w-2xl text-lg leading-8 text-white/85 sm:text-xl"
                >
                  Bağlıca'nın en kapsamlı çocuk spor merkezi; güven, enerji ve modern tesislerle dolu bir dünya.
                </motion.p>
                <motion.div
                  variants={heroButtonContainerVariant}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <motion.a
                    variants={heroButtonVariant}
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    Ücretsiz Deneme Dersi Al
                  </motion.a>
                  <motion.a
                    variants={heroButtonVariant}
                    href="#venue"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm text-white transition hover:bg-white/15"
                  >
                    Mekânı Keşfet
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/10 pt-[60%] shadow-2xl shadow-black/20"
              >
                <img
                  src="/home-1.webp"
                  alt="Modern kids sports gym"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="venue" className="bg-background px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Mekanımız</p>
                <h2 className="mt-3 text-3xl font-semibold text-primary sm:text-4xl">
                  Modern, geniş ve çocuk dostu spor alanları.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-muted">
                Fotoğraflarla mekanımızın enerjisini keşfedin; geniş salonlar, hijyenik alanlar ve motivasyon dolu bir spor deneyimi.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_60px_rgba(27,43,94,0.08)]">
                <img src="/cfitness-1.webp" alt="Veliler için Dinlenme Alanı" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">Veliler için Dinlenme Alanı</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Çayınızı huzurla yudumlarken çocuğunuzun nasıl geliştiğini 1. sıradan izleyin!
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.1 }} className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_60px_rgba(27,43,94,0.08)]">
                <img src="/baby-1.webp" alt="Cimnastik Salonu" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">Cimnastik Salonu</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Çocukların rahatça hareket edebildiği ferah salonlar ile güvenli bir spor ortamı.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.2 }} className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_60px_rgba(27,43,94,0.08)]">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa4_ygJoqvc5J-AGc73Bzh7ha51chARvjO9T0BXc1LkuTAH2BVKw0F-Qg2w0jngp0e3hD-Z3ye9JvS064F5uEy0ThKGOhdSlW6gf9tek19aAHsfxRX-kDwMCh6JarYr0_qLqjts2OzKNElzc6HLPdyDNJHz9y15FGnuq4d4Ra3n6Ha5IUDtS_SzxyneDbJ9LytDLVoM1vl7kgjwTYklPDRCcL2zhVKVhr6XnHYG6AFLOVJCUh8gzPEWnCelY-9bMc_6MbUH6-paMuL" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary">Çok Amaçlı Salon</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    Turnuva ve derslere uygun, modern altyapılı geniş salon.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="sports" className="bg-surface py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Sunulan Sporlar</p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Her çocuğa uygun spor branşları
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Cimnastik", label: "Esneklik ve denge", icon: "🤸", slug: "cimnastik" },
                { title: "Çocuk Fitness", label: "Özel güç programı", icon: "🏋️", slug: "cfitness" },
                { title: "Taekwondo", label: "Disiplin ve odaklanma", icon: "🥋", slug: "taekwondo" },
                { title: "Baby Gym", label: "0-3 yaş motor beceri", icon: "👶", slug: "babygym" },
                { title: "Okçuluk", label: "Odaklanma ve sabır", icon: "🏹", slug: "okculuk" },
                { title: "Yetişkin Fitness", label: "Ebeveynler için özel seans", icon: "💪", slug: "fitness" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => router.push(`/sporlar/${item.slug}`)}
                  className="rounded-[1.5rem] border border-slate-200/80 bg-white p-8 shadow-[0_20px_40px_rgba(27,43,94,0.06)] cursor-pointer"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/10 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="bg-surface py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-accent">
                  Başarılarla dolu bir yolculuk
                </p>
                <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                  Madalyalarımızla gurur duyuyoruz.
                </h2>
                <p className="max-w-xl text-sm leading-7 text-muted">
                  Yerel ve ulusal turnuvalarda öğrencilerimizin kazandığı başarılar, bizim için her zaman en büyük motivasyon kaynağı.
                </p>
              </motion.div>

              <motion.div
                ref={medalRef}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[2rem] border border-slate-200/80 bg-white p-10 shadow-[0_30px_70px_rgba(27,43,94,0.08)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-3xl text-primary">
                    🏆
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-primary">{medalCount}</div>
                    <div className="text-sm uppercase tracking-[0.24em] text-muted">Madalya</div>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-muted">
                  Bu sayıyı kullanıcı sayfa ilgili bölüme geldiğinde yavaşça 0'dan 47'ye yükselerek gösteriyoruz.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-surface px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-primary sm:text-4xl">
                Velilerimiz Ne Diyor?
              </h2>
              <div className="mt-4 flex items-center justify-center gap-1 text-orange-500">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <motion.div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {[
                {
                  name: "Aslı Yılmaz",
                  comment: "Bağlıca'da böyle bir tesisin olması büyük şans. Kızımın cimnastik derslerini iple çekiyor.",
                },
                {
                  name: "Mehmet Korkmaz",
                  comment: "Oğlum basketbol grubuna başladığından beri hem boyu uzadı hem de kendine güveni arttı.",
                },
                {
                  name: "Emel Kara",
                  comment: "Hijyen konusunda çok hassasım ama COOL KIDS pırıl pırıl.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  variants={fadeInUp}
                  className="rounded-[2rem] border border-slate-200/90 bg-white p-8 shadow-[0_20px_40px_rgba(27,43,94,0.06)]"
                >
                  <p className="mb-6 text-lg italic leading-8 text-slate-700">
                    “{testimonial.comment}”
                  </p>
                  <p className="text-base font-semibold text-primary">{testimonial.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* YouTube bölümü yoruma alındı */}
        {/*
        <section id="promotional-video" className="bg-background px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">
                Merkezimizi Yakından Tanıyın
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
                Profesyonel eğitmenlerimiz ve modern tesisimizle çocuklarınızın geleceğine değer katıyoruz.
              </h2>
            </div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-black shadow-2xl"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Promotional Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </div>
        </section>
        */}

        <section id="contact" className="bg-surface py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-4xl font-semibold text-primary">İletişime Geçin</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                    Sorularınız için bize ulaşabilir veya merkezimizi ziyaret edebilirsiniz. Profesyonel ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_40px_rgba(27,43,94,0.06)]">
                    <p className="text-sm font-semibold text-primary">Adresimiz</p>
                    <p className="mt-3 text-sm text-muted">Bağlıca, Etimesgut, Ankara</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_40px_rgba(27,43,94,0.06)]">
                    <p className="text-sm font-semibold text-primary">Telefon</p>
                     <p className="mt-3 text-sm text-muted">0501 007 60 70</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/9005010076070"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-3xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(16,185,129,0.25)] transition hover:bg-emerald-600 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d="M20.52 3.48a11.99 11.99 0 00-17 0 11.94 11.94 0 00-3.53 8.48c0 6.62 5.37 12 12 12a11.94 11.94 0 008.48-3.53 11.99 11.99 0 000-17zm-1.45 15.55c-1.33 1.33-3.09 2.06-4.96 2.06-1.15 0-2.27-.29-3.27-.85l-4.2 1.1 1.1-4.2a6.99 6.99 0 01-.85-3.27c0-1.87.73-3.63 2.06-4.96a6.98 6.98 0 019.9 0 6.98 6.98 0 010 9.9z" />
                    <path d="M16.5 12.75a1.5 1.5 0 01-2.12 0l-.38-.38a1.5 1.5 0 01-.03-2.12 1.5 1.5 0 012.12.03l.38.38a1.5 1.5 0 010 2.12z" />
                  </svg>
                  WhatsApp Destek
                </a>

                <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_40px_rgba(27,43,94,0.08)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.927650701017!2d32.76344271553948!3d39.96661457942543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d348dfa7c51c0f%3A0x0000000000000000!2zQsO8Z8O2Y2EsIEV0aW1lc3RndXQsIEFuaySxYQ!5e0!3m2!1str!2str!4v1710000000000"
                    className="h-72 w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.45, delay: 0.1 }}
                className="relative overflow-hidden rounded-[2rem] bg-white p-10 shadow-[0_30px_80px_rgba(27,43,94,0.12)]"
              >
                <div className="absolute right-6 top-6 h-28 w-28 rounded-full bg-orange-100 blur-3xl" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-primary">Ön Kayıt Formu</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Geleceğin şampiyonu için ilk adımı atın.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-sm text-slate-700">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-900">Ebeveyn Adı Soyadı</label>
                      <input
                        value={parentName}
                        onChange={(event) => setParentName(event.target.value)}
                        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        placeholder="Adınız ve Soyadınız"
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900">Çocuğun Yaşı</label>
                        <select
                          value={childAge}
                          onChange={(event) => setChildAge(event.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                        >
                          <option value="">Seçiniz</option>
                          <option value="3-5 Yaş">3-5 Yaş</option>
                          <option value="6-8 Yaş">6-8 Yaş</option>
                          <option value="9-12 Yaş">9-12 Yaş</option>
                          <option value="13-16 Yaş">13-16 Yaş</option>
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-900">Telefon</label>
                        <input
                          value={phone}
                          onChange={(event) => setPhone(event.target.value)}
                          className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mb-3 text-sm font-medium text-slate-900">İlgilenilen Branşlar</p>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Cimnastik",
                          "Çocuk Fitness",
                          "Taekwondo",
                          "Baby Gym",
                          "Okçuluk",
                          "Yetişkin Fitness",
                        ].map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleBranch(item)}
                            className={`rounded-full border px-4 py-2 text-sm transition cursor-pointer ${
                              selectedBranches.includes(item)
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-primary hover:text-primary"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                    <label className="inline-flex items-center gap-3 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={wantsTrial}
                        onChange={(event) => setWantsTrial(event.target.checked)}
                        className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary"
                      />
                      Ücretsiz Deneme Dersi İstiyorum
                    </label>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-primary px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(27,43,94,0.18)] transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Gönderiliyor...
                        </>
                      ) : (
                        "Başvuruyu Gönder"
                      )}
                    </button>
                  </form>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="mt-5 rounded-3xl border border-slate-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                    >
                      Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
  );
}
