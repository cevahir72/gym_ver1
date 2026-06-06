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

export default function BabyGymPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent z-10"></div>
          <img
            alt="Baby Gym Activity"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0ui5hsjDINXj4KX-O_QUwvZIEZHzRqHQleIpbF99wS-smFPsV1LGQdMqYHVcJNT7lu-tRAtFzKunctlSOPA_UX42SO6i2xumpSQoyygxkcFM6K8iQ1B1KsNDeB5EA2tgsYsZKCbe2v0lvbE4S7e2Ir7_-eiSMXDjJCB3ncLzdT-1bjv6zj4aOChlv4uvbOK9AUeQCw7QxBNg7ekEhMir_NGspNbUJDAZjBnJlMTqw6bjm6upoJl8IFO1Z1OK"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-20 px-6 md:px-16 max-w-7xl mx-auto w-full"
        >
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-secondary-container text-white px-3 py-1 text-label-md font-label-md uppercase tracking-wider mb-2">
              COOL KIDS SPORTS CENTER
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
              Baby Gym:<br />Eğlence Dolu İlk Adımlar
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-8 max-w-xl">
              Minik şampiyonlar için motor becerilerini geliştiren, özgüveni
              artıran ve sosyal bağları güçlendiren profesyonel rehberlik
              eşliğinde oyun dolu bir yolculuk.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/#contact" className="bg-secondary-container text-white px-16 py-4 font-bold text-label-md font-label-md uppercase hover:scale-105 transition-transform active:scale-95 inline-block">
                Ücretsiz Deneme Seansı
              </a>
              <button className="border-2 border-white text-white px-16 py-4 font-bold text-label-md font-label-md uppercase hover:bg-white hover:text-primary transition-all active:scale-95 cursor-pointer">
                Ders Programı
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Baby Gym Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                Geleceğin Temellerini Oyunla Atıyoruz
              </h2>
              <div className="h-1 w-20 bg-secondary-container mb-6"></div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                1.5-4 yaş arası dönem, bir çocuğun fiziksel ve bilişsel
                gelişiminin en kritik evresidir. Baby Gym programımız, bu
                değerli yıllarda miniklerin koordinasyon, denge ve motor
                becerilerini maksimum seviyeye çıkarmak için tasarlandı.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Kaba ve ince motor becerilerinin gelişimi
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Denge ve vücut farkındalığı kazanımı
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">
                    check_circle
                  </span>
                  <span className="font-body-md text-on-surface">
                    Yaşıtlarıyla güvenli sosyal etkileşim
                  </span>
                </li>
              </ul>
              <div className="p-6 bg-surface-container border-l-4 border-primary">
                <p className="font-label-md text-label-md text-primary italic">
                  &ldquo;Hareket eden bebek, öğrenen bebektir. Fiziksel aktivite
                  zihinsel gelişimi tetikler.&rdquo;
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/10 -z-10"></div>
              <div className="border border-white shadow-xl overflow-hidden">
                <img
                  alt="Baby Gym Class"
                  className="w-full h-auto"
                  src="/baby-5.webp"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Categories Section */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
              Gelişim Evrelerine Göre Gruplar
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              Her çocuğun gelişimi kendine özeldir. Yaş gruplarına özel
              müfredatımızla en doğru desteği sağlıyoruz.
            </p>
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
                icon: "child_care",
                title: "0-12 Ay: Keşif",
                desc: "Duyusal uyarım, karın üstü zamanı aktiviteleri ve ilk yuvarlanma hareketleri üzerine odaklanan başlangıç seviyesi.",
              },
              {
                icon: "directions_walk",
                title: "1-2 Yaş: Adımlar",
                desc: "Yürüme, tırmanma ve basit engelleri aşma yoluyla denge ve koordinasyonun güçlendirildiği aktif evre.",
              },
              {
                icon: "sports_kabaddi",
                title: "2-3 Yaş: Enerji",
                desc: "Grup oyunları, zıplama ve temel jimnastik hareketleriyle özgüven ve sosyal beceri gelişimi.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="bg-white border border-outline-variant p-8 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mb-6 group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-[32px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center text-primary font-bold gap-1 group-hover:gap-3 transition-all cursor-pointer">
                  <span className="font-label-md text-label-md uppercase">
                    Detayları Gör
                  </span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
          >
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                Nerede Hareket Ediyoruz?
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Hijyen standartlarının en üst seviyede tutulduğu, çocuklar için
                özel olarak tasarlanmış renkli ve güvenli parkurlarımız.
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="md:col-span-8 overflow-hidden"
            >
              <img
                alt="Gym Floor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="/baby-6.webp"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="md:col-span-4 grid grid-rows-2 gap-6"
            >
              <motion.div
                variants={fadeInUp}
                className="overflow-hidden"
              >
                <img
                  alt="Equipment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  src="/baby-3.webp"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-primary flex flex-col justify-center items-center p-8 text-center text-white"
              >
                <span className="material-symbols-outlined text-[48px] mb-6 text-secondary-container">
                  health_and_safety
                </span>
                <h4 className="font-headline-md text-headline-md mb-2">
                  Maksimum Hijyen
                </h4>
                <p className="font-body-md text-body-md opacity-80">
                  Ders aralarında profesyonel ekipman temizliği.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-surface-container">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Velilerimiz Ne Diyor?
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {[
              {
                quote:
                  "Oğlumuzun denge becerileri sadece 3 ayda inanılmaz gelişti. Eğitmenlerin her çocukla birebir, sabırlı ve sevgi dolu ilgilenmesi paha biçilemez.",
                name: "Ayşe Yılmaz",
                title: "Deniz'in Annesi",
              },
              {
                quote:
                  "Buradaki sosyal ortam sayesinde kızım yaşıtlarıyla çok daha rahat iletişim kurmaya başladı. Baby Gym kesinlikle haftalık rutinimizin en sevilen parçası.",
                name: "Murat Aksu",
                title: "Elif'in Babası",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                variants={fadeInUp}
                className="bg-white p-8 relative border border-outline-variant shadow-sm"
              >
                <span className="material-symbols-outlined absolute -top-4 left-6 text-[48px] text-secondary-container bg-white px-2">
                  format_quote
                </span>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 italic pt-4">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest"></div>
                  <div>
                    <h5 className="text-[18px] font-headline-md text-primary">
                      {item.name}
                    </h5>
                    <p className="font-caption text-caption text-on-surface-variant">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="px-6 md:px-16 max-w-4xl mx-auto"
        >
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Minik Şampiyonun Yolculuğu Bugün Başlasın
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim mb-16">
            Ücretsiz tanışma dersimize katılın, farkı yerinde görün.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/#contact" className="bg-secondary-container text-white px-16 py-4 font-bold font-label-md text-label-md uppercase hover:scale-105 transition-transform inline-block">
              Hemen Kayıt Ol
            </a>
            <button className="border-2 border-white text-white px-16 py-4 font-bold font-label-md text-label-md uppercase hover:bg-white hover:text-primary transition-all cursor-pointer">
              Sizi Arayalım
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
