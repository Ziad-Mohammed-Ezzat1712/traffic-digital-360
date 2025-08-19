import React, { useRef, useState, useContext } from 'react'
import photoImg from "../../../Images/par.png";
import marketingImg from "../../../Images/Dd.png";
import whatsappImg from "../../../Images/coulms.png"
import slide1 from  "../../../Images/1.png";
import slide2 from "../../../Images/2.png";
import slide3 from "../../../Images/3.png";
import MainSlider from '../MainSlider/MainSlider'
import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف

import { Link } from 'react-router-dom';
import TechnicalTeam from '../TechnicalTeam/TechnicalTeam';

export default function Home() {
  const { isArabic } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState(0); // نبدأ بالسؤال الأول مفتوح

  // كل النصوص ثنائية اللغة جاهزة هنا
  const texts = {

    // أضفها داخل كائن texts اللي عندك

card1Title: isArabic ? "تعظيم عائد الاستثمار مع خبرة وكالة التسويق الرقمي" : "Maximizing ROI with Digital Marketing Agency Expertise",
card1Desc: isArabic
  ? "ما يميز هذه الوكالة للتسويق الرقمي هو التزامها بالشفافية والتعاون. فهي تُبقينا على اطلاع دائم بكل خطوة."
  : "What distinguishes this digital marketing agency is its commitment to transparency and collaboration. They keep us informed every step of the way.",

card2Title: isArabic ? "أحدث الاتجاهات والاستراتيجيات مع وكالة التسويق الرقمي" : "Latest Trends and Strategies with Digital Marketing Agency",
card2Desc: isArabic
  ? "كان العمل مع هذه الوكالة للتسويق الرقمي شراكة حقيقية. لقد خصصوا وقتًا لفهم أعمالنا وصناعتنا."
  : "Working with this digital marketing agency was a true partnership. They took the time to understand our business and industry.",

card3Title: isArabic ? "كيف يمكن لوكالة التسويق الرقمي تحسين عملك؟" : "How Can a Digital Marketing Agency Improve Your Business?",
card3Desc: isArabic
  ? "نحن وكالة التسويق الرقمي الرائدة في مجال بناء العلامات التجارية للشركات. نقدم مجموعة متكاملة من حلول التسويق الرقمي."
  : "We are a leading digital marketing agency in building brand identity for companies. We offer a comprehensive set of digital marketing solutions.",

marketingServicesTitle: isArabic
  ? "خدمات التسويق الرقمي وتحسين محركات البحث التي تزيد من عدد الزوار وتزيد الإيرادات"
  : "Digital Marketing and SEO Services That Increase Visitors and Boost Revenue",

marketingServicesParagraph: isArabic
  ? "نحن وكالة التسويق الرقمي الرائدة لشركات العلامات التجارية. نقدم مجموعة متكاملة من الخدمات لمساعدة عملائنا على تحسين ترتيبهم في محركات البحث وزيادة عدد الزيارات إلى مواقعهم الإلكترونية."
  : "We are the leading digital marketing agency for brand companies. We offer a comprehensive set of services to help our clients improve their search engine rankings and increase website traffic.",

readMoreBtn: isArabic ? "المزيد" : "More",
readingTimeText: isArabic ? "5 دقائق للقراءة" : "5 min read",

    // سيبسش
    heroTitle: isArabic ? "خبراء في مجال التسويق الالكتروني" : "Experts in Digital Marketing",
    heroParagraph: isArabic
      ? `يُعد التسويق الإلكتروني منظومة متكاملة تشمل العديد من الوسائل الفعّالة مثل: منصات التواصل الاجتماعي، والمواقع الإلكترونية المتطورة، والإعلانات المطبوعة والتلفزيونية، بالإضافة إلى الحملات الإذاعية والفعاليات والمعارض. تبرز "Traffic Digital" كخبيرة رائدة في هذا المجال، حيث تمتلك قاعدة معرفية متينة وخبرة عملية واسعة في جميع جوانب التسويق الرقمي. يعتمد نجاحنا على تراكم سنوات من الخبرة الميدانية، والمهارات المتقنة، والدقة في التنفيذ، مما يمكننا من تقديم حلول تسويقية شاملة تجمع كل هذه الخدمات تحت مظلة واحدة، لضمان تحقيق أهدافك بكل كفاءة واحترافية.`
      : `Digital marketing is a comprehensive system that includes many effective means such as social media platforms, advanced websites, print and TV ads, in addition to radio campaigns, events, and exhibitions. "Traffic Digital" stands out as a leading expert in this field, possessing solid knowledge base and extensive practical experience in all aspects of digital marketing. Our success relies on years of field experience, mastered skills, and precise execution, enabling us to provide comprehensive marketing solutions that gather all these services under one umbrella to ensure achieving your goals efficiently and professionally.`,
    readMore: isArabic ? "قراءة المزيد" : "Read More",
    scheduleCall: isArabic ? "تحديد موعد للمكالمة" : "Schedule a Call",
    companiesCountText: isArabic ? "بعض الشركات الكبيرة التي نعمل معها، ونثق بنا كثيرًا" : "Some big companies we work with and trust us a lot",
    startJourneyTitle: isArabic ? "ابدأ رحلتك نحو التسويق الالكتروني اليوم:" : "Start Your Digital Marketing Journey Today:",
    startJourneySubtitle: isArabic ? "الوصول للعملاء المثاليين" : "Reach Ideal Customers",
    serviceTitle: isArabic ? "تقديم أفضل خدمة بأفكار مبتكرة" : "Delivering the Best Service with Innovative Ideas",
    serviceParagraph: isArabic
      ? `نحن فريق شغوف من خبراء التسويق الرقمي، ملتزمون بمساعدة الشركات على النجاح في العالم الرقمي.
         بفضل سنوات خبرتنا الطويلة وفهمنا العميق لعالم الإنترنت المتطور باستمرار، نبقى في طليعة اتجاهات وتقنيات هذا المجال.`
      : `We are a passionate team of digital marketing experts committed to helping businesses succeed in the digital world. 
         With years of experience and a deep understanding of the ever-evolving internet world, we stay at the forefront of trends and technologies.`,
    projectsCompleted: isArabic ? "تم الانتهاء من المشروع بشكل رائع" : "Projects Completed Successfully",
    howItWorks: isArabic ? "كيف يعمل" : "How It Works",
    realExamplesTitle: isArabic ? "أمثلة واقعية لكيفية مساعدتنا للشركات في تحقيق أهدافها التسويقية." : "Real Examples of How We Help Companies Achieve Their Marketing Goals.",
    moreQuestions: isArabic ? "المزيد من الأسئلة" : "More Questions",
    contactUs: isArabic ? "اتصل بنا" : "Contact Us",
    faqTitle: isArabic ? "الأسئلة الشائعة حول التسويق الرقمي" : "Frequently Asked Questions about Digital Marketing",
    faqParagraph: isArabic
      ? `باعتبارنا وكالة رائدة في مجال التسويق الرقمي، فإننا ملتزمون بتوفير الموارد التعليمية الشاملة والإجابة على الأسئلة المتداولة لمساعدة عملائنا.`
      : `As a leading digital marketing agency, we are committed to providing comprehensive educational resources and answering common questions to assist our clients.`,
    readyToWork: isArabic ? "هل أنت مستعد للعمل معنا؟" : "Are You Ready to Work With Us?",
    startNowBtn: isArabic ? "إبدء الأن" : "Start Now",
    marketingServicesTitle: isArabic
      ? "خدمات التسويق الرقمي وتحسين محركات البحث التي تزيد من عدد الزوار وتزيد الإيرادات"
      : "Digital Marketing and SEO Services That Increase Visitors and Boost Revenue",
    marketingServicesParagraph: isArabic
      ? `نحن وكالة التسويق الرقمي الرائدة لشركات العلامات التجارية. نقدم مجموعة متكاملة من الخدمات لمساعدة عملائنا على تحسين ترتيبهم في محركات البحث وزيادة عدد الزيارات إلى مواقعهم الإلكترونية.`
      : `We are the leading digital marketing agency for brand companies. We offer a comprehensive set of services to help our clients improve their search engine rankings and increase website traffic.`,
    readMoreBtn: isArabic ? "المزيد" : "More",
    card1Title: isArabic ? "تعظيم عائد الاستثمار مع خبرة وكالة التسويق الرقمي" : "Maximizing ROI with Digital Marketing Agency Expertise",
    card1Desc: isArabic
      ? `ما يميز هذه الوكالة للتسويق الرقمي هو التزامها بالشفافية والتعاون. فهي تُبقينا على اطلاع دائم بكل خطوة.`
      : `What distinguishes this digital marketing agency is its commitment to transparency and collaboration. They keep us informed every step of the way.`,
    card2Title: isArabic ? "أحدث الاتجاهات والاستراتيجيات مع وكالة التسويق الرقمي" : "Latest Trends and Strategies with Digital Marketing Agency",
    card2Desc: isArabic
      ? `كان العمل مع هذه الوكالة للتسويق الرقمي شراكة حقيقية. لقد خصصوا وقتًا لفهم أعمالنا وصناعتنا.`
      : `Working with this digital marketing agency was a true partnership. They took the time to understand our business and industry.`,
    card3Title: isArabic ? "كيف يمكن لوكالة التسويق الرقمي تحسين عملك؟" : "How Can a Digital Marketing Agency Improve Your Business?",
    card3Desc: isArabic
      ? `نحن وكالة التسويق الرقمي الرائدة في مجال بناء العلامات التجارية للشركات. نقدم مجموعة متكاملة من حلول التسويق الرقمي.`
      : `We are a leading digital marketing agency in building brand identity for companies. We offer a comprehensive set of digital marketing solutions.`,
    testimonialText: isArabic
      ? `يُجرون تحليلاً شاملاً لقطاعنا وجمهورنا المستهدف، مما يُمكّنهم من تطوير حملات مُخصصة تصل إلى عملائنا وتُشركهم بفعالية. وقد ساعدتنا أفكارهم الإبداعية وتقنياتهم المتطورة على البقاء في صدارة المنافسة.`
      : `They conduct comprehensive analysis of our sector and target audience, enabling them to develop tailored campaigns that effectively reach and engage our clients. Their creative ideas and advanced techniques helped us stay ahead of the competition.`,
    testimonialName: isArabic ? "Michael Kaizer" : "Michael Kaizer",
    testimonialPosition: isArabic ? "CEO of Basecamp Corp" : "CEO of Basecamp Corp",
    faqData: isArabic
      ? [
          {
            question: "لماذا يعد التسويق الرقمي مهمًا لعملي؟",
            answer:
              "يُمكن التسويق الرقمي الشركات من الوصول إلى جمهور أوسع والتفاعل معه، وتوليد عملاء محتملين، وزيادة المبيعات. كما يسمح بقياس النتائج بدقة وتعديل الاستراتيجيات بسرعة. هذه القدرة على التتبع والتخصيص تمنح الشركات ميزة تنافسية قوية.",
          },
          {
            question: "كيف يمكن للتسويق الرقمي أن يساعد في تحسين ظهور موقع الويب الخاص بي؟",
            answer:
              "يساعد التسويق الرقمي على تحسين ظهور موقعك من خلال تحسين محركات البحث، الحملات المدفوعة، وتحليل بيانات الزوار لتحسين الأداء.",
          },
          {
            question: "كم من الوقت يستغرق الأمر لرؤية نتائج جهود التسويق الرقمي؟",
            answer:
              "تختلف المدة حسب الاستراتيجية والميزانية، لكن عادةً تبدأ النتائج بالظهور بعد 3 إلى 6 أشهر من العمل المنتظم.",
          },
          {
            question: "كيف تقيس نجاح حملات التسويق الرقمي؟",
            answer:
              "يتم قياس النجاح عبر مؤشرات الأداء الرئيسية مثل نسبة النقر إلى الظهور، معدلات التحويل، عائد الاستثمار، وتفاعل الجمهور مع المحتوى.",
          },
        ]
      : [
          {
            question: "Why is digital marketing important for my business?",
            answer:
              "Digital marketing enables businesses to reach a broader audience, generate leads, increase sales, and measure results accurately.",
          },
          {
            question: "How can digital marketing improve my website visibility?",
            answer:
              "Through SEO, paid campaigns, and analytics to enhance performance.",
          },
          {
            question: "How long does it take to see digital marketing results?",
            answer:
              "It varies depending on strategy and budget, but typically results begin to show within 3 to 6 months.",
          },
          {
            question: "How do you measure the success of digital marketing campaigns?",
            answer:
              "Success is measured by key performance indicators like CTR, conversion rates, ROI, and audience engagement.",
          },
        ],
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [slide1, slide2, slide3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col lg:flex-row justify-between items-center gap-10">

        <div className="lg:w-1/2 space-y-6 text-center lg:text-right">
          <h1 dir={isArabic ? undefined : "ltr"} className="text-4xl md:text-5xl font-bold leading-snug mb-12 md:mb-[80px]">
            {texts.heroTitle}
          </h1>
          <p dir={isArabic ? undefined : "ltr"} className="text-gray-600 leading-relaxed max-w-full md:max-w-lg mx-auto lg:mx-0">
            {texts.heroParagraph}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link dir={isArabic ? undefined : "ltr"} to="/about" className="underline my-3 text-black font-bold">{texts.readMore}</Link>
            <Link dir={isArabic ? undefined : "ltr"} to="/conectus" className="bg-[#666666] text-white px-6 py-2 rounded-full hover:bg-black flex items-center gap-2">
              {texts.scheduleCall}
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 max-w-md mx-auto lg:mx-0">

         <div className="flex flex-col md:flex-row gap-6 justify-between">
  {/* العنصر الأول */}
  <div className="bg-gray-100 p-6 text-center rounded-lg shadow-md flex-1 flex flex-col items-center justify-center h-[300px] md:h-auto">
    <h2 dir={isArabic ? undefined : "ltr"} className="text-5xl font-bold text-[#080808]">+230</h2>
    <p dir={isArabic ? undefined : "ltr"} className="text-gray-600 mt-4">{texts.companiesCountText}</p>
    <img className="mt-6 max-w-full h-auto" src={photoImg} alt="photo" />
  </div>

  {/* العنصر الثاني */}
<div className="w-full max-w-[400px] h-[300px] md:h-auto shadow-lg rounded-xl overflow-hidden flex-1">
  <svg
    viewBox="0 0 200 300"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <clipPath id="curvedClip" clipPathUnits="userSpaceOnUse">
        <path d="M0,300 Q10,0 300,0 L300,300 Z" />
      </clipPath>
    </defs>
    <image
      href={marketingImg}
      width="300"
      height="300"
      clipPath="url(#curvedClip)"
      preserveAspectRatio="xMidYMid slice"
    />
  </svg>
</div>

</div>

          <div className="bg-[#1C1C1C] text-white rounded-xl p-6 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 dir={isArabic ? undefined : "ltr"} className="text-lg font-bold mb-4 md:mb-0">{texts.startJourneyTitle}</h3>
              <p dir={isArabic ? undefined : "ltr"}>{texts.startJourneySubtitle}</p>
            </div>
            <div className="w-20 md:w-auto">
              <img src={whatsappImg} alt="WhatsApp" className="mx-auto w-full md:mx-0" />
            </div>
          </div>

        </div>

      </section>

      <section className="px-6 py-12 max-w-7xl mx-auto">
        {/* العنوان والوصف */}
        <div className="flex flex-col md:flex-row justify-between text-center md:text-right mb-10 gap-6">
          <h2 dir={isArabic ? undefined : "ltr"} className="md:w-1/2 text-3xl font-bold">
            {texts.serviceTitle}
          </h2>
          <p dir={isArabic ? undefined : "ltr"} className="md:w-1/2 text-gray-500 leading-relaxed">
            {texts.serviceParagraph}
          </p>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* كارت: 920+ مشروع */}
          <div className="bg-gradient-to-br from-neutral-500 to-neutral-950 text-white rounded-xl p-8 flex flex-col justify-between shadow-lg">
            <div className="text-start">
              <div className="text-5xl font-bold mb-2">
                920<span>+</span>
              </div>
              <p dir={isArabic ? undefined : "ltr"}>{texts.projectsCompleted}</p>
            </div>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="w-12 h-12 bg-neutral-950 text-white rounded-full flex items-center justify-center text-2xl">+</div>
            </div>
          </div>

          {/* كارت: كيف يعمل */}
          <div className="relative bg-gradient-to-br from-neutral-950 to-neutral-500 rounded-xl p-8 text-white flex flex-col justify-between items-center shadow-lg">
            <h3 dir={isArabic ? undefined : "ltr"} className="text-3xl font-bold mb-10 mt-10">{texts.howItWorks}</h3>
            <button className=" border-8 absolute left-[-25px] bottom-[-25px] w-20 h-20 bg-neutral-950 rounded-full flex items-center justify-center shadow-lg hover:bg-neutral-900 transition">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
            </button>
          </div>

        </div>
      </section>

      <section className={`bg-gradient-to-br from-neutral-950 to-neutral-700 rounded-2xl  py-16 px-4 max-w-7xl mx-auto`}>
        <div className="text-center mb-10">
          <h2 dir={isArabic ? undefined : "ltr"} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-relaxed text-white">
            {texts.realExamplesTitle}
          </h2>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-10">
          <button className="border-2 border-black text-white rounded-full  px-4 py-2 hover:bg-neutral-950 hover:text-white transition text-sm sm:text-base">All Work [20]</button>
          <button className="border-2 border-black text-white  rounded-full  px-4 py-2 hover:bg-neutral-950 hover:text-white transition text-sm sm:text-base">UI/UX Design [10]</button>
          <button className="border-2 border-black text-white rounded-full   px-4 py-2 hover:bg-neutral-950 hover:text-white transition text-sm sm:text-base">Digital Marketing [5]</button>
          <button className="border-2 border-black text-white rounded-full  px-4 py-2 hover:bg-neutral-950 hover:text-white transition text-sm sm:text-base">Branding [5]</button>
        </div>

        <MainSlider />
      </section>
      <br />
      <br />

      <TechnicalTeam/>
      
      <section className=" my-7 max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
          {/* القسم الأيمن: العنوان والوصف */}
          <div className="lg:w-1/2 text-right space-y-4">
            <h2 dir={isArabic ? undefined : "ltr"} className="text-3xl font-bold">{texts.faqTitle}</h2>
            <p dir={isArabic ? undefined : "ltr"} className="text-gray-600 leading-loose">
              {texts.faqParagraph}
            </p>
            <div className="flex flex-wrap justify-start gap-4 mt-6">
              <Link dir={isArabic ? undefined : "ltr"}
                to="#"
                className="border border-balck text-black font-semibold px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
              >
                {texts.moreQuestions}
              </Link>
              <Link dir={isArabic ? undefined : "ltr"}
                to="/conectus"
                className="bg-black text-white font-semibold px-6 py-2 rounded-full hover:bg-neutral-800 transition"
              >
                {texts.contactUs}
              </Link>
            </div>
          </div>

          {/* القسم الأيسر: الأكوردين */}
          <div className="lg:w-1/2 w-full space-y-4">
            {texts.faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl p-4 space-y-2"
              >
                <div
                  className={`flex justify-between items-center font-bold cursor-pointer ${
                    openIndex === index ? "" : "text-lg"
                  }`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index ? "true" : "false"}
                >
                  <h1 dir={isArabic ? undefined : "ltr"}  className={openIndex === index ? "text-xl" : "text-lg"}>
                    {faq.question}
                  </h1>
                  <button
                    className="text-2xl font-bold"
                    aria-label="Toggle answer"
                  >
                    {openIndex === index ? "−" : "+"}
                  </button>
                </div>
                {openIndex === index && (
                  <p dir={isArabic ? undefined : "ltr"} className="text-gray-600 leading-loose">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="flex flex-col md:flex-row justify-between items-center py-12 px-4 md:px-16 bg-white">
  <div className="md:w-1/2 text-right mb-6 md:mb-0">
    <h2 className="text-2xl md:text-3xl  font-bold mb-4">
      {texts.marketingServicesTitle.split('<br/>').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br/>
        </React.Fragment>
      ))}
    </h2>
  </div>
  <div className="md:w-1/2 text-left">
    <p className="text-gray-600 mb-4 leading-relaxed">
      {texts.marketingServicesParagraph}
    </p>
    <Link to='/about'><button className="border border-gray-400 rounded-full px-6 py-2 hover:bg-black hover:text-white transition">
      {texts.readMoreBtn}
    </button></Link>
  </div>
</section>


<div className="flex flex-col lg:flex-row gap-8">
  <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow text-center flex flex-col">
    <div className="flex justify-between items-center mb-3">
      <p className="text-right text-[#878C91] text-sm">{texts.readingTimeText}</p>
      <div className="w-3 h-3 bg-black rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-start mb-10">{texts.card1Title}</h2>
    <p className="text-right text-[#878C91] text-sm mb-5 w-full">
      {texts.card1Desc}
    </p>
    <button className="self-start border text-black border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition">
      {texts.readMoreBtn}
    </button>
  </div>


  <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow text-center flex flex-col">
    <div className="flex justify-between items-center mb-3">
      <p className="text-right text-[#878C91] text-sm">{texts.readingTimeText}</p>
      <div className="w-3 h-3 bg-black rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-start mb-10">{texts.card2Title}</h2>
    <p className="text-right text-[#878C91] text-sm mb-5 w-full">
      {texts.card2Desc}
    </p>
    <button className="self-start border text-black border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition">
      {texts.readMoreBtn}
    </button>
  </div>


  <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow text-center flex flex-col">
    <div className="flex justify-between items-center mb-3">
      <p className="text-right text-[#878C91] text-sm">{texts.readingTimeText}</p>
      <div className="w-3 h-3 bg-black rounded-full"></div>
    </div>
    <h2 className="text-2xl font-bold text-start mb-10">{texts.card3Title}</h2>
    <p className="text-right text-[#878C91] text-sm mb-5 w-full">
      {texts.card3Desc}
    </p>
    <button className="self-start border text-black border-black rounded-full px-8 py-2 hover:bg-black hover:text-white transition">
      {texts.readMoreBtn}
    </button>
  </div>
</div>


        <section className= {`bg-gradient-to-br from-neutral-950 to-neutral-700 my-7 py-16 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between rounded-xl text-center lg:text-left`}>
          <h2 dir={isArabic ? undefined : "ltr"} className="text-white text-3xl md:text-4xl font-bold leading-relaxed lg:flex-none lg:text-left lg:w-auto">
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
  )
}
