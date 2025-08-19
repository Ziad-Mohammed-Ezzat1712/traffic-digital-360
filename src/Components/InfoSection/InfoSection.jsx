  import React, { useContext } from "react";
  import style from "./InfoSection.module.css";
  import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف


  export default function InfoSection() {
    const { isArabic } = useContext(LanguageContext);

    const texts = {
      sections: [
        {
          number: "01",
          title: isArabic ? "من نحن" : "Who We Are",
          paragraph: isArabic
            ? `الجسر المبدع الذي من خلالة ستصل منتجاتك وخدماتك إلى جمهورك على يد
            الكثير من المتخصصين في جميع التخصصات, مهما كان صعوبة مجالك.`
            : `The creative bridge through which your products and services reach your audience
            by many specialists in all fields, no matter how challenging your domain is.`,
          imgSrc: "../images/Data analysis-cuate.png",
          imgAlt: isArabic ? "صورة توضيحية" : "Illustrative Image",
        },
        {
          number: "02",
          title: isArabic ? "ماذا نفعل" : "What We Do",
          paragraph: isArabic
            ? `بموجب التنوع في التخصصات ومواكبة التطور وكل ماهوا جديد في عالم التسويق
            الالكتروني, نحن نقوم بترشيح واختيار الانسب لمجالك مع الاخذ بالاعتبار
            التفهم الجيد لاهداف ونشاط عملائنا وخلق أفكار فريدة من نوعها قابلة للتنفيذ
            الإحترافي من فريقنا المبدع.`
            : `With diversity in specializations and keeping up with all that's new in digital marketing,
            we select the most suitable for your field, considering a deep understanding of
            our clients' goals and activities, creating unique and professionally executable ideas
            from our creative team.`,
          imgSrc: "../images/Online consulting-pana.png",
          imgAlt: isArabic ? "صورة 2" : "Image 2",
        },
        {
          number: "03",
          title: isArabic ? "كيف نفعل ذلك" : "How We Do It",
          paragraph: isArabic
            ? `عن طريق توفير اجواء مناسبة للإبداع داخل مقر الشركة وتوفير الإمكانيات
            لتنفيذ تلك الأفكار الابداعية و الحفاظ علي استمراريتها.`
            : `By providing a suitable creative environment inside the company premises
            and offering the means to implement those creative ideas and maintain their continuity.`,
          imgSrc: "../images/Programmer-pana.png",
          imgAlt: isArabic ? "صورة 3" : "Image 3",
        },
      ],
    };

    return (
      <>
        <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {texts.sections.map(({ number, title, paragraph, imgSrc, imgAlt }) => (
  <React.Fragment key={number}>
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-center">
      <div className="text-start mb-10">
        <span className="text-gray-600 text-8xl font-extrabold mb-4">
          {number}
        </span>
      </div>
      <h2 className="text-4xl mb-10" dir={isArabic ? undefined : "ltr"}>{title}</h2>
      <p className="text-gray-700 leading-relaxed mb-20" dir={isArabic ? undefined : "ltr"}>{paragraph}</p>
    </div>
    <div className="flex items-center justify-center relative">
      <img src={imgSrc} alt={imgAlt} className="w-[90%] h-[90%]" />
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
    </div>
  </React.Fragment>
))}

        </section>
      </>
    );
  }
