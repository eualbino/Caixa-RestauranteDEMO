import "./InputLogin.css";

const InputLogin = ({ onChange, value, children }) => {
  return (
    <>
      <input
        placeholder={children}
        onChange={onChange}
        value={value}
        className="input-login"
        type="text"
      />
    </>
  );
};

export default InputLogin;
