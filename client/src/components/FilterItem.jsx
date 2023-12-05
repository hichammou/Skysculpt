function FilterItem({ children, onClick }) {
  return (
    <li
      className="hover:bg-slate-300 py-2 px-10 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default FilterItem;
