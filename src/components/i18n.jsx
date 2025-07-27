import i18n from "i18next";
import { initReactI18next } from "react-i18next";


const resources = {
  en: {
    translation: {
      allproducts:"All products →",
      individual:"For individuals",
      recomend:"Recommended products",
      sms:"And receive a link to the E-policy via SMS",
      osgo:"Apply for CMTPL online",
      h1:"Liability insurance",
      takaful:"Takaful",
      support:"Support",
      title: "More...",
      description: "Hello",
      getpolicy:"Get an E-policy",
      shop: "Shop",
      example: "Apple",
      h: "Home",
    },
  },
  uz: {
    translation: {
      allproducts:"Barcha mahsulotlar →",
      individual:"Shaxsiy shaxslarga",
      recomend:"Tavsiya etilgan mahsulotlar",
      sms:"Va E-polis havolasini SMS orqali oling",
      osgo:"OSGO VTS ni onlayn rasmiylashtiring",
      h1:"Mas’uliyatni sug‘urtalash",
      takaful:"Takaful",
      support:"Yordam",
      title: "Batafsil",
      description: "Salom",
      getpolicy:" E-polisni rasmiylashtirish",
      shop: "Dokon",
      example: "Olma",
      h: "Asosiy",
    },
  },
  ru: {
    translation: {
      allproducts:"Все продукты →",
      individual:"Частным лицам",
      recomend:"Рекомендуемые продукты",
      sms:"И получите ссылку на E-polis по смс",
      osgo:"Оформите ОСГО ВТС онлайн",
      h1:"Страхование ответственности",
      takaful:"Такафул",
      support:"Поддержка",
      title: "Подробнее",
      description: "Salom",
      getpolicy:"Оформить E-polis",
      shop: "Dokon",
      example: "Olma",
      h:'Основной'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;