import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageContext } from "../../Context/LanguageContext"; // عدل المسار حسب مكان الملف
import style from "./Footer.module.css";
import logo from '../../../public/logo.svg' 

export default function Footer() {
  const { isArabic } = useContext(LanguageContext);

  const texts = {
    companyInfoTitle: "Traffic Digital",
    companyDescriptionAr: "نقدم باقة شاملة من خدمات التسويق الرقمي التي تغطي جميع جوانب حضورنا الإلكتروني...",
    companyDescriptionEn: "We provide a comprehensive range of digital marketing services covering all aspects of our online presence...",
    contactTitleAr: "تواصل معنا",
    contactTitleEn: "Contact Us",
    phone: "01507779771",
    email: "Hey@boostim.com",
    addressAr: "مدينة نصر، القاهرة، مصر",
    addressEn: "Nasr City, Cairo, Egypt",
    licenseTitleAr: "الرخصة",
    licenseTitleEn: "License",
    termsAr: "سياسة الشروط والأحكام",
    termsEn: "Terms and Conditions Policy",
    copyrightAr: "حقوق الملكية",
    copyrightEn: "Copyright",
    contactEmailAr: "عنوان البريد الإلكتروني",
    contactEmailEn: "Contact Email",
  };

  return (
    <motion.footer
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 5, ease: "easeOut" }}
      viewport={{ amount: 0.3 }}
      className="bg-gray-50 text-gray-700 py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-right">
        {/* العمود الثالث: معلومات الشركة */}
        <div>
          <div className="flex flex-row items-start justify-start mt-0">
            <img src={logo } alt="Logo" className="w-48 h-40 object-contain" />
            {/* <span className="text-xl font-bold">{texts.companyInfoTitle}</span> */}
          </div>
       
        
        </div>

        {/* العمود الثاني: تواصل معنا */}
        <div className="space-y-4 mx-10">
          <h3 className="font-semibold text-lg">
            {isArabic ? texts.contactTitleAr : texts.contactTitleEn}
          </h3>
          <div className="flex items-center justify-start space-x-2 space-x-reverse text-sm text-gray-600">
            <i className="fas fa-phone-alt mx-2"></i>
            <span>{texts.phone}</span>
          </div>
          <div className="flex items-center justify-start space-x-2 space-x-reverse text-sm text-gray-600">
            <i className="fas fa-envelope mx-2"></i>
            <span>{texts.email}</span>
          </div>
          <div className="flex items-center justify-start space-x-2 space-x-reverse text-sm text-gray-600">
            <i className="fas fa-map-marker-alt mx-2"></i>
            <span>{isArabic ? texts.addressAr : texts.addressEn}</span>
          </div>
            <div className="flex justify-start items-center space-x-4 space-x-reverse text-gray-600 text-xl">
            <Link to="/facebook"><i className="fab fa-facebook"></i></Link>
            <Link to="/twitter"><i className="fab fa-twitter"></i></Link>
            <Link to="/linkedin"><i className="fab fa-linkedin"></i></Link>
            <Link to="/instagram" className="mx-4"><i className="fab fa-instagram"></i></Link>
          </div>
        </div>

        {/* العمود الأول: الرخصة */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{isArabic ? texts.licenseTitleAr : texts.licenseTitleEn}</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>
              <Link to="/terms" className="hover:underline">
                {isArabic ? texts.termsAr : texts.termsEn}
              </Link>
            </li>
            <li>
              <Link to="/copyright" className="hover:underline">
                {isArabic ? texts.copyrightAr : texts.copyrightEn}
              </Link>
            </li>
            <li>
              <Link to="/contact-email" className="hover:underline">
                {isArabic ? texts.contactEmailAr : texts.contactEmailEn}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
