import Link from "next/link";

export default function AerobikCimnastikPage() {
  return (
    <main className="pt-[72px]">
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-primary py-24 text-on-primary">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="grid h-full grid-cols-6">
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div className="border-r border-white" />
            <div />
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-16">
          <div className="max-w-3xl">
            <span className="mb-6 inline-block bg-secondary-container px-4 py-1 font-label-md text-label-md uppercase tracking-widest text-on-primary">
              Profesyonel Branş
            </span>
            <h1 className="mb-6 font-display-lg text-display-lg-mobile leading-tight text-on-primary md:text-display-lg">
              Aerobik Cimnastik
            </h1>
            <p className="mb-10 max-w-xl font-body-lg text-body-lg text-white/90">
              Aerobik Cimnastik; müzik eşliğinde güç, esneklik, denge,
              koordinasyon ve ritim becerilerini geliştiren dinamik bir spor
              branşıdır.
            </p>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 bg-secondary-container px-8 py-4 font-headline-md text-headline-md font-bold text-on-primary transition-all hover:bg-secondary sm:inline-flex"
            >
              <span>Hemen Ücretsiz Deneme Dersi Alın</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-2 w-1/3 bg-secondary-container" />
      </section>

      <section className="bg-surface-container-lowest py-20">
        <div className="container mx-auto px-4 md:px-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
              Aerobik Cimnastik
            </h2>
            <div className="mb-8 h-1.5 w-20 bg-secondary-container" />
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Cool Kids Spor Kulübü olarak çocuklarımızın fiziksel gelişimini,
              özgüvenini ve disiplinini destekliyor; profesyonel eğitimlerle
              geleceğin başarılı sporcularını yetiştiriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-20">
        <div className="container mx-auto px-4 md:px-16">
          <div className="mx-auto max-w-3xl bg-primary p-10 text-center shadow-2xl md:p-16">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-on-primary">
              Çocuğunuzun Potansiyelini Keşfedin
            </h2>
            <p className="mb-8 font-body-md text-on-primary/80">
              Aerobik Cimnastik eğitimimiz hakkında bilgi alın ve ücretsiz
              deneme dersi için bize ulaşın.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container px-8 py-4 font-headline-md font-bold text-on-primary transition-all hover:bg-secondary"
            >
              <span>Ücretsiz Deneme Dersi İçin Kayıt Ol</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
