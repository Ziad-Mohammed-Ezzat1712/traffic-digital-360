import React, { useContext } from 'react';
import { LanguageContext } from '../../Context/LanguageContext'; // عدل المسار حسب مشروعك
import style from "./WhoAreWe.module.css" 
import MyClints from '../My-Clints/My-Clints'
import InfoSection from '../InfoSection/InfoSection'
import OurExperience from '../OurExperience/OurExperience'
import TechnicalTeam from '../TechnicalTeam/TechnicalTeam';
import MarketingTeam from '../MarketingTeam/MarketingTeam';
import { Link } from 'react-router-dom';

export default function WhoAreWe() {
  const { isArabic, toggleLanguage } = useContext(LanguageContext);

  // نصوص بالعربي و بالإنجليزي
  const texts = {
    title: isArabic ? 'من نحن' : 'Who Are We',
    subtitle: isArabic ? ' يسعدنا ان تتعرف علينا  ' : 'We are happy to introduce ourselves',
    companyTitle: isArabic ? 'من هي شركة Traffic Digital' : 'Who is Traffic Digital',
    points: isArabic ? [
      { icon: "fa-users", text: "قوتنا في عملائنا" },
      
      { icon: "fa-bullhorn", text: "فريقنا " },
    ] : [
      { icon: "fa-users", text: "Our strength is our clients" },
      { icon: "fa-lightbulb", text: "Technical Team" },
      { icon: "fa-bullhorn", text: "Marketing Team" },
    ],
    aboutCompany: isArabic 
      ? `شركتنا نشأت في ظل عصر التكنولوجيا  عام 2025، هذا الذي جعل لها شخصية متفرده قادرة علي مواكبة كل الاحداث و خلق الحلول. مهمتنا هي بناء عالم متكامل لخدمة أعمال عملائنا من خلال إدارة وتصميم وتخطيط حملات إعلامية إبداعية على جميع منصات التواصل الاجتماعي والتأكد من وصولنا إلى رابط بين عملائنا وعملائهم بمساعدة فريق متكامل في كل التخصصات ( التصميم – الكتابة – البرمجة – التصوير – التسويق ) هدف فريقنا الاسمى هو تجسيد الابداع على ارض الواقع و تحقيق الربح منه لعملائنا و لشركتنا نحن نرى ان الانترنت هو ملك الزمن الحالي هدفنا ان نكون حلقة الوصل بين الشركات و عملاءها المحتملين اختيارك لنا يعني ضمان حصولك على على خطة كاملة متكاملة تناسب شركتك و ميزانيتك و تحقق لك اهدافك 

`
      : `Our company was established in the era of technology in 2025, which gave it a unique identity capable of keeping up with all developments and creating innovative solutions.
Our mission is to build an integrated world that serves our clients' businesses by managing, designing, and planning creative media campaigns across all social media platforms — ensuring we establish a strong connection between our clients and their audiences, supported by a fully specialized team in all fields (design, copywriting, programming, photography, marketing).
The ultimate goal of our team is to bring creativity to life and generate profit for both our clients and our company.
We believe that the internet is the ruler of the current era, and our goal is to be the bridge between businesses and their potential customers.
Choosing us means securing a complete, well-rounded plan tailored to your company, your budget, and your goals.`,
    readyText: isArabic ? 'هل أنت مستعد للعمل معنا؟' : 'Are you ready to work with us?',
    startButton: isArabic ? 'ابدأ الأن' : 'Start Now',
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:w-1/2 space-y-9">
          <div className="space-y-9 text-right w-full">
            <h1 dir={isArabic ? undefined : "ltr"} className="text-xl md:text-5xl mb-[20px] font-bold leading-snug">
              {texts.title.split(' ').map((word, i) => 
                word === 'Traffic' ? <span key={i} className="text-blue-600">{word}</span> : word + ' '
              )}
            </h1>
            <p dir={isArabic ? undefined : "ltr"} className="text-xl text-gray-600 w-full leading-loose">{texts.subtitle}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-lg max-w-[290px] w-full">
            <h1 dir={isArabic ? undefined : "ltr"} className="text-xl text-right font-bold mb-4">{texts.companyTitle}</h1>

            {texts.points.map((point, i) => (
              <div key={i} className="flex items-center gap-3 my-3">
                <i className={`fa-solid ${point.icon} text-black text-2xl`}></i>
                <span dir={isArabic ? undefined : "ltr"} className="font-semibold text-base">{point.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-80 max-w-md">
         
          <img
            src="../images/who are we.png"
            alt="team-work"
            className="absolute top-[-60px] right-0 "
          />
        </div>
      </section>

      <section className=" py-16 px-4 max-w-7xl mx-auto text-center">
        <div className="text-center mb-10">
          <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl md:text-4xl font-bold leading-relaxed">{texts.companyTitle}</h2>
        </div>
        
        <p dir={isArabic ? undefined : "ltr"} className="max-w-[1155px]  mx-auto text-[#878C91] text-start leading-loose mt-6">
          {texts.aboutCompany}
        </p>
      </section>

      <MyClints />
      <InfoSection />
      <OurExperience />

      

     
      <MarketingTeam />

      <section className={`text-white bg-gradient-to-br from-neutral-950 to-neutral-700 my-7 py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between rounded-xl text-center lg:text-left`}>
        <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl md:text-4xl font-bold leading-relaxed lg:flex-none lg:text-left lg:w-auto">
          {texts.readyText}
        </h2>

   <Link to='/conectus' >      <button
          className="font-bold bg-white text-black border  rounded-full px-8 py-2 hover:bg-black hover:text-white transition mt-6 lg:mt-0"
          type="button"
         
        >
          {texts.startButton}
        </button></Link>
      </section>
    </>
  );
}
