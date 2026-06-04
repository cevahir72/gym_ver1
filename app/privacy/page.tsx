"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PrivacyPage() {
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
              Gizlilik Politikası
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
              Cool Kids Sport Center ("Biz", "Salonumuz" veya "Şirketimiz") olarak, coolkidssportcenter.com ("Web Sitesi") adresini ziyaret eden kullanıcılarımızın, fitness üyelerimizin ve çocuk spor salonu hizmetlerimizden yararlanan küçüklerin (ve onların velilerinin/vasilerinin) gizliliğine ve kişisel verilerinin korunmasına büyük önem veriyoruz.
            </p>
            <p className="font-body-md text-body-md">
              Bu Gizlilik Politikası, web sitemizi kullandığınızda veya hizmetlerimiz için bizimle iletişime geçtiğinizde hangi verileri topladığımızı, bu verileri nasıl kullandığımızı, koruduğumuzu ve haklarınızı açıklamaktadır.
            </p>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">1. Toplanan Kişisel Veriler</h2>
              <p className="font-body-md text-body-md mb-4">Web sitemiz ve hizmetlerimiz aracılığıyla aşağıdaki kategorilerdeki verileri toplayabiliriz:</p>
              <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md">
                <li><strong>İletişim ve Kimlik Bilgileri:</strong> Adınız, soyadınız, e-posta adresiniz, telefon numaranız.</li>
                <li><strong>Velisi/Vasisi Olduğunuz Çocuklara Ait Bilgiler:</strong> Çocuk spor salonu kayıtları, etkinlik başvuruları veya bilgi formları doldurulurken veli onayıyla paylaşılan çocuğun adı, soyadı, yaşı/doğum tarihi ve (varsa) spor yapmasına engel teşkil edebilecek sağlık beyanları.</li>
                <li><strong>Üyelik ve Hesap Bilgileri:</strong> Sitemiz üzerinden üyelik oluşturulması durumunda kullanıcı adı, şifre ve üyelik tercihleri.</li>
                <li><strong>Otomatik Toplanan Teknik Veriler:</strong> Çerezler (cookies) vasıtasıyla toplanan IP adresiniz, tarayıcı türünüz, site içi gezinme verileriniz ve erişim zamanlarınız.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">2. Çocukların Gizliliği (Özel Hassasiyet)</h2>
              <p className="font-body-md text-body-md mb-4">Salonumuz bir "Çocuk Spor Salonu" hizmeti de sunduğundan, çocukların gizliliğini korumak en yüksek önceliğimizdir:</p>
              <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md">
                <li>18 yaşın altındaki bireylerin kişisel verilerini, yalnızca yasal velisinin veya vasisinin açık rızası ve beyanı doğrultusunda topluyoruz.</li>
                <li>Web sitemiz üzerindeki hiçbir form, çocukların doğrudan kendi bilgilerini paylaşması amacıyla tasarlanmamıştır. Tüm kayıt ve bilgi formları veliler tarafından doldurulmalıdır.</li>
                <li>Eğer bir çocuğun velisinin izni olmadan bize kişisel veri ilettiğini fark ederseniz, lütfen derhal bizimle iletişime geçin; bu bilgileri sistemlerimizden kalıcı olarak sileceğiz.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">3. Verilerin Kullanım Amaçları</h2>
              <p className="font-body-md text-body-md mb-4">Topladığımız kişisel veriler aşağıdaki amaçlar doğrultusunda işlenmektedir:</p>
              <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md">
                <li>Fitness ve çocuk spor salonu üyelik işlemlerinizi gerçekleştirmek ve yönetmek,</li>
                <li>Sorularınızı yanıtlamak, randevu taleplerinizi (deneme dersleri vb.) organize etmek,</li>
                <li>Salonumuzdaki ders programları, etkinlikler veya özel duyurular hakkında sizleri bilgilendirmek,</li>
                <li>Web sitemizin performansını artırmak, kullanıcı deneyimini optimize etmek ve güvenliği sağlamak,</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">4. Verilerin Üçüncü Taraflarla Paylaşılması</h2>
              <p className="font-body-md text-body-md mb-4">Kişisel verileriniz, açık rızanız olmaksızın üçüncü şahıslara satılmaz veya kiralanmaz. Ancak, hizmetlerimizi sunabilmek adına verileriniz şu durumlarda paylaşılabilir:</p>
              <ul className="list-disc pl-6 space-y-2 font-body-md text-body-md">
                <li><strong>Hizmet Sağlayıcılar:</strong> Web sitemizin barındırılması (hosting), e-posta gönderimi veya veri analizi gibi teknik süreçleri yürüten güvenilir iş ortaklarımızla (yalnızca gerekli olduğu ölçüde).</li>
                <li><strong>Yasal Zorunluluklar:</strong> Yetkili kamu kurum ve kuruluşları tarafından yasal mevzuat çerçevesinde talep edilmesi durumunda.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">5. Veri Güvenliği</h2>
              <p className="font-body-md text-body-md">Verilerinizin kaybolmasını, kötüye kullanılmasını, yetkisiz erişimi veya değiştirilmesini önlemek amacıyla SSL sertifikaları, güvenli sunucular ve düzenli sistem kontrolleri dahil olmak üzere uygun teknik ve idari güvenlik önlemlerini uyguluyoruz. Özellikle çocuklara ait hassas bilgilerin korunması için erişim kısıtlamaları ve ekstra güvenlik katmanları kullanılmaktadır.</p>
            </div>

            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4 mt-10">6. Çerezler (Cookies)</h2>
              <p className="font-body-md text-body-md">Web sitemiz, ziyaretçilerimizin deneyimini geliştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanmaktadır. Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya çerez gönderildiğinde uyarılmayı seçebilirsiniz. Ancak çerezleri devre dışı bırakmak, sitemizin bazı özelliklerinin düzgün çalışmasını engelleyebilir.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
