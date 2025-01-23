import logo from "../assets/logo-dark.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="mx-5 my-4 flex items-center justify-between md:mx-11 md:my-6 xl:mx-40">
      <a href="#" aria-label="Contact us">
        <img src={logo} alt="Skilled Logo" className="max-w-20" />
      </a>
      <Button type="dark" />
    </header>
  );
};

export default Header;
