import "./InputLogin.css";

const InputLogin = ({ onChange, value, type }) => {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        className="input-login"
        type={type}
      />
    </>
  );
};

export default InputLogin;
