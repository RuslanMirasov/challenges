import avatar from "../src/assets/avatar.jpg";
import Image from "./Image";

const Avatar = ({ children }) => {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />
    </button>
  );
};

export default Avatar;
