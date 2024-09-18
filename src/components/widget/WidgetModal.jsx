import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CloseModalBtnIcon } from "../../assets/icons/Icons";
import axios from "axios";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 6,
  borderRadius: 5,
  border: "2px solid white",
};

function WidgetModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  const SendMessage = (event) => {
    event.preventDefault();
    const token = "7047437133:AAF1g7efX79bh4TSYtBwN1TEQRL6GtjFczo";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    //
    const ism = document.getElementById("ism").value.trim();
    const phone_number = document.getElementById("tel").value.trim();

    console.log(ism, phone_number, "Kamoliddin");

    if (ism.length === 0 || phone_number.length === 0) {
      alert("Xammasini to'ldirishingiz shart 😡");
      return;
    }
    //
    const messageContend = `Ism : ${ism} \nPhone number : ${phone_number}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContend,
      },
    })
      .then((res) => {
        document.getElementById("form_id").reset();
        alert("Muvaffaqiyotli yuborildi ... 👏");
      })
      .catch((err) => console.log(err));
  };
  //

  return (
    <div className="py-1 px-5 rounded-[8px] font-semibold bg-white xl:px-1 lg:hidden xl:py-0 lg:p-0">
      <Button
        onClick={handleOpen}
        className="text-[#49c3f2] border-none py-3 rounded-[8px]"
      >
        {t("widgetmodal.modal")}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={SendMessage} id="form_id" className="relative">
            <input
              id="ism"
              type="text"
              placeholder={t("widgetmodal.ism")}
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none"
            />
            <input
              id="tel"
              type="number"
              placeholder={t("widgetmodal.tel")}
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none my-5"
            />

            <button
              type="submit"
              className="rounded-xl w-1/2 mx-auto block mt-4 bg-blue-400 text-[20px] text-white font-normal py-4 px-4 outline-none"
            >
              {t("widgetmodal.yuborish")}
            </button>

            <div className="absolute -right-8 -top-8">
              <CloseModalBtnIcon
                onClick={handleClose}
                className="w-[18px] h-[18px] cursor-pointer"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default WidgetModal;
