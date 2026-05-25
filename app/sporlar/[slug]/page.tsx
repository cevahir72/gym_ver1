"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";

interface SportData {
  id: string;
  name: string;
  title: string;
  description: string;
  heroImage: string;
  shortDescription: string;
  aboutTitle: string;
  aboutText: string[];
  aboutImage: string;
  levels: {
    id: number;
    name: string;
    ageRange: string;
    features: string[];
  }[];
  gallery: {
    id: number;
    image: string;
    caption: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
}

const sportsData: Record<string, SportData> = {
  cimnastik: {
    id: "cimnastik",
    name: "Cimnastik",
    title: "Profesyonel Cimnastik Eğitimi",
    description:
      "Çocukların fiziksel ve zihinsel gelişimini en üst düzeye çıkaran cimnastik programımızla; esneklik, güç, denge ve özgüveni bir araya getiriyoruz.",
    heroImage:
      "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
    shortDescription:
      "Tüm spor branşlarının temeli olarak kabul edilen cimnastik, çocuğunuzun motor becerilerini geliştirmesine yardımcı olurken disiplin ve kararlılık duygularını pekiştirir.",
    aboutTitle: "Geleceğin Temeli Burada Atılıyor",
    aboutText: [
      "Cimnastik, tüm spor branşlarının temeli olarak kabul edilir. Elite Junior Sports Center bünyesinde sunduğumuz cimnastik programı, çocuğunuzun motor becerilerini geliştirmesine yardımcı olurken disiplin ve kararlılık duygularını pekiştirir.",
      "Müfredatımız, 0-3 yaş 'Baby Gym' seanslarından başlayarak, performans gruplarına kadar uzanan geniş bir yelpazeyi kapsar. Her yaş grubuna özel olarak tasarlanmış çalışma programları ve pedagojik yaklaşımımızla fark yaratıyoruz.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Baby Gym",
        ageRange: "0 - 3 YAŞ",
        features: [
          "Ebeveyn katılımlı oyun odaklı gelişim",
          "Temel denge ve koordinasyon",
          "Sosyalleşme ve duyusal aktivite",
        ],
      },
      {
        id: 2,
        name: "Temel Cimnastik",
        ageRange: "4 - 7 YAŞ",
        features: [
          "Esneklik ve temel teknik hareketler",
          "Vücut disiplini ve postür gelişimi",
          "Haftalık düzenli takip çizelgesi",
        ],
      },
      {
        id: 3,
        name: "Performans Grubu",
        ageRange: "8+ YAŞ",
        features: [
          "İleri seviye akrobatik teknikler",
          "Yarışma odaklı kondisyon antrenmanı",
          "Bölgesel ve ulusal müsabaka hazırlığı",
        ],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Modern Antrenman Alanı",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Eğitim Sırasında",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Kondisyon Çalışması",
      },
    ],
    ctaTitle: "İlk Adımı Atın",
    ctaDescription:
      "Çocuğunuzun sporla büyümesi ve sağlıklı bir geleceğe adım atması için bugün bize katılın.",
  },
  yuzme: {
    id: "yuzme",
    name: "Yüzme",
    title: "Profesyonel Yüzme Eğitimi",
    description: "Su ortamında güvenli ve eğlenceli öğrenme deneyimi.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    shortDescription:
      "Yüzme, çocuğun fiziksel ve kişisel gelişiminde önemli rol oynayan, güvenli ve eğlenceli bir spor branşıdır.",
    aboutTitle: "Suda Güvenle Büyüyün",
    aboutText: [
      "Yüzme, tüm yaş gruplarına uygun en sağlıklı spor aktivitesidir. Modern havuzu ve uzman eğitmenleriyle çocuğunuzun su ortamında rahat ve güvenli olmasını sağlarız.",
      "Temel yüzme tekniklerinden profesyonel seviyeye kadar geniş bir eğitim yelpazesi sunuyoruz. Her yaşa uygun sınıflar ve kişisel antrenmanlar mevcuttur.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Su Alışkanlığı",
        ageRange: "1 - 3 YAŞ",
        features: ["Ebeveyn ile su tanışma", "Temel güvenlik eğitimi", "Su korkusunun giderilmesi"],
      },
      {
        id: 2,
        name: "Temel Yüzme",
        ageRange: "4 - 7 YAŞ",
        features: ["Serbest stil ve sırt çekmesi", "Suya dalan gelişimi", "Dayanıklılık eğitimi"],
      },
      {
        id: 3,
        name: "İleri Yüzme",
        ageRange: "8+ YAŞ",
        features: ["Tüm yüzme stilleri", "Yarışma hazırlığı", "İleri teknikler"],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Modern Havuz Tesisleri",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Kişisel Yüzme Dersleri",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Grup Antrenmanları",
      },
    ],
    ctaTitle: "Su Sporlarında Başarılı Olun",
    ctaDescription: "Çocuğunuz yüzmek öğrensin ve su ortamında özgüvenli olsun.",
  },
  futbol: {
    id: "futbol",
    name: "Futbol",
    title: "Profesyonel Futbol Eğitimi",
    description: "Takım ruhunu geliştirerek beceri kazanın.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    shortDescription:
      "Futbol, en popüler spor branşlarından biri olup, çocukların takım ruhu ve liderlik becerilerini geliştirmesine yardımcı olur.",
    aboutTitle: "Takım Ruhu ve Başarı",
    aboutText: [
      "Futbol, dünya çapında milyonlarca çocuğun sevdiği ve oynadığı bir spordur. Biz, çocuğunuzun futbolda başarılı olmasının yanı sıra, takım çalışması ve disiplin değerlerini öğretiyoruz.",
      "Profesyonel antrenörleriyle başlangıçtan profesyonel seviyeye kadar futbol eğitimi sunuyoruz. Çocuğunuzun teknik becerilerini, taktiksel anlayışını ve fiziksel kondisyonunu geliştirebilir.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Mini Futbol",
        ageRange: "4 - 6 YAŞ",
        features: ["Oyun temelli öğrenme", "Temel çalımlar", "Küçük sahada antrenmanlar"],
      },
      {
        id: 2,
        name: "Temel Futbol",
        ageRange: "7 - 10 YAŞ",
        features: ["Teknik beceri geliştirme", "Taktiksel oyun anlayışı", "Grup antrenmanları"],
      },
      {
        id: 3,
        name: "Futbol Akademisi",
        ageRange: "11+ YAŞ",
        features: ["Profesyonel teknik", "Yarışmalı futbol", "Kariyer yolu"],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Profesyonel Futbol Sahaları",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Grup Maçları ve Turnuvalar",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Kondisyon ve Teknik Çalışması",
      },
    ],
    ctaTitle: "Futbol Yolculuğuna Başlayın",
    ctaDescription: "Çocuğunuz futbolda yeteneklerini keşfetsin ve geliştirebilsin.",
  },
  tenis: {
    id: "tenis",
    name: "Tenis",
    title: "Profesyonel Tenis Eğitimi",
    description: "Koordinasyon ve konsantrasyonu geliştirin.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    shortDescription:
      "Tenis, bireysel spor olmakla birlikte, çocuğun konsantrasyonu ve disiplinini geliştirmede çok etkili bir branştır.",
    aboutTitle: "Tenis ile Başarıya Gittin",
    aboutText: [
      "Tenis, zihinsel ve fiziksel beceriler gerektiren bir spordur. Biz, çocuğunuzun teknik, strateji ve kondisyonunu en yüksek seviyeye çıkarıyoruz.",
      "Modern tenis kortlarımızda ve profesyonel antrenörlerin gözetiminde çocuğunuz tenis oynamayı öğrenebilir ve geliştirebilir.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Tenis Temelleri",
        ageRange: "4 - 6 YAŞ",
        features: ["Raket tutuşu ve hareket", "Temel vuruşlar", "Havada koordinasyon"],
      },
      {
        id: 2,
        name: "Temel Tenis",
        ageRange: "7 - 10 YAŞ",
        features: ["Servis ve temel vuruş teknikleri", "Sahada konumlandırma", "Maç oynamaya hazırlık"],
      },
      {
        id: 3,
        name: "İleri Tenis",
        ageRange: "11+ YAŞ",
        features: ["Profesyonel teknikler", "Turnuva hazırlığı", "Kariyer planlaması"],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Profesyonel Tenis Kortları",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Bireysel Tenis Dersleri",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Turnuva Antrenmanları",
      },
    ],
    ctaTitle: "Tenis Sporuna Başlayın",
    ctaDescription: "Çocuğunuzun tenis becerilerini geliştirmek için bugün kayıt olun.",
  },
  karate: {
    id: "karate",
    name: "Karate",
    title: "Profesyonel Karate Eğitimi",
    description: "Disiplin, kendini savunma ve özgüven kazanın.",
    heroImage:
      "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
    shortDescription:
      "Karate, fiziksel gelişimin yanı sıra, çocuğun disiplin ve özgüvenini geliştiren bir sanat formudur.",
    aboutTitle: "Disiplin Yolunda Yolculuk",
    aboutText: [
      "Karate, sadece bir spor değil, aynı zamanda bir yaşam felsefesidir. Biz, çocuğunuzun hem fiziksel hem de zihinsel gelişiminde rehberlik ediyoruz.",
      "Karate eğitimi yoluyla çocuğunuz disiplin, kendini savunma, özgüven ve saygı değerlerini öğrenebilir.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Karate Temelleri",
        ageRange: "3 - 5 YAŞ",
        features: ["Temel hareketler", "Disiplin eğitimi", "Hareket koordinasyonu"],
      },
      {
        id: 2,
        name: "Temel Karate",
        ageRange: "6 - 10 YAŞ",
        features: ["Teknik harekeler", "Kata antrenmanı", "Kemer sınav hazırlığı"],
      },
      {
        id: 3,
        name: "İleri Karate",
        ageRange: "11+ YAŞ",
        features: ["İleri teknikler", "Kumite (sparring)", "Yarışma hazırlığı"],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Karate Dojo",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Kata Antrenmanları",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Kumite (Sparring) Dersleri",
      },
    ],
    ctaTitle: "Karate Yolculuğuna Başlayın",
    ctaDescription: "Çocuğunuz disiplin ve kendine güven kazansın.",
  },
  bale: {
    id: "bale",
    name: "Bale",
    title: "Profesyonel Bale Eğitimi",
    description: "Sanat ve hareketin mükemmel birleşimi.",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    shortDescription:
      "Bale, çocuğunuzun yaratıcılığını, estetik beğenisini ve fiziksel koordinasyonunu geliştiren bir sanat biçimidir.",
    aboutTitle: "Sanat İçinde Büyümek",
    aboutText: [
      "Bale, klasik sanatın en zarif biçimlerinden biridir. Biz, çocuğunuzun bale aracılığıyla kendini ifade etmesini, güven kazanmasını ve sanatın güzelliğini keşfetmesini sağlıyoruz.",
      "Profesyonel bale eğitmenlerimiz, çocuğunuzun temel bale hareketlerinden ileri seviyelere kadar adım adım yönlendirecek.",
    ],
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
    levels: [
      {
        id: 1,
        name: "Bale Temelleri",
        ageRange: "3 - 5 YAŞ",
        features: ["Temel hareket", "Müzikle uyum", "Grup performansı"],
      },
      {
        id: 2,
        name: "Klasik Bale",
        ageRange: "6 - 10 YAŞ",
        features: ["Bale teknikleri", "Pos antrenmanı", "Solo performanslar"],
      },
      {
        id: 3,
        name: "İleri Bale",
        ageRange: "11+ YAŞ",
        features: ["Profesyonel teknikler", "Sahne performansı", "Kariyer gelişimi"],
      },
    ],
    gallery: [
      {
        id: 1,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAoCDBKvGd7qixmwsty3omlmzsKZ_HeBWGtZc-pAC2XETnAAd3fX3TnvWtZ7dD3ASp2SylaAyIjQ5W3cnGSVvyRLIgoWLiZNODImaChp5VZI5Xt0PfyRJXajg60DbOz3WgWGO1LV5FrvIoMnMyHQ4aVuqieLbHJtx6w7aHaAQsAfv1iBq5E5fmRB2L4fUbcDaMahiyLi4wjnXAOLjrbWSm3bauHronNBa4gHt73WR7uBD1ivnD4GS6TLPFfvW7bTbspLffUWIjweCOX",
        caption: "Bale Stüdyosu",
      },
      {
        id: 2,
        image:
          "https://lh3.googleusercontent.com/aida/ADBb0uhhA_bVfONkKC1l7agAasoH82DQ28_NHQYHGTD21F7vYV2ol2Xx0Xb7jMpW39CeQAwBKwEgTzFKCH4HfZQdju_K-4kT60vUM-ZXi3o9xA1AILY4nSEkhN1YRXqRc0dU-YirvIssfeAWIavvRYWDNLkjiwKB1HQkah4dRacNyzhEoNrhGd0bCR1FfLDuh8XIxcUwUDfkvra0NPgYoFOP_9y3RP1QsM8V9XeKg3KX2V95WSzkJacnJ8NAOd1Y",
        caption: "Bale Antrenmanları",
      },
      {
        id: 3,
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuA9-mHJmAj1ohXTuoY-t89JKbtPQFFsMBDLhocPRY6CbKq9cjWyRm5QPf_38_JGZjqs6yIDbCYlH9mRJHmM0Alye4jy7otTr3E4p89LhC0n0vYDG8JKYZdOI7fat0hiV6HgWgRSNdPkn6vlJxGmTMcEb9LtcVd3H-VcHXQs_NTL--cDUHG3JhGCY2mK9cxfUCc9osRXUwyd8oeNshau4mipgvymVs1zX_1II287mmvr3GdpS3BHmtKSfuW_oHzUUmGmzENYjL4Qlwo_",
        caption: "Sahne Performansları",
      },
    ],
    ctaTitle: "Bale Sanatına Başlayın",
    ctaDescription: "Çocuğunuz sanat ve hareketin güzelliğini keşfetsin.",
  },
};

export default function SportDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const sport = slug ? sportsData[slug] : null;

  if (!sport) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-headline-lg text-primary mb-4">Spor Branşı Bulunamadı</h1>
          <Link href="/sporlar" className="text-secondary-container hover:underline">
            Sporlar sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt={`${sport.name} Hero`}
              className="w-full h-full object-cover brightness-[0.4]"
              src={sport.heroImage}
            />
          </div>
          <div className="relative z-10 container mx-auto px-6 md:px-16 reveal">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 bg-secondary-container text-on-primary font-label-md text-label-md mb-6 uppercase tracking-widest">
                Profesyonel Branş
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary leading-tight mb-6">
                {sport.title}
              </h1>
              <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-xl">
                {sport.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="bg-secondary-container text-on-primary px-8 py-4 font-headline-md text-headline-md font-bold hover:bg-secondary transition-all flex items-center justify-center gap-2">
                  <span>Hemen Ücretsiz Deneme Dersi Alın</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-secondary-container"></div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-surface-container-lowest">
          <div className="container mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                  {sport.aboutTitle}
                </h2>
                <div className="w-20 h-1.5 bg-secondary-container mb-8"></div>
                {sport.aboutText.map((text, index) => (
                  <p key={index} className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                    {text}
                  </p>
                ))}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-4 bg-surface-container border-l-4 border-primary">
                    <span className="material-symbols-outlined text-secondary-container mb-2">fitness_center</span>
                    <h4 className="font-label-md text-label-md text-primary">Uzman Antrenörler</h4>
                  </div>
                  <div className="p-4 bg-surface-container border-l-4 border-primary">
                    <span className="material-symbols-outlined text-secondary-container mb-2">
                      health_and_safety
                    </span>
                    <h4 className="font-label-md text-label-md text-primary">Güvenli Ortam</h4>
                  </div>
                </div>
              </div>
              <div className="relative reveal delay-200">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary-container z-0"></div>
                <img
                  alt={`${sport.name} Hall`}
                  className="relative z-10 w-full rounded shadow-xl"
                  src={sport.aboutImage}
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Levels Section */}
        <section className="py-16 md:py-24 bg-primary text-on-primary overflow-hidden relative">
          <div className="container mx-auto px-6 md:px-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4">Eğitim Seviyelerimiz</h2>
              <p className="font-body-md opacity-80">Her yaştan sporcu adayına uygun, bilimsel yöntemlerle hazırlanmış branş sınıflarımız.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sport.levels.map((level) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: level.id * 0.1 }}
                  className="reveal bg-white p-8 border-t-4 border-secondary-container group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-primary-container font-headline-md text-headline-md mb-4 group-hover:text-secondary-container transition-colors">
                    {level.name}
                  </div>
                  <div className="text-on-surface-variant font-label-md text-label-md mb-6 uppercase">
                    {level.ageRange}
                  </div>
                  <ul className="space-y-4 mb-8 text-on-surface-variant font-body-md">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-secondary-container text-sm mt-1">
                          check_circle
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 border border-primary text-primary font-bold uppercase hover:bg-primary hover:text-white transition-colors cursor-pointer">
                    Bilgi Al
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-16">
            <div className="flex justify-between items-end mb-16 reveal">
              <div>
                <h2 className="font-headline-lg text-headline-lg text-primary">Salonumuzdan Kareler</h2>
                <p className="font-body-md text-on-surface-variant mt-2">Enerji, başarı ve disiplin dolu anlar.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sport.gallery.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: item.id * 0.1 }}
                  className="reveal group overflow-hidden relative h-64 rounded"
                >
                  <img
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-label-md">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-surface-container-low">
          <div className="container mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-primary text-on-primary p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 max-w-xl">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-6">
                  {sport.ctaTitle}
                </h2>
                <p className="font-body-lg opacity-80">{sport.ctaDescription}</p>
              </div>
              <div className="relative z-10 w-full md:w-auto">
                <a href="/#contact" className="w-full bg-secondary-container text-on-primary px-8 py-4 font-headline-md font-bold uppercase tracking-widest hover:bg-secondary transition-all shadow-lg inline-block text-center">
                  Ücretsiz Deneme Dersi Alın
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
