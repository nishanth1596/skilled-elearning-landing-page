import logo from "../assets/logo-light.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-blue900 px-5 py-6">
      <a href="#" aria-label="contact us">
        <img
          src={logo}
          alt="Skilled logo in light color"
          className="max-w-20"
        />
      </a>
      <Button type="purple" />
    </footer>
  );
};

export default Footer;
