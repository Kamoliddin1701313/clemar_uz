import { useTranslation } from "react-i18next";
import aboutpageimg from "../../assets/images/aboutpageimg.png";
const About = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[1280px] mx-auto py-10 px-12 sm:px-6">
      <h1 className="text-[35px] xl:text-[28px] lg:text-[22px] font-semibold">
        {t("about.bizxaqimizda")}
      </h1>
      <div>
        <img
          src={aboutpageimg}
          alt="aboutpageimg"
          className="w-full h-[400px] lg:h-[300px] md:h-[250px] rounded-[30px] my-7 lg:my-4"
        />
      </div>
      <p className="text-black opacity-60 font-montserrat-bold text-[16px] md:text-[14px]">
        {t("about.abouttext")}
      </p>
    </div>
  );
};

export default About;
