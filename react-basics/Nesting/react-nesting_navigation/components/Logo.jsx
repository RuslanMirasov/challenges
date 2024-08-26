import Image from "./Image";
import logo from "../src/assets/logo.jpg";

const Logo = () => {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
