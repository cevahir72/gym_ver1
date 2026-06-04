"use client";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <div>
          <div className="font-headline-md text-headline-md text-on-primary mb-6">
            Cool Kids Sport Center
          </div>
          <p className="text-white/80 opacity-80 font-body-md max-w-xs mb-6">
            Türkiye'nin en modern altyapısına sahip çocuk spor merkezi. Disiplin,
            spor ve eğlence tek çatı altında.
          </p>
        </div>
        <div>
          <h4 className="font-label-md text-label-md uppercase mb-8 text-secondary-fixed">
            Hızlı Menü
          </h4>
          <ul className="space-y-4">
            <li><a className="text-white/80 opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all font-body-md" href="/privacy">Gizlilik Politikası</a></li>
            <li><a className="text-white/80 opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all font-body-md" href="/terms">Kullanım Koşulları</a></li>
            {/* <li><a className="text-white/80 opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all font-body-md" href="#">FAQ</a></li> */}
            {/* <li><a className="text-white/80 opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-all font-body-md" href="#">Careers</a></li> */}
          </ul>
        </div>
        <div>
          <h4 className="font-label-md text-label-md uppercase mb-8 text-secondary-fixed">
            İletişim
          </h4>
          <p className="text-white/80 opacity-80 font-body-md mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-sm">location_on</span>
            Yeni Bağlıca Mah. Etimesgut Blv. No:28/5 Etimesgut / ANKARA
          </p>
          <p className="text-white/80 opacity-80 font-body-md mb-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-sm">phone</span>
            0501 007 60 70
          </p>
          <p className="text-white/80 opacity-80 font-body-md flex items-center gap-3">
            <span className="material-symbols-outlined text-sm">mail</span>
            info@coolkidssportcenter.com
          </p>
          <a
            href="https://www.instagram.com/coolkidssportscenter/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 opacity-80 font-body-md flex items-center gap-3 hover:opacity-100 hover:text-secondary-fixed transition-all mt-4"
          >
            <span className="material-symbols-outlined text-sm">photo_camera</span>
            @coolkidssportscenter
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-6">
        <p className="text-white/60 opacity-60 font-caption text-caption">
          &copy; 2024 Cool Kids Sport Center. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
