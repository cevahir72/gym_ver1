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

export default function TaekwondoPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[870px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMH0F_vSMoPv7kqYZtc4lvtRmHUoV24GfyGTPb-FlP2pSHgDITV9ScAw4UqZzITCldMTpksMrmWT1yudGLZyuR7eZfvS-9P8gfz6eCgXnhvXB6b6F-8B8n1PbX05xj9OezhGcYBP1aKuiTqlJ-6l6s4wD_T1WgxHZAFqvzaJEmJBvbcx4H-CwnCxKUapSw15Fs1cOE6u8RsEHC7b6t6KTqPFQFvLCvk-fALNFpZH0v_iFgoDytbuHara31HtP9S-ZD0m7UoIS2priz"
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
              COOL KIDS SPORT CENTER
            </span>
            <h1 className="font-display-lg text-display-lg mb-6 leading-tight">
              Taekwondo: Disiplin ve Saygı Temelli Eğitim
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90 max-w-xl">
              Çocuklarımızın fiziksel güçlerini keşfettikleri, özgüvenlerini
              tazeledikleri ve kadim sporun öğretileriyle karakterlerini
              şekillendirdikleri bir yolculuğa davetlisiniz.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="px-8 py-4 bg-secondary-container text-white font-bold font-label-md uppercase shadow-lg hover:brightness-110 transition-all active:scale-95 inline-block">
                Ücetsiz Deneme Dersine Kaydol
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
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
              Geleceğin Şampiyonlarını Yetiştiriyoruz
            </h2>
            <div className="space-y-4 font-body-md text-on-surface-variant">
              <p>
                Taekwondo sadece bir dövüş sanatı değil, çocukların zihinsel ve
                bedensel gelişimini destekleyen kapsamlı bir hayat felsefesidir.
                Elite Junior Sports bünyesinde, her öğrencimizin bireysel
                sınırlarını tanımasını ve bunları aşma cesaretini kazanmasını
                sağlıyoruz.
              </p>
              <p>
                Eğitimlerimizde odak noktası; rakibe üstünlük kurmaktan ziyade,
                kendine hakim olma, stres yönetimi ve sarsılmaz bir disiplin
                anlayışı geliştirmektir.
              </p>
              <div className="flex items-center gap-4 mt-8 p-4 bg-surface-container-low border-l-4 border-secondary">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  shield
                </span>
                <span className="font-label-md text-primary uppercase">
                  Modern ve Güvenli Antrenman Sahası
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
              className="relative shadow-xl w-full aspect-video object-cover"
              src="/taek-3.webp"
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
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4 uppercase tracking-tight">
              Eğitim Seviyelerimiz
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
              Çocuğunuzun yaş grubuna ve fiziksel kapasitesine uygun olarak
              tasarlanmış müfredatımızla tanışın.
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
                title: "Minik Kaplanlar",
                age: "4-6 Yaş Grubu",
                features: [
                  "Motor Gelişimi ve Koordinasyon",
                  "Temel Esneklik ve Denge",
                  "Oyunla Karışık Disiplin Eğitimi",
                ],
                variant: "light",
              },
              {
                title: "Gelişim Grubu",
                age: "7-12 Yaş Grubu",
                features: [
                  "İleri Teknik Vuruşlar",
                  "Poomsae (Form) Çalışmaları",
                  "Özsavunma ve Karakter Gelişimi",
                ],
                variant: "accent",
              },
              {
                title: "Performans Takımı",
                age: "Lisanslı Sporcular",
                features: [
                  "Müsabaka Stratejileri",
                  "Milli Takım Hazırlık Süreçleri",
                  "İleri Kondisyon ve Patlayıcı Güç",
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
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">
          Eğitimlerimizden Kareler
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="col-span-2 row-span-2 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/taek-1.webp"
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
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/taek-2.webp"
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
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/taek-4.webp"
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
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              src="/taekwondo-2.webp"
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
          <h2 className="font-headline-lg text-headline-lg mb-4">
            Taekwondo'nun Çocuklara Faydaları
          </h2>
          <p className="font-body-md text-primary-fixed-dim max-w-2xl mx-auto">
            Sadece fiziksel değil, zihinsel bir dönüşüm için Taekwondo'nun
            gücünü keşfedin.
          </p>
        </motion.div>
        <div className="px-6 md:px-16 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "psychology",
              title: "Özgüven",
              desc: "Kendini savunma yeteneği ve başarı duygusuyla artan içsel güven.",
            },
            {
              icon: "center_focus_strong",
              title: "Odaklanma",
              desc: "Karmaşık teknikler ve disiplin sayesinde artan okul başarısı.",
            },
            {
              icon: "fitness_center",
              title: "Fiziksel Güç",
              desc: "Esneklik, denge ve tüm vücut kaslarının dengeli gelişimi.",
            },
            {
              icon: "handshake",
              title: "Saygı",
              desc: "Rakibine, hocasına ve kendine duyulan kadim bir saygı anlayışı.",
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
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">
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
          <span className="material-symbols-outlined text-secondary text-5xl mb-6">
            format_quote
          </span>
          <blockquote className="text-center max-w-3xl">
            <p className="font-headline-md text-headline-md text-primary italic leading-relaxed mb-8">
              &ldquo;Taekwondo eğitimine başladığında çekingen olan bir
              çocuğun, birkaç ay içinde dik duruşu, kendinden emin sesi ve
              kararlı bakışlarıyla bir lidere dönüşmesini izlemek paha
              biçilemez. Biz burada sadece kuşak değil, gelecek veriyoruz.&rdquo;
            </p>
            <cite className="not-italic block">
              <span className="font-label-md text-secondary block uppercase">
                Master Ahmet Yılmaz
              </span>
              <span className="font-caption text-on-surface-variant">
                Baş Antrenör, 5. Dan Siyah Kuşak
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
          <h2 className="font-display-lg text-display-lg text-primary mb-6">
            İlk Kuşağını Almaya Hazır Mısın?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl mx-auto">
            Ailemize katılın ve çocuğunuzun içindeki potansiyeli birlikte açığa
            çıkaralım.
          </p>
          <a href="/#contact" className="px-12 py-5 bg-secondary text-white font-bold font-label-md uppercase shadow-2xl hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 w-fit mx-auto">
            Kayıt Formunu Doldur
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </motion.div>
      </section>
    </div>
  );
}
