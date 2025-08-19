import React, { useState, useContext } from "react";
import { LanguageContext } from '../../Context/LanguageContext'; 

// استبدل الصور هنا بالصور الفعلية لكل شخص
import manImg1 from "../../../Images/man.png";
import manImg2 from "../../../Images/man2.png";
import manImg3 from "../../../Images/man.png";
import manImg4 from "../../../Images/man2.png";
import manImg5 from "../../../Images/man.png";

export default function TechnicalTeam() {
  const { isArabic } = useContext(LanguageContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // مصفوفة testimonials باللغتين
  const testimonials = [
    {
      name: isArabic ? "أحمد محمد" : "Ahmed Mohamed",
      position: isArabic ? "مدير تسويق" : "Marketing Manager",
      img: manImg1,
      text: isArabic
        ? "يُجرون تحليلاً شاملاً لقطاعنا وجمهورنا المستهدف، مما يُمكّنهم من تطوير حملات مُخصصة تصل إلى عملائنا وتُشركهم بفعالية."
        : "They conduct a thorough analysis of our sector and target audience, enabling them to develop tailored campaigns that effectively reach and engage our customers.",
    },
    {
      name: isArabic ? "سارة علي" : "Sara Ali",
      position: isArabic ? "مصممة جرافيك" : "Graphic Designer",
      img: manImg2,
      text: isArabic
        ? "لقد ساعدتنا أفكارهم الإبداعية وتقنياتهم المتطورة على البقاء في صدارة المنافسة."
        : "Their creative ideas and advanced techniques helped us stay ahead of the competition.",
    },
    {
      name: isArabic ? "خالد يوسف" : "Khaled Youssef",
      position: isArabic ? "مطور برمجيات" : "Software Developer",
      img: manImg3,
      text: isArabic
        ? "عملهم المتواصل والاحترافي يضمن لنا نتائج مبهرة في مشاريعنا التقنية."
        : "Their continuous and professional work ensures outstanding results in our technical projects.",
    },
    {
      name: isArabic ? "منى سعيد" : "Mona Saeed",
      position: isArabic ? "مديرة مشاريع" : "Project Manager",
      img: manImg4,
      text: isArabic
        ? "تنظيمهم الدقيق وتفانيهم في العمل كانا سر نجاح الحملة الأخيرة."
        : "Their meticulous organization and dedication were the key to the success of our latest campaign.",
    },
    {
      name: isArabic ? "محمد حسن" : "Mohamed Hassan",
      position: isArabic ? "رائد أعمال" : "Entrepreneur",
      img: manImg5,
      text: isArabic
        ? "الشراكة معهم كانت من أفضل قراراتنا التجارية خلال العام الماضي."
        : "Partnering with them was one of our best business decisions last year.",
    },
  ];

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto bg-gray-200 rounded-lg">
      <h2
        dir={isArabic ? "rtl" : "ltr"}
        className="text-lg sm:text-xl md:text-2xl text-right py-8 px-4 font-bold mb-8 max-w-4xl mx-auto"
      >
        {testimonials[currentIndex].text}
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
        {/* أزرار التنقل */}
        <div className="flex justify-center items-center gap-4 w-full sm:w-1/3">
          <button
            onClick={goPrev}
            className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition text-base"
          >
            <i className={`fa-solid ${isArabic ? "fa-arrow-right" : "fa-arrow-right"}`}></i>
          </button>
          <p dir={isArabic ? "rtl" : "ltr"} className="text-center text-base">
            {currentIndex + 1} / {testimonials.length}
          </p>
          <button
            onClick={goNext}
            className="border border-black rounded-full px-6 py-2 hover:bg-black hover:text-white transition text-base"
          >
            <i className={`fa-solid ${isArabic ? "fa-arrow-left" : "fa-arrow-left"}`}></i>
          </button>
        </div>

        {/* عرض تفاصيل الشخص والصورة */}
        <div className="flex items-center gap-4 w-full sm:w-2/3 justify-center sm:justify-end">
          <div className={`max-w-[300px] ${isArabic ? "text-right" : "text-left"}`}>
            <h2
              dir={isArabic ? "rtl" : "ltr"}
              className="font-bold text-lg mb-1"
            >
              {testimonials[currentIndex].name}
            </h2>
            <p
              dir={isArabic ? "rtl" : "ltr"}
              className="text-[#878C91] text-sm"
            >
              {testimonials[currentIndex].position}
            </p>
          </div>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={testimonials[currentIndex].img}
              alt={testimonials[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
