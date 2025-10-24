type NavbarProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const links = ["Home", "About", "Projects"];

  return (
    <nav className="flex justify-center gap-6 py-4 bg-gray-800 text-white">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => setCurrentPage(link)}
          className={`hover:text-blue-400 transition-colors ${
            currentPage === link ? "text-blue-400 font-semibold" : ""
          }`}
        >
          {link}
        </button>
      ))}
    </nav>
  );
}