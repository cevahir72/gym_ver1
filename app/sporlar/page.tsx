"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const sports = [
  {
    title: "Cimnastik",
    desc: "Esneklik, denge ve koordinasyonun temeli. Çocukların fiziksel gelişimini sanatsal bir disiplinle buluşturuyoruz.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzp8NlSsu17JMh7U_kOGLpFJ_N4qXHCQkiNbZIxYyTCa9jecQ3jaglSZzs7Frlf40lWOsc15sisOyvVpXgwJiiKu0SmsqQ3RN9MzGU0xNiteDZa-Hp8FggQVkyowJhvSiUgWfRRDxMLi3gduRjQdu6zMm8rivAu8-0c3DGdPGPaZ-rErb7r2Ee4WbKIylgax5aDeeeQkLPvxLTn9aY_gKPafbbJxtjMviXiL7qt-60tMynjhFvcwiVhlvRxbWhynv-aw3-CEBZqA22",
    popular: true,
    slug: "cimnastik",
  },
  {
    title: "Baby Gym",
    desc: "Miniklerin ilk adımlarını sporla atmasını sağlıyoruz. Ebeveyn katılımlı derslerle motor gelişimi ve eğlence bir arada.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdvOUPdxWm67GxCotL_r4foBHennuWrx8mDg7J6SybAl5QwibEAFAUvOKL3OhWnp-9r39q0Y2U15pVCEYX0WtVWMDt463PDxkrrJ8_VKsSnPsc6b8C7ke89MniaD1FYXoQC8c77XwTWGRBfAo6hi0AfWjka57fJduV0VJb_GAt0Piiy68wu2VhT3SnBD0W53jhpfySbORGh_r2Sga9x4EOtDCZEs_TF22CpvHWDVOotEnKQU8AfAdXIsCLDAst0auBE5yosoo1Px_u",
    popular: false,
    slug: "babygym",
  },
  {
    title: "Çocuk Fitness",
    desc: "Oyun temelli egzersizlerle dayanıklılığı ve hızı artırırken sağlıklı yaşam alışkanlıkları kazandırıyoruz.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw2nzm40gQChKFgDeL4jHWGZyJONGxyLAZZ_w_K61ypmL5l_8aGoXj_Pqn1FmbuoHir6yYMOY3ZXpH_sz7LoUzCRlpQpJYBhL628Qjg0g38L78mH680HINn2kF6orFIa7lrHaqpnHXRGfJQh4eB9vdi6J5YxildaLdxyeXutRpVGA9C-CFmeaxx63cqksw334mlmWPThubGZiHjqeMcQPIMVIKN8dwqmvd8gBtYkYMARmDCmBHvfYNUcOiHyPsNXZsUFtiiva3FWT7",
    popular: false,
    slug: "cfitness",
  },
  {
    title: "Yetişkin Fitness",
    desc: "Sadece çocuklar için değil! Ebeveynler için özel tasarlanmış programlarla formunuzu koruyun ve güçlenin.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmlwxv4rSz0ylnm6u0emfYYtziHg76yTghdcF3qN47bw7NtOf-M07WgTe8wHQhG-8tqcz2RzTwbEfvfY64B421-_QOdm32Fpe4EObWZZUJfv2OqzLCX7zo_zWj15BefMOOD_PjcYI6qOnA6Noq4WND8CuFESu0oNhNCU7UKR11X0Atzc6lmbIDGHxsO_VH4pPnkgS-qOOxmIGCBWtftU_g2YiF-EdhfvmxmBemlijmezr-oLjNIhBMGZKmz6WjS8jkhKF_TJjEN3Ev",
    popular: false,
    slug: "fitness",
  },
  {
    title: "Okçuluk",
    desc: "Odaklanma, disiplin ve sabır. Okçuluk branşımızla zihinsel ve fiziksel kontrolü en üst seviyeye taşıyoruz.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqp4lbCfHmF3lDNpC1k2JuZ4qXVe4R_4leI6BM-p3SpTYsjXKAzZ-rHfq3IPVYqtRF3iN4NNu4GidAO1S9OTlk3egjmBrvsVhQBxzlx3JZLk4yTONq-WWHCax_B7ZWWdc63lvV_QbM6sqevlIE9YXAwzYyiqtnif9ZJBwah-ORpSUxGznA53z4jnFWiV6hT_meSAFoREpZJMQEo8nMloZe5xCLaO9cTeayJIsE7vgE6YRLBCXaat4Wb8B4dFTFE21O-quWtJ_WqUro",
    popular: false,
    slug: "okculuk",
  },
  {
    title: "Taekwondo",
    desc: "Özgüven ve savunma sanatlarını uzman eğitmenlerden öğrenin. Disiplin ve saygı bu yolun ilk kuralı.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCatjyFSz3wUDCtt6WDinqtBqHFwPSNo7jsMRDYA_3Gc_VyhbvPBBOr3iVLGzpKERpHangDboRUfNFKcTiyxx1Q1VHXoK_5_hv3rTRsRKOfdyGqDo0pwZwu7SOSz3NACtJzzxKQC-MvQMMpzf_WoiK5DXfsd7Q21kae31KwU5YevP1kkE4JQk0i7fIi42Nn8cH9pKZA9MdXo2iX0TCoTGN2XNr9FOUKNGon6V9WClJB2r2Fke8Nd2xBIGo5LAVSkTDg7yOhaNx_kXB0",
    popular: false,
    slug: "taekwondo",
  },
];

export default function SporlarPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <header className="relative bg-primary-container overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhYPr_x1nbQYeoFReOdMwoyhcwmAwLr-iOuDf_XWY96IOlZGcoyrrlIndOQh5P2952Y5PTxDGPbrmevphLcOLHLZBamlm59GCHKqjEpYBs7QSTaem260NkVPqBz0t-wbl1tA82pA13H-Y8QhtqB__P22PY7yCMycj2E2eR4Jexz9hh3xsq1KSMnVoewhPSVJMXalEwA9fHJOOAyVFkKUOCHUixRrReV4YYBwCmJA8MaeNkFsJV-6Bs2gFdSKr6UgN6S52kIm7RmGFS"
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-center"
        >
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white uppercase italic tracking-tight mb-3">
            Spor Branşlarımız
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">
            COOL KIDS SPORT CENTER'da her yaşa ve her yeteneğe uygun, profesyonel
            antrenörler eşliğinde hayallerinizi gerçekleştireceğiniz spor
            branşları sizi bekliyor.
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-surface to-transparent"></div>
      </header>

      {/* Program Catalog Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sports.map((sport) => (
            <motion.article
              key={sport.title}
              variants={fadeInUp}
              className="bg-surface-container-lowest border border-outline-variant overflow-hidden flex flex-col group h-full hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={sport.img}
                  alt={sport.title}
                />
                {sport.popular && (
                  <div className="absolute top-4 left-4 bg-secondary-container text-on-primary px-3 py-1 font-label-md text-caption uppercase">
                    En Popüler
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">
                  {sport.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">
                  {sport.desc}
                </p>
                <a
                  className="inline-flex items-center justify-between group/btn bg-primary text-on-primary px-6 py-3 font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-container transition-colors cursor-pointer"
                  href={sport.slug ? `/sporlar/${sport.slug}` : "#"}
                >
                  <span>Detaylı Bilgi</span>
                  <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>

      {/* CTA */}
      <section className="bg-surface-container py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="bg-primary p-16 flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-secondary-container rounded-full opacity-10"></div>
            <div className="relative z-10 text-center lg:text-left">
              <h2 className="font-headline-lg text-headline-lg text-on-primary mb-2">
                Hangi Branş Size Uygun?
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary/80">
                Ücretsiz deneme dersi için hemen randevu alın.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <a href="/#contact" className="bg-secondary-container text-on-primary font-headline-md px-16 py-4 hover:scale-105 transition-transform uppercase tracking-widest inline-block text-center">
                Hemen Başla
              </a>
              <a href="/#contact" className="border-2 border-on-primary text-on-primary font-headline-md px-16 py-4 hover:bg-on-primary/10 transition-all uppercase tracking-widest inline-block text-center">
                Bizi Arayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
