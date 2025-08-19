import React, { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { LanguageContext } from "../../Context/LanguageContext";
import { useForm } from "react-hook-form";

export default function ContactUs() {
  const { isArabic } = useContext(LanguageContext);
  const [countryCode, setCountryCode] = useState("+20");

  const arabicCountries = [
    { code: "+20", nameAr: "مصر", nameEn: "Egypt" },
    { code: "+966", nameAr: "السعودية", nameEn: "Saudi Arabia" },
    { code: "+971", nameAr: "الإمارات", nameEn: "UAE" },
    { code: "+965", nameAr: "الكويت", nameEn: "Kuwait" },
    { code: "+974", nameAr: "قطر", nameEn: "Qatar" },
    { code: "+968", nameAr: "عمان", nameEn: "Oman" },
    { code: "+212", nameAr: "المغرب", nameEn: "Morocco" },
    { code: "+218", nameAr: "ليبيا", nameEn: "Libya" },
    { code: "+213", nameAr: "الجزائر", nameEn: "Algeria" },
    { code: "+249", nameAr: "السودان", nameEn: "Sudan" },
    { code: "+223", nameAr: "مالي", nameEn: "Mali" },
    { code: "+216", nameAr: "تونس", nameEn: "Tunisia" },
    { code: "+222", nameAr: "موريتانيا", nameEn: "Mauritania" },
    { code: "+967", nameAr: "اليمن", nameEn: "Yemen" },
    { code: "+227", nameAr: "النيجر", nameEn: "Niger" },
    { code: "+230", nameAr: "موريشيوس", nameEn: "Mauritius" },
    { code: "+235", nameAr: "تشاد", nameEn: "Chad" },
    { code: "+262", nameAr: "جزر القمر", nameEn: "Comoros" },
  ];

  // الخدمات dropdown بالعربي والانجليزي
  const serviceOptions = [
    { value: "social_media_management", labelAr: "إدارة سوشيال ميديا", labelEn: "Social Media Management" },
    { value: "graphic_design", labelAr: "تصميمات الجرافيك", labelEn: "Graphic Design" },
    { value: "social_ads", labelAr: "إعلانات على منصات التواصل الاجتماعى", labelEn: "Social Media Advertising" },
    { value: "website_development", labelAr: "إنشاء المواقع", labelEn: "Website Development" },
    { value: "signage_design", labelAr: "تصميم وجهات و يفط", labelEn: "Signage & Facade Design" },
    { value: "mobile_apps", labelAr: "تطبيقات الهاتف", labelEn: "Mobile Applications" },
    { value: "other", labelAr: "خدمات أخرى", labelEn: "Other Services" },
  ];

  const texts = {
    sectionTitle: isArabic ? "تواصل معنا" : "Contact Us",
    sectionDescription: isArabic
      ? `لو حابب تطور شغلك وتوصله لأكبر عدد من الناس، إحنا هنا علشان نساعدك!
        سواء محتاج خطة تسويق احترافية، تصميم موقع أو تطبيق يخدم شغلك، أو محتوى برودكشن بصري يوصّل رسالتك بوضوح – فريقنا جاهز يسمعك ويشتغل معاك خطوة بخطوة.
        ابعتلنا استفسارك أو فكرتك، وهنرجعلك في أسرع وقت.`
      : `If you want to grow your business and reach a wider audience, we're here to help!
        Whether you need a professional marketing plan, a website or app designed for your work, or visual production content that clearly delivers your message – our team is ready to listen and work with you step by step.
        Send us your inquiry or idea, and we'll get back to you as soon as possible.`,
  };

    const services = [
    {
      title: isArabic ? " يمكنك زيارة مقرنا " : "You may visit our headquarters",
      description: isArabic
        ? "مدينة نصر"
        : "Nasser City",
      icon: "fa-solid fa-location-dot",
    },
    {
      title: isArabic ? "  يمكنك التواصل معنا" : " You Can Contact Us",
      description: isArabic
        ? " 01507779771 "
        : " 01507779771 ",
      icon: "fa-solid fa-phone",
    },
    {
      title: isArabic ? "البريد الإلكتروني" : "Email",
      description: isArabic
        ? "Tarfficdigital@gmial.com"
        : "Tarfficdigital@gmial.com",
      icon: "fa-solid fa-envelope",
    },
  
  ];

  const schema = yup.object().shape({
    full_name: yup.string().required(isArabic ? "الاسم مطلوب" : "Full name is required"),
    email: yup
      .string()
      .email(isArabic ? "بريد إلكتروني غير صالح" : "Invalid email")
      .required(isArabic ? "البريد الإلكتروني مطلوب" : "Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9]{7,14}$/, isArabic ? "رقم الهاتف غير صالح" : "Invalid phone number")
      .required(isArabic ? "رقم الهاتف مطلوب" : "Phone number is required"),
    service: yup.string().required(isArabic ? "نوع الخدمة مطلوب" : "Service type is required"),
    message: yup.string().required(isArabic ? "الرسالة مطلوبة" : "Message is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const fullPhoneNumber = countryCode + data.phone;
      const form = new FormData();
      for (let key in data) {
        form.append(key, key === "phone" ? fullPhoneNumber : data[key]);
      }
      // استبدل الرابط برابط API الحقيقي
      const res = await axios.post("https://your-api-endpoint.com/contact", form);
      console.log("✅ Response:", res.data);
      alert(isArabic ? "تم الإرسال بنجاح" : "Message sent successfully!");
      reset();
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      alert(isArabic ? "حدث خطأ أثناء الإرسال" : "Something went wrong!");
    }
  };

  return (
    <>
      <section className="max-w-full flex flex-col md:flex-row justify-between items-start py-3 gap-x-58 bg-white">
        <div className="md:w-1/2 text-right my-22 mb-6 md:mb-0">
          <h2 dir={isArabic ? "rtl" : "ltr"} className="text-[70px] md:text-[70px] font-bold mb-4">
            {texts.sectionTitle}
          </h2>
          <p dir={isArabic ? "rtl" : "ltr"} className="max-w-lg text-[20px] my-10">
            {texts.sectionDescription}
          </p>
        </div>
        <div className="md:w-1/2 text-left">
          <img src="../images/us.png" alt="" />
        </div>
      </section>
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-neutral-950 mb-8 text-center">
            {isArabic ? "تواصل معنا بكل سهولة" : "Contact Us Easily"}
          </h2>
          <p className="text-gray-500">
            يسعدنا التواصل معك في أي وقت

          </p>
      </div>

<div className="flex flex-col  gap-2">
  
    <div className="flex flex-wrap justify-center items-center gap-2 p-2">
  {services.map((service, index) => (
    <div key={index} className="w-full sm:w-1/2 md:w-[30%]">
      <div
        className={`bg-white p-16 rounded-lg shadow-md text-center transition-transform duration-500 transform hover:scale-105 hover:shadow-xl h-full min-h-[320px] flex flex-col justify-between`}
      >
        <div className="text-black text-4xl mb-0">
          <i className={`fas ${service.icon} icons`}></i>
        </div>
        <h2
          className="text-black text-2xl font-bold mb-2"
          dir={isArabic ? undefined : "ltr"}
        >
          {service.title}
        </h2>
        <p className="text-gray-500" dir={isArabic ? undefined : "ltr"}>
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>

</div>
      <section className="py-16 px-0 bg-gray-50 text-right">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-neutral-950 mb-8 text-center">
            {isArabic ? "تواصل معنا بكل سهولة" : "Contact Us Easily"}
          </h2>

          <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {isArabic ? "الاسم الكامل" : "Full Name"}
              </label>
              <input
                type="text"
                {...register("full_name")}
                placeholder={isArabic ? "ادخل اسمك الكامل" : "Enter your full name"}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-red-600 text-sm mt-1">{errors.full_name?.message}</p>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {isArabic ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <p className="text-red-600 text-sm mt-1">{errors.email?.message}</p>
            </div>

            {/* Phone with country code selector */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {isArabic ? "رقم الهاتف" : "Phone Number"}
              </label>
              <div className="flex gap-3">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {arabicCountries.map(({ code, nameAr, nameEn }) => (
                    <option key={code} value={code}>
                      {isArabic ? `${code} ${nameAr}` : `${code} ${nameEn}`}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  {...register("phone")}
                  placeholder={isArabic ? "أدخل رقم الهاتف بدون كود" : "Enter phone number without code"}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 text-right"
                />
              </div>
              <p className="text-red-600 text-sm mt-1">{errors.phone?.message}</p>
            </div>

            {/* Service Type dropdown */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {isArabic ? "نوع الخدمة" : "Service Type"}
              </label>
              <select
                {...register("service")}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                defaultValue=""
              >
                <option value="" disabled>
                  {isArabic ? "اختر نوع الخدمة" : "Select a service"}
                </option>
                {serviceOptions.map(({ value, labelAr, labelEn }) => (
                  <option key={value} value={value}>
                    {isArabic ? labelAr : labelEn}
                  </option>
                ))}
              </select>
              <p className="text-red-600 text-sm mt-1">{errors.service?.message}</p>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                {isArabic ? "الرسالة" : "Message"}
              </label>
              <textarea
                rows="5"
                {...register("message")}
                placeholder={isArabic ? "اكتب رسالتك هنا" : "Write your message here"}
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <p className="text-red-600 text-sm mt-1">{errors.message?.message}</p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-neutral-950 border-2 hover:bg-[#000000] hover:text-white font-semibold px-8 py-3 rounded-full transition duration-300"
              >
                {isSubmitting
                  ? isArabic
                    ? "جارٍ الإرسال..."
                    : "Sending..."
                  : isArabic
                  ? "إرسال"
                  : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
