import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BorderClear, BorderColor } from "@mui/icons-material";
import { CloseModalBtnIcon } from "../../assets/icons/Icons";

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

function WidgetModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="py-1 px-5 rounded-[8px] font-semibold bg-white">
      <Button
        onClick={handleOpen}
        className={`text-[#49c3f2] border-none py-3 px-5 rounded-[8px] border-[3px]`}
      >
        Bonus olish
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="relative">
            <input
              type="text"
              placeholder="Ism"
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none"
            />
            <input
              type="text"
              placeholder="Telefon raqami"
              className="rounded-xl text-[20px] font-normal bg-[#f8f8f8] p-4 w-full border-[1px] border-[#cacaca] outline-none my-5"
            />
            <button className="rounded-xl w-1/2 mx-auto block mt-4 bg-blue-400 text-[20px] text-white font-normal py-4 px-4 outline-none">
              Yuborish
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
