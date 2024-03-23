import { useLocation } from "react-router-dom";

export default function Table({ children }) {
  return (
    <div className="w-full flex justify-center">
      <table>{children}</table>
    </div>
  );
}
export function TableHeader({ children }) {
  return (
    <thead>
      <tr>{children}</tr>
    </thead>
  );
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children, onOpen }) {
  const location = useLocation();
  const path = location.pathname;
  return (
    <tr
      onClick={onOpen}
      className={path === "/menu/takeaway" ? "cursor-pointer" : ""}
    >
      {children}
    </tr>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
