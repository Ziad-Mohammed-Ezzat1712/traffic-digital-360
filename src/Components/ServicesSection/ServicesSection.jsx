import React, { useContext } from "react";
import style from "./ServicesSection.module.css";
import { LanguageContext } from "../../Context/LanguageContext";
import { Link } from "react-router-dom";
import softwaer from "../../../Images/softwaer.png"
import markting from "../../../Images/markting.png"
import production from "../../../Images/production.png"
import serv from "../../../Images/serv.png"
export default function ServicesSection() {
  const { isArabic } = useContext(LanguageContext);

  const texts = {
    sectionTitle: isArabic ? "الخدمات" : "Services",
    sectionDescription: isArabic
      ? "تقدم شركتنا مجموعة متكاملة من الخدمات التي تلبي احتياجات الشركات الحديثة، وتشمل حلول البرمجيات (Software) المصممة خصيصًا لتحسين كفاءة الأعمال وتسهيل العمليات اليومية، بالإضافة إلى خدمات التسويق (Marketing) التي تساعد على تعزيز العلامة التجارية وزيادة الوصول إلى الجمهور المستهدف من خلال استراتيجيات مبتكرة. كما نوفر خدمات الإنتاج (Production) الاحترافية التي تشمل إنتاج المحتوى المرئي والإعلاني بجودة عالية، مما يساهم في تقديم صورة احترافية وجذابة للشركات في السوق."
      : "Our company offers a comprehensive suite of services tailored to the needs of modern businesses, including software solutions designed to enhance efficiency and streamline daily operations, marketing services that boost brand visibility and reach through innovative strategies, and professional production services delivering high-quality visual and promotional content for a strong market presence.",
    readyToWork: isArabic ? "هل أنت مستعد للعمل معنا؟" : "Are You Ready to Work With Us?",
    startNowBtn: isArabic ? "إبدء الأن" : "Start Now",
  };

  const services = [
    {
      title: isArabic ? "سوفت وير" : "Software",
      image: softwaer,
      description: isArabic
        ? "تصميم وبرمجة المواقع الإلكترونية بالتأكيد ترغب في موقع إلكتروني “Website”او تطبيق  “Application” يمثل شركتك وتستطيع من خلاله الإستثمار وتنمية عملك."
        : "We develop custom software solutions to help your business grow and evolve.",
    },
    {
      title: isArabic ? "ماركتينج" : "Marketing",
      image: markting,
      description: isArabic
        ? "نصنع لك حملات تسويقية احترافية تزيد من ظهورك وتحول جمهورك إلى عملاء."
        : "We create professional marketing campaigns to boost your visibility and convert your audience into customers.",
    },
    {
      title: isArabic ? "برودكشن" : "Production",
      image: production,
      description: isArabic
        ? "إنتاج فيديوهات عالية الجودة تسوّق لخدماتك بشكل احترافي وجذاب."
        : "High-quality video production that professionally promotes your services.",
    },
  ];

  return (
    <>
      {/* القسم العلوي */}
      <section className="max-w-full flex flex-col md:flex-row justify-between items-start py-3 gap-x-10 bg-white">
        <div className="md:w-1/2 text-right my-22 mb-6 md:mb-0">
          <h2 dir={isArabic ? "rtl" : "ltr"} className="text-[70px] md:text-[70px] font-bold mb-4">
            {texts.sectionTitle}
          </h2>
          <p dir={isArabic ? "rtl" : "ltr"} className="max-w-lg text-[20px] my-10">
            {texts.sectionDescription}
          </p>
        </div>
        <div className="md:w-1/2 text-left">
          <img src={serv} alt="" />
        </div>
      </section>

      {/* الخدمات */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4 text-center">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white shadow-xl rounded-2xl p-6 hover:bg-[#2a2a2a] hover:text-white transition duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={service.image}
                  className="w-[377px] h-[251px] flex items-center justify-center mb-5 hover:bg-[#2a2a2a] transition"
                  alt={service.title}
                />
                <h3 dir={isArabic ? "rtl" : "ltr"} className="text-[40px] font-medium mb-2">
                  {service.title}
                </h3>
                <p dir={isArabic ? "rtl" : "ltr"} className="text-[20px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-neutral-950 to-neutral-700 my-7 py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between rounded-xl text-center lg:text-left">
        <h2
          dir={isArabic ? "rtl" : "ltr"}
          className="text-white text-3xl md:text-4xl font-bold leading-relaxed lg:flex-none lg:text-left lg:w-auto"
        >
          {texts.readyToWork}
        </h2>
  <Link to='/conectus'>
  <button
          className="font-bold bg-white text-black border border-white rounded-full px-8 py-2 hover:bg-black hover:text-white transition mt-6 lg:mt-0"
          type="button"
        >
          {texts.startNowBtn}
        </button>
        </Link>
        
      </section>
    </>
  );
}
