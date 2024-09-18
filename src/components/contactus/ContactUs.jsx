import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();

  const ContactUsForm = (event) => {
    event.preventDefault();
    const token = "7047437133:AAF1g7efX79bh4TSYtBwN1TEQRL6GtjFczo";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const additionalInformation = document.getElementById(
      "additionalInformation"
    ).value;
    const messagePack = `Name : ${name} \nPhone number : ${phoneNumber} \nAdditional Information : ${additionalInformation}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messagePack,
      },
    })
      .then(() => {
        document.getElementById("form_id").reset();
        alert("Xabaringiz yuborildi! Tashakur ...");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-[1280px] mx-auto py-16 xxl:py-12 xl:py-10 lg:px-12 sm:px-6">
      <div className="w-[90%] lg:w-full mx-auto grid grid-cols-2 gap-14 lg:gap-8 lg:grid-cols-1">
        <div className="lg:w-[90%] lg:mx-auto">
          <h1 className="text-[35px] xxl:text-[23px] font-semibold pb-4">
            {t("contactus.contactusname")}
          </h1>
          <p className="text-[18px] xxl:text-[14px]">
            {t("contactus.contactustitle")}
          </p>
        </div>

        <div className="">
          <form className="grid gap-4" id="form_id" onSubmit={ContactUsForm}>
            <input
              id="name"
              type="text"
              required
              placeholder={t("contactus.contactusinputname")}
              className="w-full bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-5 xxl:py-3"
            />
            <input
              id="phone-number"
              type="number"
              required
              placeholder={t("contactus.contactusinputtel")}
              className="w-full bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-5 xxl:py-3"
            />
            <textarea
              id="additionalInformation"
              placeholder={t("contactus.contactusinputtextarea")}
              className="w-full resize-none h-[170px] bg-[#f9f9f9] border-[1px] border-[#f9f9f9] rounded-[12px] border-solid p-5 xxl:py-3"
            ></textarea>
            <button
              type="submit"
              className="w-full text-[18px] text-white p-5 xxl:py-3 border-none font-semibold hover:opacity-85 bg-[#49c3f2] rounded-[12px]"
            >
              {t("contactus.contactusbtn")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
