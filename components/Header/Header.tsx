const Header = () => {
  return (
    <header className="header-diagonal w-full h-[6rem] bg-[#262322] flex items-center justify-between px-6 relative z-10 border-b-2 border-[#FC6351]">
      <div />
      <div className="flex items-center gap-4">
        <span className="uppercase z-10">SCANDAN</span>
        <button className="text-2xl z-10">☰</button>
      </div>
    </header>
  );
};

export default Header;
