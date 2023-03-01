import Footer from "../components/Footer";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  
  return (
    <div className="h-[93vh] flex flex-col justify-between">
      <div
        id="contact"
        className=" flex flex-col gap-[20px] items-center h-[70%] justify-center p-2"
      >
        <div className="text-3xl font-bold tracking-widerm tit relative">Contact us</div>
        <form
          className="w-[100%] h-[80%] sm:w-[70%] border p-2 border-gray-200 rounded flex flex-col justify-between items-end"
        >
          <div className="w-[100%] h-[30%] sm:h-[15%] flex justify-between flex-col-reverse sm:flex-row-reverse ">
            <input
              placeholder="Full name"
              className="h-[45%] sm:h-[100%] w-[100%] sm:w-[40%]  p-1 border outline-none"
              type="text"
              name="user_name"
              id=""
            />
            <input
              placeholder="E-mail"
              className="h-[45%] sm:h-[100%]   w-[100%] sm:w-[40%] p-1 border outline-none"
              type="email"
              name="user_email"
              id=""
            />
          </div>
          <textarea
            placeholder="Message content"
            className="h-[50%] sm:h-[60%] w-[100%] p-1 border outline-none"
            name="message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 cursor-pointer text-white rounded h-[12%] sm:h-[15%] w-[100%] sm:w-[20%] py-1 bg-[#050A30]"
          >
            <span>
              <RiSendPlaneFill />
            </span>
            <span>Send message</span>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
