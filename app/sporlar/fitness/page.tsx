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

export default function FitnessPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJmRd1BKV-JeqjzMEK3K-F2Hm-CxKmgn5w8Y-DWkIdW9ltmbAWGIwmkaM5QNvrtsaKT0TeBwFuranx_3Qtce8HEIuIYKESWJu1AMaLz5TLTEmqlfxkzVnumtkyBxrHkrVKJGktp61uaW28zVvScs694pVQ5hSVvrp9byHCtoTK-YtWbHbkG73lCTVVoi22e9waBvYs7aWVw7FO6QOd7hI5vUfvbEyT7a6XKj-F8KH_KcLHwXvBwcoifGmZXXtZbDAUQz6glCNJ5ZTB"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary-container text-white px-4 py-1 font-label-md text-label-md uppercase tracking-widest mb-6">
              Premium Fitness
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 uppercase">
              Potansiyelini{" "}
              <br />
              <span className="text-secondary-fixed">Yeniden Keşfet</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant mb-8 max-w-lg">
              Elite Junior Sports bünyesinde yetişkinlere özel tasarlanan,
              profesyonel antrenör desteği ve modern ekipmanlarla hedeflerinize
              ulaşın.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="bg-secondary-container hover:bg-secondary text-white px-8 py-4 font-bold uppercase text-label-md transition-all shadow-lg active:scale-95 inline-block">
                Ücretsiz Deneme Seansı
              </a>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 font-bold uppercase text-label-md transition-all active:scale-95 cursor-pointer">
                Programları İncele
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Coaching & Programs */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-4">
            Kişiye Özel Programlar
          </h2>
          <div className="w-20 h-1 bg-secondary-container mx-auto"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: "fitness_center",
              title: "Birebir Özel Ders (PT)",
              desc: "Size özel hedefler doğrultusunda hazırlanan antrenman programı ile maksimum verim ve profesyonel takip.",
              features: ["Postür Analizi", "Kişisel Takip Sistemi", "Esnek Saat Aralığı"],
              link: "Detaylı Bilgi",
              accent: false,
            },
            {
              icon: "groups",
              title: "Grup Dersleri",
              desc: "Yüksek enerjili topluluk dersleri ile motivasyonunuzu zirvede tutun. Pilates, CrossFit ve HIIT seansları.",
              features: ["Dinamik Atmosfer", "Uzman Eğitmenler", "Seviye Grupları"],
              link: "Ders Programı",
              accent: true,
            },
            {
              icon: "restaurant",
              title: "Beslenme Danışmanlığı",
              desc: "Antrenmanlarınızı doğru beslenme ile destekleyin. Uzman diyetisyenlerimizle sürdürülebilir yaşam tarzı.",
              features: ["Vücut Analizi (InBody)", "Kişisel Menü Planlama", "Performans Takibi"],
              link: "Hemen Başla",
              accent: false,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className={
                "bg-surface-container-lowest border border-outline-variant p-8 hover:shadow-xl transition-shadow group" +
                (item.accent ? " border-t-4 border-t-secondary-container" : "")
              }
            >
              <div className="w-14 h-14 bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                {item.desc}
              </p>
              <ul className="space-y-3 mb-8 text-on-surface-variant font-body-md">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">
                      check_circle
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className="text-primary font-bold uppercase text-label-md flex items-center gap-2 group-hover:gap-4 transition-all cursor-pointer"
                href="#"
              >
                {item.link}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Facility Gallery (Bento Grid) */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          >
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-2">
                Tesisimiz
              </h2>
              <p className="text-on-surface-variant font-body-md max-w-lg">
                En son teknoloji ekipmanlar ve ferah çalışma alanları ile
                profesyonel bir deneyim sunuyoruz.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="col-span-4 md:col-span-2 row-span-2 relative overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiqHOj2IBdISejsfwjubXhNM8ZnPrQaO7K8M4omdSqfTZS07HXt3AvD4AuDYkWNJpjWdNh0QxNY19syJDAwmY4TJm2mh_ep_RKhqdnoPNaJesiebWOgMbhNzRH0sPpdv2kbNlhfYFh1nWCxzJmnV_ETniM21UhEUryDhqj8jhH96Q1V9W5zBMRSaocglxyzDvyHlSGYRhSvb5lIfT81ijHaxRlQuro5GJ8MO-T3QCGjyGN3em_UsIhKCnVfE-VoFQAVS3zc3jzod34"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="col-span-2 md:col-span-2 relative overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI7EljlKwkAACtd-yScIJ0XNKNBEW9diB1ev1rIhm5ZteupHH3Uz5nRj2XunEj9YWXsjzYb1g9megcjxKhuEYblmmy6I75MhyhxUossMmgaBTZOYRDGwghaATfYWGQufU-mSNIWpffiC5JYCyES6zq0iwCfR550LDu3wCBgBSGz5dRB7MBK7Cs6ZvzOFJK-k8AuwDBS1VZoB8LUNXJFKCRuVceFxb4SQAr3NgCTHFbqXwwIFETsGqQXtYjEQyAy8UfNmVgqWb6EOgF"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="col-span-2 md:col-span-1 relative overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeH8lpXgIR3pt_UB-lbA7FRvwUhSbqqZjPgmajqdT639jOBGXEXK1KOc653SmvsQq72CaIi1t2tEySh59DHts4173gCfORNvC_HKWjy3dpVKRQxuXXYxYoeX4xsdx_ovu0q51_sBqSXoOWulTq9YyIcpLGhKP6KYM4L5MQ7xNX0_D5jYBBRsTP8GxOPK4wvNRjPDRsbQCiGkglbaNVvx38wL8gDvX8A1usSAXiE1NklUXdhdox_Wlpj-7zFVagApMdiLlN_kXEBZ5O"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              className="col-span-2 md:col-span-1 relative overflow-hidden group"
            >
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcyl-GrYQgHZy78mhW9HncKZC4eaJFxN0Hd6XSI9kA59txnks4laYV481JZ3ykYQCTrpyeqbc1BNZoH228l5iH_9dDO-ULfsLtP_gT9mQelTfxYm7E8hzc1oU3mDPAKP0wbtukLsw1mjqONzzhNFAB4oXxQI8K7x0x_WVE3QFAYz2afDgx5LVpoJ8RNgNzYiMcxl8lWaiHEUnPT74vdongATtMcy7Zv3mslNGWp8JiYWYVthSS3q-OAHOP1O68CwIin05n7_ICO60b"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for Adults */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="order-2 lg:order-1 grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: "psychology",
                title: "Stres Yönetimi",
                desc: "Yoğun iş temposuna sporun enerjisiyle ara verin.",
                border: "secondary",
              },
              {
                icon: "bolt",
                title: "Fiziksel Güç",
                desc: "Dayanıklılığınızı ve fonksiyonel gücünüzü artırın.",
                border: "primary",
              },
              {
                icon: "favorite",
                title: "Uzun Ömür",
                desc: "Sağlıklı bir gelecek için bilinçli yatırım yapın.",
                border: "primary",
              },
              {
                icon: "diversity_3",
                title: "Topluluk",
                desc: "Ortak hedefleri olan elit bir çevreyle sosyalleşin.",
                border: "secondary",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className={
                  "bg-surface-container p-8 text-center border-b-4 transition-transform hover:-translate-y-2 " +
                  (item.border === "secondary"
                    ? "border-b-secondary"
                    : "border-b-primary")
                }
              >
                <span className="material-symbols-outlined text-4xl text-primary mb-4">
                  {item.icon}
                </span>
                <h4 className="font-headline-md text-headline-md text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-caption text-on-surface-variant">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="order-1 lg:order-2"
          >
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary uppercase mb-6 leading-tight">
              Yetişkinler İçin{" "}
              <br />
              <span className="text-secondary">Bütünsel Sağlık</span> Yaklaşımı
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Spor sadece fiziksel bir aktivite değil, bir yaşam disiplinidir.
              Elite Junior Sports olarak, yetişkinlerin değişen fizyolojik ve
              psikolojik ihtiyaçlarına uygun programlar geliştiriyoruz.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-outline-variant hover:border-secondary transition-colors">
                <div className="bg-secondary-container text-white p-2 shrink-0">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">Esnek Programlar</h5>
                  <p className="text-body-md text-on-surface-variant">
                    Sabah 06:00'dan akşam 22:00'ye kadar kesintisiz hizmet.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-outline-variant hover:border-secondary transition-colors">
                <div className="bg-secondary-container text-white p-2 shrink-0">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <div>
                  <h5 className="font-bold text-primary">Veriye Dayalı Gelişim</h5>
                  <p className="text-body-md text-on-surface-variant">
                    Periyodik ölçümlerle ilerlemenizi şeffaf şekilde takip
                    edin.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coach Insight */}
      <section className="relative py-16 md:py-24 bg-primary text-white overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
          <img
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWwXEdug-zZfecqaSmWPWwOCGLa_lwDXAtO25tS4EOgvuetPs_JKTBlVtfpDrHV6wNj0n0gRhk2w9jcq83gN6P4TC4wle83sdxjGTG2s32pIMUSzvtR-iASV8IO_-jGMjqtwt3xcKPDg4GNF84D1e8sdM2Ukm3Y_ncwDXUgaePUnjx8Uq38sdluwpXYbaUWEsDBu6YZu2hR-0OHUhIyhyEnlE14Mr5W8s02Ylm9QfTbnmiet3W-PeshdGjLisUhrbgytUg-htIt0F1"
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="px-6 md:px-16 max-w-7xl mx-auto relative z-10"
        >
          <div className="max-w-3xl">
            <span className="material-symbols-outlined text-secondary-fixed text-6xl mb-6">
              format_quote
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 italic leading-relaxed">
              &ldquo;Antrenman sadece salona gitmek değildir; o, her gün
              kendinizi daha iyi bir versiyona dönüştürme sözüdür. Tutarlılık,
              yetenekten her zaman üstündür.&rdquo;
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary-fixed">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIUnNn8bJBMTF0F2u31_pe0FcLXJq28xfBQg1dafEUMl1099QbyAy1LcXb6svaoIh_VWvBBjQhFLxdJ04E6A5hvTMDlk1bNJwSTHtevBBpsBup3eNc2Tg5QUjFDpYNASll-pBfNoIy5qQFONRIse4WJt2OFAdI0AwqPt7sh10rdpojPOPBFZQ-IZSIuGyWQ6GySdSVPayg0lsV1rzZ41FFr1Q5JuPUU3S8Not-DOgDvcJmMlaj4DaNCIM1Ybab1G9so1AroS0nNwtL"
                />
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-secondary-fixed">
                  Sinan Demir
                </p>
                <p className="font-label-md text-label-md uppercase opacity-80">
                  Master Antrenör &amp; Fitness Direktörü
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 text-center px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="max-w-3xl mx-auto bg-surface-container-low p-12 border-2 border-outline-variant relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-white px-8 py-2 font-bold uppercase tracking-widest text-label-md">
            Sınırlı Kontenjan
          </div>
          <h3 className="font-display-lg text-headline-lg text-primary uppercase mb-6">
            Yolculuğun Bugün Başlasın
          </h3>
          <p className="text-body-lg text-on-surface-variant mb-10">
            Kişisel hedeflerinize ulaşmak için ilk adımı atın. Ücretsiz
            danışmanlık seansı için formu doldurun veya bizi arayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="bg-primary text-white px-10 py-4 font-bold uppercase text-label-md transition-all active:scale-95 shadow-lg inline-block">
              Danışmanlık Randevusu Al
            </a>
              <a href="/#contact" className="bg-secondary-container text-white px-10 py-4 font-bold uppercase text-label-md transition-all active:scale-95 shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined">call</span> 0501 007 60 70
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
