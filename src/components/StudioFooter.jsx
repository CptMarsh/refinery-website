export default function StudioFooter() {
  return (
    <footer className="py-10 px-6 border-t border-[#1e1a14] text-center bg-[#080808]">
      <div className="flex flex-col items-center gap-3">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}studio-logo.png`} alt="The Marsh Refinery" className="w-6 h-6 object-contain opacity-60" style={{filter: "brightness(0) saturate(100%) invert(85%) sepia(20%) saturate(350%) hue-rotate(5deg) brightness(90%)"}} />
          <span className="text-[#4a3f33] text-sm tracking-widest uppercase">The Marsh Refinery</span>
        </div>
        <p className="text-[#2a2218] text-xs tracking-wider">
          © {new Date().getFullYear()} The Marsh Refinery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}