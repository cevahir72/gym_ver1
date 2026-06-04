"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroOverlayStyle = {
  background:
    "linear-gradient(rgba(2, 21, 73, 0.7), rgba(2, 21, 73, 0.9))",
};

export default function HakkimizdaPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <header className="relative h-[80vh] flex items-center pt-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC0PuS_MjVV2iZvtIzIiaoCmPlX7IFInAO20UdTQ2CE5Z6exk8yx3apa8TCdmYEP_jwK5lUkdwkv32f1Gmid5oN1qNfekyVc9JPmwEkG9hQ84sXRbqbsnBYzRF1QbSK9S6re4tbrJZ8MC6yVM_7Ob4KFxNGgXmXy2mbt8Vq3ILH5pUn9X_ZQNXP3vpVhtyEYuilRxGV9yKOeZmKACOzUs5pkDJqFPVSj5cw24aqsYNDc0jl9NJRol0BO8apj7pdilmeWIUsbXsIoiW')",
          }}
        ></div>
        <div className="absolute inset-0" style={heroOverlayStyle}></div>
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6 leading-tight">
              Geleceğin Şampiyonlarını Yetiştiriyoruz
            </h1>
            <p className="font-body-lg text-body-lg mb-8 opacity-90 border-l-4 border-secondary-container pl-6">
              Bağlıca'nın kalbinde, çocuklarınızın potansiyelini keşfetmeleri
              ve sağlıklı bir geleceğe adım atmaları için profesyonel spor
              eğitimi sunuyoruz.
            </p>
            <div className="flex gap-4">
              <a href="/#contact" className="bg-secondary-container hover:bg-secondary text-white px-8 py-4 rounded font-headline-md transition-all active:scale-95 cursor-pointer inline-block">
                BAŞLA
              </a>
              <Link href="/sporlar" className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded font-headline-md transition-all active:scale-95 cursor-pointer inline-block">
                KEŞFET
              </Link>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Our Story & Mission */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-6">
              Hikayemiz &amp; Misyonumuz
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p className="font-body-md text-body-md">
                COOL KIDS SPORT CENTER olarak, sporun sadece fiziksel bir
                aktivite değil, bir yaşam disiplini olduğuna inanıyoruz.
                Misyonumuz, her çocuğun içindeki yeteneği güvenli ve eğlenceli
                bir ortamda profesyonel rehberlikle ortaya çıkarmaktır.
              </p>
              <p className="font-body-md text-body-md">
                Sağlık, disiplin ve eğlenceyi bir araya getiren eğitim
                modellerimizle, çocuklarımızın sadece iyi birer sporcu değil,
                aynı zamanda özgüvenli bireyler olarak yetişmelerini sağlıyoruz.
                Bağlıca'daki modern tesislerimizde sporun her branşında
                uzmanlığımızı paylaşıyoruz.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-xl overflow-hidden border-4 border-white shadow-xl">
              <img
                alt="Kids training"
                className="w-full h-full object-cover"
                src="/baby-1.webp"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] rounded-xl overflow-hidden border-4 border-white shadow-2xl">
              <img
                alt="Gym floor"
                className="w-full h-full object-cover"
                src="/cimnastik-1 (1).webp"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
              Değerlerimiz
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-3"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              {
                icon: "security",
                title: "Güvenlik",
                desc: "Çocuklarınızın güvenliği bizim için her şeyden önce gelir. Uluslararası standartlarda tesisler.",
              },
              {
                icon: "stars",
                title: "Profesyonellik",
                desc: "Alanında uzman, milli sporcu kökenli eğitmenler ve modern antrenman metodolojileri.",
              },
              {
                icon: "mood",
                title: "Eğlence",
                desc: "Sporu sevdirmenin yolu eğlenceden geçer. Çocuklarımızın her dersten mutlu ayrılması önceliğimiz.",
              },
              {
                icon: "trending_up",
                title: "Gelişim",
                desc: "Sadece fiziksel değil, mental ve sosyal becerilerin gelişimini destekliyoruz.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-surface-container-lowest p-8 text-center hover:-translate-y-2 transition-all duration-300 border border-outline-variant rounded-xl"
              >
                <div className="w-16 h-16 bg-surface-container mx-auto rounded-full flex items-center justify-center text-secondary mb-6">
                  <span className="material-symbols-outlined text-4xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-container z-0 opacity-10">
          <img
            alt="Facility background"
            className="w-full h-full object-cover opacity-20 grayscale"
            src="https://lh3.googleusercontent.com/aida/ADBb0ugbq8VWA7CazfDo5S13nmVAuuTV77yMGVb7ZoznQSymabviOOUE9ZU6drcJNji80Z-XaEEm5nhkKrEUY6Pr6DsAr-dvQJcfuR3vlHkqt_e6hwu-XJa4zqXX0eOtjQZyRWz3aTzQJ4DKDd5Y5PAuJvkyFpfl0ZBLoI5D-d5jRhcZ5STcuKg3V8p1MgJDWruM-E-RKgxwIERInAa2-4vRCep7WlVGvOvYMqGjo997NXAELhyJeju0ov994AE"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <img
              alt="Modern Indoor Gym"
              className="rounded-xl shadow-2xl border-4 border-white"
              src="/cimnastik-1.webp"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
          >
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase mb-6">
              Neden Biz?
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-md text-primary text-headline-md">
                    Bağlıca'nın En Modern Tesisi
                  </h4>
                  <p className="text-on-surface-variant">
                    Yüksek tavanlı, ferah ve profesyonel ekipmanlarla
                    donatılmış geniş spor salonları.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-md text-primary text-headline-md">
                    Bilimsel Yaklaşım
                  </h4>
                  <p className="text-on-surface-variant">
                    Yaş gruplarına özel olarak tasarlanmış motorik gelişim ve
                    branş eğitim programları.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">
                  check_circle
                </span>
                <div>
                  <h4 className="font-label-md text-primary text-headline-md">
                    Aile Katılımı &amp; Takip
                  </h4>
                  <p className="text-on-surface-variant">
                    Düzenli gelişim raporları ve ailelerin sürece dahil
                    edildiği etkinlikler.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary uppercase">
              Eğitmen Kadromuz
            </h2>
            <p className="text-on-surface-variant mt-3">
              Sektörün en deneyimli ve vizyoner eğitmenleriyle tanışın
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-8 justify-items-center"
          >
            {/* Coach 1 */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col md:flex-row gap-6 bg-surface-container-lowest p-4 border border-outline-variant rounded-xl w-full"
            >
              <div className="w-full md:w-48 h-64 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover"
                  src="/antrenor.webp"
                />
              </div>
              <div className="flex-1 p-3">
                <span className="text-secondary font-label-md uppercase tracking-wider">
                  Milli Takım Antrenörü
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  Gültekin GÜLEÇ
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  Cimnastik ve Motorik Gelişim Uzmanı. 15 yıllık profesyonel
                  sporculuk ve eğitmenlik kariyeri.
                </p>
                <div className="flex gap-3">
                  <span className="bg-surface-container px-3 py-1 rounded text-caption font-bold">
                    CİMNASTİK
                  </span>
                  <span className="bg-surface-container px-3 py-1 rounded text-caption font-bold">
                    KOORDİNASYON
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
