"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function TermsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <header className="relative h-[40vh] flex items-center pt-20 overflow-hidden bg-primary">
        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-16 text-white">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg uppercase mb-6 leading-tight">
              Kullanım Koşulları
            </h1>
            <p className="font-body-lg text-body-lg opacity-90 border-l-4 border-secondary-container pl-6">
              Son Güncelleme Tarihi: 04/06/2026
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="space-y-8 text-on-surface-variant"
          >
            <p className="font-body-md text-body-md">
              coolkidssportcenter.com web sitesine ("Site") hoş geldiniz. Bu Site, Cool Kids Sports Center ("Salonumuz", "Biz" veya "İşletme") tarafından işletilmektedir.
            </p>
            <p className="font-body-md text-body-md">
              Sitemizi ziyaret ederek, form doldurarak, deneme dersi veya üyelik başvurusu yaparak, aşağıda belirtilen kullanım şartlarını ("Şartlar") kabul etmiş sayılarsınız. Eğer bu şartların herhangi birini kabul etmiyorsanız, lütfen Siteyi ve sunduğumuz dijital hizmetleri kullanmayı durdurun.
            </p>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">1. Genel Kullanım Koşulları</h2>
              <p className="font-body-md text-body-md mb-4">Sitede yer alan tüm içerikler (metinler, grafikler, logolar, ders programları, görseller ve yazılımlar) Salonumuza aittir ve telif hakkı yasalarıyla korunmaktadır. Yazılı iznimiz olmadan kopyalanamaz veya ticari amaçla kullanılamaz.</p>
              <p className="font-body-md text-body-md">Siteyi yalnızca yasal amaçlarla ve hem yetişkin hem de çocuk fitness hizmetlerimiz hakkında bilgi alma, randevu oluşturma veya üyelik süreçlerini başlatma amacıyla kullanabilirsiniz.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">2. Üyelik, Kayıt ve Yaş Sınırı</h2>
              <p className="font-body-md text-body-md mb-4">Web sitemiz üzerinden randevu, deneme dersi veya üyelik formu doldurmak için en az 18 yaşında olmanız gerekmektedir.</p>
              <p className="font-body-md text-body-md"><strong>Çocuk Spor Salonu Hizmetleri:</strong> 18 yaşın altındaki bireylerin (çocukların) ders kayıtları, üyelik başvuruları veya etkinlik katılım talepleri yalnızca yasal velileri veya vasileri tarafından yapılabilir. Veliler, formlarda verdikleri bilgilerin doğruluğundan bizzat sorumludur.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">3. Sağlık ve Güvenlik Beyanı (Önemli)</h2>
              <p className="font-body-md text-body-md mb-4"><strong>Yetişkin Fitness:</strong> Salonumuzda sunulan fiziksel aktivitelere katılmadan önce, herhangi bir sağlık sorununuz veya spor yapmanıza engel bir durumunuz olmadığından emin olmalı, gerekirse doktorunuza danışmalısınız. Sitedeki içerikler tıbbi tavsiye niteliği taşımaz.</p>
              <p className="font-body-md text-body-md"><strong>Çocuk Spor Salonu:</strong> Veliler, çocuklarının salonumuzdaki fiziksel aktivitelere katılmasına engel teşkil edecek kronik, alerjik veya ortopedik bir rahatsızlığı olup olmadığını kayıt esnasında doğru ve eksiksiz beyan etmekle yükümlüdür. Fiziksel aktivitelerden doğabilecek ve saklanan sağlık durumlarından kaynaklı risklerden salonumuz sorumlu tutulamaz.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">4. Hizmet Değişiklikleri ve İptaller</h2>
              <p className="font-body-md text-body-md mb-4">Salonumuz, Site üzerinden ilan edilen ders programlarını, antrenör kadrosunu, üyelik paket fiyatlarını veya kampanya koşullarını önceden haber vermeksizin değiştirme veya iptal etme hakkını saklı tutar.</p>
              <p className="font-body-md text-body-md">Site üzerinden yapılan ön kayıtlarda veya randevularda, salonun fiziksel doluluk oranına göre değişiklik yapılabilir.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">5. Sorumluluğun Sınırlandırılması</h2>
              <p className="font-body-md text-body-md mb-4">Sitenin kesintisiz, hatasız veya virüslerden arınmış olduğuna dair mutlak bir garanti verilmemektedir. Siteyi kullanımınız sırasında cihazınızda oluşabilecek teknik aksaklıklardan İşletmemiz sorumlu değildir.</p>
              <p className="font-body-md text-body-md">Site üzerinden bağlantı verilen (link) üçüncü taraf web sitelerinin içeriklerinden veya gizlilik politikalarından Salonumuz sorumlu tutulamaz.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">6. Değişiklikler</h2>
              <p className="font-body-md text-body-md">Cool Kids Sport Center, bu Kullanım Şartları'nı dilediği zaman güncelleme hakkına sahiptir. Şartlar güncellendiğinde, "Son Güncelleme Tarihi" değiştirilerek Sitede yayınlanacaktır. Siteyi kullanmaya devam ederek güncel şartları kabul etmiş sayılırsınız.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
