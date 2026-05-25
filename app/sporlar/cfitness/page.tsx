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

const heroGradientStyle = {
  background:
    "linear-gradient(to right, rgba(2, 21, 73, 0.9) 0%, rgba(2, 21, 73, 0.4) 50%, rgba(2, 21, 73, 0) 100%)",
};

export default function CfitnessPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnwZYtoiBqlFn8YXtksD7UAr3RBVLZWa_apUnN57Xs7o-WW4icZy5Ra8Y0875VPuInX_dlJDnwBzZW1lYF-qiHMZTW1DZKhuhWLISqwodJIlNoIlnCw3ER_eyErLLy3aa4NbosdeZPuURn-g8HTVSche49vpNRIb6AGWZ0pk9W353QCstZD2Ihh5WD_URkcxyEfIE0cylUwJKLGsCefsHtHPc3hzY2TtcI4bUsF0cloYuHQADgXbAak2KtMTzQTE9Vq-r8EeG2fvfF"
          />
          <div className="absolute inset-0" style={heroGradientStyle}></div>
        </div>
        <div className="relative z-10 px-6 md:px-16 max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-block bg-secondary-container text-white px-4 py-1 font-label-md text-label-md uppercase tracking-widest mb-6">
              PREMIUM ÇOCUK AKADEMİSİ
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6 leading-tight">
              Çocuk Fitness: Eğlence ve Sağlık Bir Arada
            </h1>
            <p className="font-body-lg text-body-lg text-white/90 mb-8 max-w-lg">
              Geleceğin şampiyonları için eğlenceli, güvenli ve profesyonel bir
              ortamda fiziksel gelişimi destekliyoruz.
            </p>
            <a href="/#contact" className="bg-secondary-container text-white px-10 py-4 font-headline-md text-headline-md uppercase hover:scale-105 transition-transform active:scale-95 inline-block">
              Ücretsiz Deneme Dersi
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
            Neden Çocuk Fitness?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
            Çocuk fitness programımız, minik sporcuların koordinasyon, güç ve
            esnekliklerini geliştirirken aynı zamanda sağlıklı yaşam
            alışkanlıkları kazanmalarını sağlar. Uzman eğitmenlerimiz eşliğinde
            sunulan bu program, disiplin ve eğlenceyi mükemmel bir dengede
            buluşturur.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Modern ekipmanlar ve çocuklara özel tasarlanmış parkurlarımızla, her
            ders bir macera tadında geçer. Sosyalleşme imkanı bulan çocuklar,
            özgüven kazanarak hayat boyu sürecek bir spor tutkusu edinirler.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="relative aspect-video md:aspect-square rounded overflow-hidden border border-outline-variant shadow-lg"
        >
          <img
            className="w-full h-full object-cover"
            src="/baby-2.webp"
          />
        </motion.div>
      </section>

      {/* Training Groups - Bento Grid */}
      <section className="py-16 md:py-24 bg-surface-container-low px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">
              Eğitim Gruplarımız
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {/* Group 1 */}
            <motion.div
              variants={fadeInUp}
              className="bg-surface-container-lowest p-8 border border-outline-variant hover:shadow-xl transition-shadow group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                child_care
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                4-6 Yaş Grubu (Temeller)
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Oyun yoluyla temel motor beceriler, denge ve esneklik
                çalışmaları ile spora ilk adım.
              </p>
              <ul className="space-y-2 font-label-md text-label-md text-primary">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Koordinasyon Oyunları
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Temel Jimnastik
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Eğlenceli Parkurlar
                </li>
              </ul>
            </motion.div>

            {/* Group 2 */}
            <motion.div
              variants={fadeInUp}
              className="bg-surface-container-lowest p-8 border border-outline-variant hover:shadow-xl transition-shadow group relative scale-105 z-10 shadow-md"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                sports_soccer
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                7-12 Yaş Grubu (Gelişim)
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Teknik becerilerin geliştirilmesi, dayanıklılık ve takım ruhu
                odaklı antrenmanlar.
              </p>
              <ul className="space-y-2 font-label-md text-label-md text-primary">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Kuvvet &amp; Kondisyon
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Hız &amp; Çeviklik
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Grup Yarışmaları
                </li>
              </ul>
            </motion.div>

            {/* Group 3 */}
            <motion.div
              variants={fadeInUp}
              className="bg-surface-container-lowest p-8 border border-outline-variant hover:shadow-xl transition-shadow group relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">
                military_tech
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                Junior Atlet (Performans)
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                İleri düzey atletik gelişim ve müsabakalara yönelik özel
                hazırlık programları.
              </p>
              <ul className="space-y-2 font-label-md text-label-md text-primary">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Kişiselleştirilmiş Program
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Analitik Takip
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Zihinsel Hazırlık
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-8"
        >
          {[
            {
              icon: "fitness_center",
              title: "Fiziksel Gelişim",
              desc: "Kas ve kemik yapısının doğru gelişimi desteklenir.",
            },
            {
              icon: "groups",
              title: "Sosyal Beceriler",
              desc: "Takım çalışması ve arkadaşlık bağları güçlenir.",
            },
            {
              icon: "psychology",
              title: "Özgüven",
              desc: "Başarı duygusu ile kendine olan güveni artar.",
            },
            {
              icon: "favorite",
              title: "Sağlıklı Alışkanlık",
              desc: "Düzenli spor yapma alışkanlığı temelleri atılır.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-6 border border-outline-variant group hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-secondary group-hover:text-white transition-colors text-3xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-2">
                {item.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Gallery Grid — yoruma alındı, sonradan kullanılacak */}
      {/*
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-12"
          >
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-2">
                Eğitimden Kareler
              </h2>
              <p className="font-body-md text-body-md opacity-80">
                Akademimizdeki heyecan dolu anlara göz atın.
              </p>
            </div>
            <button className="font-label-md text-label-md underline hover:text-secondary-container transition-colors cursor-pointer">
              Tümünü Gör
            </button>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-[500px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="col-span-1 row-span-2 overflow-hidden rounded"
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2vjJ8838Kifbi_uktWeZLYsRLL-MKn4RGlvkEM-9aZdsPSGCksJZBNvAWWEKQCADBKjJxdWOBmRZQxgm_5M0plLHyLAPcZf18lmIP3PhKI39HptiLYdtZohmMVZUv92QgU9wv-3TuiP0K0YFKqnly71s2qTsW_y-Toyhn5q3wwGw0xdP9hOFWAPsxEF9UKArqSGRfH9SIM3r04xa9hnphloKAEAZt0A88POSZvNOEXPKMPaw5sMLv5V0_RYh1i3lq7qjTTxjU97g6"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="col-span-1 row-span-1 overflow-hidden rounded"
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPc-iNeSVaZkelvjP1KCAw4mAP9eiHXJi5LF6zmjKCfrerdgyCcFpvN0N1fwZZV-2rV_FL3VIPVtQoAepBaqpCEERBHHwJr_WvFqySjwM--xaE5otcI4RHhzkb62FfHKn7vMfpRBTIBACWKIxmOkNbkWO8yzfB0_gS0n2km44N443HAi5mjVaIsz6kVgpPmK9yFMrBUTUvDs6TomgqndlQ3BNdwKbcxxiW8evDwdoTN3QGh2axMoLEsPS69OrRPGehXK3Op8AtTg0o"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="col-span-2 row-span-1 overflow-hidden rounded"
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiiBiY51GNxOW_zfwjWXaskQOml-I4VRP78Jskt0SGyP9TyqSVlkprFdXAZevoWVQ3v8msHtwtUXazt9n6I9R-OTFxvxwbBRWO7I4Er5O3a2fkP6Pgr09lE-I_BgylAmvNPpE8SR_iViAfzfRQJ7y69GyeG0dHE33wbTyw4TUQEF8Kio7vgARO_qU1tV6iBj7VVmAvqpdLDUluiGNYENRtVWDj3_doaVSxErlnQAu1EKAG8kPt2xRHztAarz_csRB4adhY5rEZL7Ow"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
              className="col-span-1 row-span-1 overflow-hidden rounded"
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI4n5om36ZsCTVFKjEC-4Vf4XGw1CT3CLZaJlTAjQNNuxkFcQHfKg6t0T5budGbXmS_ZMrKxlo_z9L3lYvZG_ciz7iIuRiS7qDJIvzPyRCmDu7bYz_CIlIXEAXf6xWXH4C9I5kQuHL8TYfAr5ssmZWDa0v-J2ZjUvQCbKPPaBL6vqLbYjKTXqMEYlhnv1jQ6MPUwuyM2E7UE9Jm3_x8OaM60n-KgPDFEMoTTGSoPICzSo_ALHKVeuMkxlf8UrvPeP1bcpMXzmuNMb_"
              />
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* Coach Quote — yoruma alındı, sonradan kullanılacak */}
      {/*
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="bg-surface-container-low border border-outline-variant rounded overflow-hidden flex flex-col md:flex-row items-center"
        >
          <div className="w-full md:w-1/3 aspect-[4/5]">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdfIPs4mLLO53JcSBLFB1cVAPOdL8uZ1cmnZvuoyC1xTRbdNLuUcK__U19yzdZSWgVV15ZFrVHrU2bfajn-mktLx6TL2nYORO1MsbBkFUXqzSq5jJ1ZkrOM5Z6-g2na1Nr1cg5-uZtdiH9j2m-w9F_PzmJLrV0doZCJGEagryrhhi7OvQ-Bqb7I4DxEjMSt0C_G6jMOr26WSzHOow1OlOUUxY9e3g8zRN9OvaOw7mCARl_wuq359RSS5sCsUlyGrh0LZ2Bg0usVaDI"
            />
          </div>
          <div className="p-8 md:p-12 w-full md:w-2/3">
            <span className="material-symbols-outlined text-secondary-container text-6xl mb-4 opacity-50">
              format_quote
            </span>
            <p className="font-headline-md text-headline-md text-primary italic mb-8 leading-relaxed">
              &ldquo;Erken yaşta kazanılan spor disiplini, sadece fiziksel sağlık
              değil, hayatın her alanında ihtiyaç duyacakları zihinsel
              dayanıklılığı ve özgüveni inşa eder. Biz burada çocuklara sadece
              egzersiz yapmayı değil, kendilerine inanmayı öğretiyoruz.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-secondary"></div>
              <div>
                <div className="font-bold text-primary">Caner Demir</div>
                <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                  Baş Antrenör, Çocuk Gelişimi Uzmanı
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      */}

      {/* Bottom CTA */}
      <section className="py-16 md:py-24 bg-secondary-container text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
          className="px-6 md:px-16 max-w-2xl mx-auto"
        >
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
            Harekete Geçmeye Hazır Mısın?
          </h2>
          <p className="font-body-lg text-body-lg mb-8 opacity-90">
            Çocuğunuzun sporla dolu geleceğine bugün ilk adımı atın. Sınırlı
            kontenjan için hemen başvurun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-primary text-white px-10 py-4 font-headline-md text-headline-md uppercase hover:scale-105 transition-transform active:scale-95 inline-block">
              Kayıt Formunu Doldur
            </a>
            <a href="/#contact" className="border-2 border-primary text-primary px-10 py-4 font-headline-md text-headline-md uppercase hover:bg-primary/10 transition-colors active:scale-95 inline-block">
              Bizi Arayın
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
