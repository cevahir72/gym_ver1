"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

export default function OkculukPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Elite Archery Training"
            className="w-full h-full object-cover blur-[6px]"
            src="/ok-3.webp"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary text-white px-4 py-1 font-label-md text-label-md uppercase mb-6 tracking-widest">
              OKÇULUK BRANŞI
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight uppercase">
              Okçuluk: Odaklanma ve Disiplinin Zirvesi
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl">
              Sadece bir spor değil, zihinsel bir yolculuk. Geleceğin
              şampiyonlarını sabır, denge ve kusursuz odaklanma ile
              tanıştırıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="px-8 py-4 bg-secondary-container text-white font-bold font-label-md uppercase shadow-lg hover:brightness-110 transition-all active:scale-95 inline-block">
                Ücretsiz Deneme Dersi
              </a>
              <button className="px-8 py-4 border-2 border-white text-white font-bold font-label-md uppercase hover:bg-white/10 transition-all active:scale-95 cursor-pointer">
                Ders Programı
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6 uppercase">
              Geleceğin Okçularını Yetiştiriyoruz
            </h2>
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <p>
                Okçuluk, bedensel güçten ziyade zihinsel disiplin gerektiren
                bir sanattır. Elite Junior Sports bünyesinde, çocuklarımıza
                sadece yay germeyi değil, hedefe kilitlenmeyi ve stres
                yönetimini öğretiyoruz.
              </p>
              <p>
                Uluslararası standartlarda ekipmanlarımız ve uzman eğitmen
                kadromuzla, sporcularımızın her atışta kendilerini aşmalarını
                destekliyoruz.
              </p>
              <div className="flex items-center gap-4 mt-8 p-4 bg-surface-container-low border-l-4 border-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  verified_user
                </span>
                <span className="font-label-md text-primary uppercase">
                  Modern ve Güvenli Okçuluk Poligonu
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-secondary/10 rounded-xl transition-all group-hover:inset-0"></div>
            <img
              alt="Archery Facility"
              className="relative shadow-xl w-full aspect-video object-cover"
              src="/ok-3.webp"
            />
          </motion.div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4 uppercase tracking-tight">
              Eğitim Gruplarımız
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Her yaş grubuna özel hazırlanan müfredatımızla sporcularımızın
              teknik ve mental gelişimini takip ediyoruz.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Genç Okçular",
                age: "8-12 Yaş Grubu",
                features: [
                  "Motor Beceriler ve Koordinasyon",
                  "Temel Duruş Teknikleri",
                  "Eğlenceli Hedef Pratikleri",
                ],
                variant: "light",
              },
              {
                title: "Gelişim Grubu",
                age: "12-16 Yaş Grubu",
                features: [
                  "Teknik Analiz ve Düzeltme",
                  "Turnuva Hazırlık Süreçleri",
                  "Ekipman Bakımı ve Ayarı",
                ],
                variant: "accent",
              },
              {
                title: "Performans Takımı",
                age: "Lisanslı Sporcular",
                features: [
                  "Üst Düzey Müsabaka Stratejisi",
                  "Milli Takım Odaklı Antrenmanlar",
                  "Profesyonel Kondisyon Programı",
                ],
                variant: "dark",
              },
            ].map((level) => (
              <motion.div
                key={level.title}
                variants={fadeInUp}
                className={
                  level.variant === "dark"
                    ? "bg-primary p-8 border border-primary hover:shadow-xl transition-all duration-300 group"
                    : "bg-surface-container-lowest p-8 border border-outline-variant hover:shadow-xl transition-all duration-300 group" +
                      (level.variant === "accent" ? " border-t-4 border-t-secondary" : "")
                }
              >
                <div
                  className={
                    "w-12 h-1 mb-6 " +
                    (level.variant === "dark" ? "bg-secondary" : "bg-primary")
                  }
                ></div>
                <h3
                  className={
                    "font-headline-md text-headline-md mb-2 " +
                    (level.variant === "dark" ? "text-white" : "text-primary")
                  }
                >
                  {level.title}
                </h3>
                <span className="text-secondary font-label-md block mb-6">
                  {level.age}
                </span>
                <ul
                  className={
                    "space-y-4 font-body-md " +
                    (level.variant === "dark"
                      ? "text-surface-container-high"
                      : "text-on-surface-variant")
                  }
                >
                  {level.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-12 text-center uppercase">
          Eğitimlerimizden Kareler
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="col-span-2 row-span-2 overflow-hidden"
          >
            <img
              alt="Archery Focus"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/ok-2.webp"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="overflow-hidden"
          >
            <img
              alt="Archery Targets"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/ok-1.webp"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="overflow-hidden"
          >
            <img
              alt="Equipment Close-up"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/ok-4.webp"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
            className="col-span-2 overflow-hidden"
          >
            <img
              alt="Group Training"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/ok-3.webp"
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="px-6 md:px-16 max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 uppercase">
            Okçuluk'un Çocuklara Faydaları
          </h2>
          <p className="font-body-md text-primary-fixed-dim max-w-2xl mx-auto">
            Sadece fiziksel bir aktivite değil, zihinsel ve ruhsal bir dönüşüm
            yolculuğu.
          </p>
        </motion.div>
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "hourglass_empty",
              title: "Sabır",
              desc: "Doğru anı beklemek ve duygusal kontrolü sağlamak başarının anahtarıdır.",
            },
            {
              icon: "track_changes",
              title: "Odaklanma",
              desc: "Dış etkenlerden arınarak tek bir hedefe kilitlenme becerisi kazandırır.",
            },
            {
              icon: "self_improvement",
              title: "Zihinsel Güç",
              desc: "Stres altında karar verebilme ve öz disiplini en üst düzeye çıkarır.",
            },
            {
              icon: "fitness_center",
              title: "Kas Gelişimi",
              desc: "Sırt, omuz ve kol kaslarını dengeli ve güçlü bir şekilde geliştirir.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="material-symbols-outlined text-white text-4xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md mb-2">
                {item.title}
              </h4>
              <p className="font-caption text-primary-fixed-dim text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          <span className="material-symbols-outlined text-secondary text-6xl mb-6">
            format_quote
          </span>
          <blockquote className="text-center max-w-3xl">
            <p className="font-headline-md text-headline-md text-primary italic leading-relaxed mb-8">
              &ldquo;Okçuluk eğitimine başlayan bir çocuğun, yayı her gerişinde
              özgüveninin arttığını ve her isabetli atışında disiplinin
              meyvelerini topladığını görmek bizim en büyük gururumuz. Burada
              sadece hedefi vurmayı değil, hayata karşı dik durmayı
              öğretiyoruz.&rdquo;
            </p>
            <cite className="not-italic block">
              <span className="font-label-md text-secondary block uppercase tracking-widest">
                Master Kenan Yıldız
              </span>
              <span className="font-caption text-on-surface-variant">
                Baş Okçuluk Antrenörü
              </span>
            </cite>
          </blockquote>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#1b2b5e 2px, transparent 2px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto text-center"
        >
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-6 uppercase">
            Hedefe Odaklanmaya Hazır Mısın?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Ailemize katılın ve çocuğunuzun içindeki şampiyonu birlikte
            keşfedelim.
          </p>
          <a href="/#contact" className="px-12 py-5 bg-secondary text-white font-bold font-label-md uppercase shadow-2xl hover:brightness-110 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 w-fit mx-auto">
            Kayıt Formunu Doldur
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
