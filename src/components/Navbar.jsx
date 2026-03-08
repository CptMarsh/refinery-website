export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-[#080808]/90 backdrop-blur-sm border-b border-[#1e1a14]">
      <div className="flex items-center gap-3">
        <img src="/studio-logo.png" alt="The Marsh Refinery" className="w-7 h-7 object-contain" style={{filter: "brightness(0) saturate(100%) invert(85%) sepia(20%) saturate(350%) hue-rotate(5deg) brightness(90%)"}} />
        <span className="text-[#d4c9b0] text-xs font-semibold uppercase tracking-widest">THE MARSH REFINERY</span>
      </div>
      <a
        href="#wishlist"
        className="text-xs px-5 py-2 border border-[#2a3a20] text-[#6b8f4e] hover:bg-[#4a7a35]/20 tracking-widest uppercase transition-all duration-300">

        Wishlist
      </a>
    </nav>);

}