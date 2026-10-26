import { Link } from "react-router-dom";
import { Mark } from "@/components/brand";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 bg-ink-page/90 backdrop-blur-[6px] border-b border-ink-rule">
      <Link to="/" className="flex items-center gap-3">
        <Mark label={null} className="w-7 h-7 text-bone-200" />
        <span className="text-bone-200 text-[11px] font-semibold uppercase tracking-wider">THE MARSH REFINERY</span>
      </Link>
      {/* <a
        href="#wishlist"
        className="text-[11px] px-5 py-2 border border-moss-700 text-moss-500 hover:bg-moss-600/20 tracking-wider uppercase transition-colors duration-300">

        Wishlist
      </a> */}
    </nav>);

}
