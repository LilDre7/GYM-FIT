export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 font-light overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {/* Description Column */}
          <div className="max-w-xs">
            <p className="uppercase text-sm leading-relaxed">
              CRSL Studio, formerly Carosello Lab, is an award-winning visual design agency, based in Milan.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-1">
            <a href="mailto:info@carosellolab.com" className="block text-sm hover:underline">
              info@carosellolab.com
            </a>
            <a href="tel:+390283629532" className="block text-sm hover:underline">
              +39 02 83629 532
            </a>
            <a href="https://instagram.com" className="block text-sm hover:underline">
              Instagram
            </a>
          </div>

          {/* Studio Info Column */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-sm mb-2">Studio</h3>
              <div className="space-y-1">
                <p className="text-sm">Carosello Lab</p>
                <p className="text-sm">via C. Darwin 8,</p>
                <p className="text-sm">20143 Milan</p>
                <p className="text-sm">Italy</p>
              </div>
            </div>
            
            <div>
              <h3 className="uppercase text-sm mb-2">Registered Office</h3>
              <div className="space-y-1">
                <p className="text-sm">CaroselloLab srl</p>
                <p className="text-sm">Circonvallazione Clodia, 82</p>
                <p className="text-sm">00195 - Roma (RM) Italia</p>
              </div>
            </div>
          </div>

          {/* Brands & Policies Column */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-sm mb-2">Our Brands</h3>
              <div className="space-y-1">
                <a href="#" className="block text-sm hover:underline">Arcipelago</a>
                <a href="#" className="block text-sm hover:underline">Designers Against Coronavirus</a>
                <a href="#" className="block text-sm hover:underline">Food Pirate Studios</a>
              </div>
            </div>
            
            <div className="space-y-1">
              <a href="#" className="block text-sm hover:underline">Cookie Policy</a>
              <a href="#" className="block text-sm hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="border-t border-white/20 pt-12">
          <h1 className="text-[12rem] font-bold leading-none tracking-tighter">CRSL</h1>
        </div>
      </div>
    </footer>
  );
}
