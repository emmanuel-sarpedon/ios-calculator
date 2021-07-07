import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        Made with React <i class="fab fa-react fa-2x"></i> by Emmanuel S.{" "}
        <a
          href="https://github.com/emmanuel-sarpedon/ios-calculator"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
