import React, { useRef, useContext } from 'react'
import style from "../My-Clints/My-Clints.module.css" 
import { motion, useInView } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف


const boxVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

export default function MyClints() {
  const { isArabic } = useContext(LanguageContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const data = [
    { percent: "20%", color: "#000000B2" },
    { percent: "40%", color: "#000000B2" },
    { percent: "50%", color: "#000000B2" },
    { percent: "62%", color: "#000000B2" },
  ];

  // النصوص بالعربي والإنجليزي
  const texts = {
    title: isArabic ? "قوتنا فى عملائنا" : "Our Strength is in Our Clients",
    paragraph: isArabic
      ? `تكمن القوة الحقيقية لشركة Traffic Digital فى عدد عملائنا وتنوع
        المجالات لدينا العديد من المشاريع المختلفة لعدد من العملاء المختلفين
        لديك عدد المشروعات التى قامت بها شركة Traffic Digital فى الاونة الاخيرة`
      : `The real strength of Traffic Digital lies in the number of our clients and the diversity of fields.
        We have many different projects for various clients.
        Here is the number of projects Traffic Digital has completed recently.`,
    cardTitle: isArabic
      ? "تصميم هوية ومواقع وتطبيقات"
      : "Branding, Websites & Applications Design",
    cardDesc: isArabic
      ? `على مدار أكثر من 10 سنوات تم التعاقد مع 1356 مشروع منهم أكثر من
        17% تصميم هوية ومواقع الكترونية وتطبيقات الهاتف`
      : `Over more than 10 years, we contracted with 1356 projects, of which over
        17% are branding, websites, and mobile app designs.`,
  };

  return (
    <>
      <section ref={ref} className="py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl leading-relaxed" dir={isArabic ? undefined : "ltr"}>{texts.title}</h3>
        </div>
        <p dir={isArabic ? undefined : "ltr"} className="mb-10 max-w-[1000px] mx-auto text-gray-700 text-base leading-loose mt-6">
          {texts.paragraph}
        </p>

        <div className="flex justify-between flex-wrap gap-4 text-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 lg:w-[23%]"
              custom={index}
              variants={boxVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div
                className="relative w-40 h-40 rounded-full mx-auto mb-4"
                style={{
                  background: `conic-gradient(${item.color} 0% ${item.percent}, #E5E7EB ${item.percent} 100%)`,
                }}
              >
                <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                  <h1 dir={isArabic ? undefined : "ltr"} className="text-4xl font-bold" style={{ color: item.color }}>
                    {item.percent}
                  </h1>
                </div>
              </div>
              <h2 dir={isArabic ? undefined : "ltr"} className="mb-2 font-semibold text-lg">{texts.cardTitle}</h2>
              <p dir={isArabic ? undefined : "ltr"} className="text-sm text-gray-700">{texts.cardDesc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
