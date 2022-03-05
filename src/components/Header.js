const Header = ({ handleToggle }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="button"
        onClick={() => handleToggle((previousDarkMode) => !previousDarkMode)}
      >
        Toggle mode
      </button>
    </div>
  );
};

export default Header;
