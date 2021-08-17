export const Switch = ({ themeToggler }) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={themeToggler} />
      <span className="slider round"></span>
    </label>
  );
};
