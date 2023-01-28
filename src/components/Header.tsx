interface HeaderProps {
  handleToggle: () => void;
}

export default function Header({ handleToggle }: HeaderProps) {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="button" onClick={handleToggle}>
        Toggle mode
      </button>
    </div>
  );
}
