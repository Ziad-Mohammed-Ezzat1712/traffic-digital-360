import React, { useContext } from 'react';
import style from "./OurExperience.module.css";
import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف


export default function OurExperience() {
  const { isArabic } = useContext(LanguageContext);

  const services = [
    {
      title: isArabic ? "خبراء فى SEO" : "SEO Experts",
      description: isArabic
        ? "تحسين محركات البحث حتى تتمكن من الظهور بشكل متكرر للعميل المراد"
        : "Improve search engine ranking so you appear frequently to your target client",
      icon: "fa-magnifying-glass",
    },
    {
      title: isArabic ? "خبراء فى البرمجة" : "Programming Experts",
      description: isArabic
        ? "تصميم و إدارة المواقع و هو مجالنا مع اشطر المهندسين"
        : "Website design and management is our field with the best engineers",
      icon: "fa-solid fa-code",
    },
    {
      title: isArabic ? "نحن دائما معك" : "Always With You",
      description: isArabic
        ? "المتابعة الدائمة التى تمنحك لقب الحاضر الغائب دائما معاك فى وجودنا"
        : "Continuous follow-up that grants you the presence, always with you",
      icon: "fa-solid fa-people-carry-box",
    },
    {
      title: isArabic ? "دقة فى التنفيذ" : "Precision in Execution",
      description: isArabic
        ? "نتقن التفاصيل الصغيرة قبل الكبيرة حتى يخرج من بين ايدينا كل شى لامع"
        : "We master small details before big ones to deliver sparkling results",
      icon: "fa-solid fa-briefcase",
    },
  ];

  return (
    <>
      <section className={` bg-[#2B2929] py-6 px-4 max-w-7xl mx-auto mb-10`}>
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed mb-10" dir={isArabic ? undefined : "ltr"}>
            {isArabic ? "خبرتنا" : "Our Experience"}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed" dir={isArabic ? undefined : "ltr"}>
            {isArabic
              ? "لماذا يجب أن تكون Traffic Digital هي أختيارك الأول ؟​"
              : "Why Should Traffic Digital Be Your First Choice?"}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-6 p-2">
          {services.map((service, index) => (
            <div key={index} className="  w-full sm:w-1/2 md:w-[23%]">
             
                <div className={`${style.color}  bg-white hover:bg-[#1a1a1c47] p-10 rounded-lg shadow-md text-center transition-transform duration-500 transform hover:scale-105 hover:shadow-xl h-full min-h-[320px] flex flex-col justify-between  `}>
                  <div className="text-[#CFC8C8] text-4xl mb-2 hover:text-white">
                    <i className={`fas ${service.icon} icons`}></i>
                  </div>
                  <h2 className="text-black text-2xl font-bold mb-2 hover:text-white" dir={isArabic ? undefined : "ltr"}>
                    {service.title}
                  </h2>
                  <p className="text-gray-500 hover:text-white" dir={isArabic ? undefined : "ltr"}>
                    {service.description}
                  </p>
                </div>
             
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
