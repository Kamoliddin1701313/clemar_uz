import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

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
  BorderColor: "white",
  border: "2px solid white",
};

function ProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const BuyProductButton = (event) => {
    event.preventDefault();
    const token = "7047437133:AAF1g7efX79bh4TSYtBwN1TEQRL6GtjFczo";
    const chat_id = 6399996460;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const messagePack = `Name : ${name} \nPhone number : ${phoneNumber}`;
    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messagePack,
      },
    })
      .then(() => {
        document.getElementById("reset").reset();
        alert(
          "Tanlagan maxsulotingiz yuborildi \n tez orada siz bilan bog'lanishadi!"
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-1 px-5 xl:px-0 rounded-[8px] font-semibold bg-white">
      <Button
        onClick={handleOpen}
        fullWidth
        className="hover:text-white text-[20px] w-full duration-500 ease-out opacity-50 hover:bg-[#007aff] rounded-[8px] font-bold"
      >
        Sotib olish
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="relative" id="reset" onSubmit={BuyProductButton}>
            <input
              id="name"
              type="text"
              placeholder="Ism"
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none"
            />

            <input
              id="phonenumber"
              type="text"
              placeholder="Telefon raqami"
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none my-5"
            />

            <button
              type="submit"
              className="rounded-xl w-1/2 mx-auto block mt-4 bg-blue-400 text-[20px] text-white font-normal py-4 px-4 outline-none text-center cursor-pointer"
            >
              Yuborish
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;
