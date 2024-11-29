import { assets } from "../../../public/assets/assets";

const Footer = () => {
    return (
        <div className="flex mt-20 items-center justify-between py-3 gap-4 mb-5">
          <img src={assets.logo} alt="" />
          <p className="flex-1 text-sm  border-l border-gray-500 pl-4 max-sm:hidden">All right reserved. Copyright @imagify</p>
          <div className="flex gap-2">
          <img src={assets.facebook_icon} width={35} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          </div>
        </div>
    );
};

export default Footer;