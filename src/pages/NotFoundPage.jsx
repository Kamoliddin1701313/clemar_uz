import notfoundimg from "../assets/images/notfoundimg.png";

const NotFoundPage = () => {
  return (
    <div className="h-[570px] md:h-[380px] relative z-50">
      <img src={notfoundimg} className="w-full h-full" alt="notfoundimg" />
    </div>
  );
};

export default NotFoundPage;
