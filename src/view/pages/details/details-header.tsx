import { CircleArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function DetailsHeader() {
  return (
    <header className="col-span-full">
      <Link to="/" className="flex items-center gap-2 text-sm text-[#617480]">
        <CircleArrowLeft />
        Voltar
      </Link>
    </header>
  );
}
