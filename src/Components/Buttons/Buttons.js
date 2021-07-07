import "./Buttons.scss";

const Buttons = (props) => {
  const { text, className, onClick } = props;

  return (
    <div className={`Buttons ${className}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Buttons;
