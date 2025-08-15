function Button({ handleClick, label, isDark }) {
  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className={isDark ? "btn btnDark" : "btn"}
    >
      {isDark ? label + ' на светлую' : label + ' на темную'}
    </button>
  );
}

export default Button;
