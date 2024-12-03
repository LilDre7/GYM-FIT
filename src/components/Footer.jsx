export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white px-6 py-12 font-light overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
          {/* Description Column */}
          <div className="max-w-xs">
            <p className="uppercase text-sm leading-relaxed">
              ADDW AGENCY IN NOVATION COSTA RICA, 2023 
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-1">
            <a href="mailto:alvaroaburto71@gmail.com" className="block text-sm hover:underline">
              alvaroaburto71@gmail.com
            </a>
            <a href="tel:+50664670470" className="block text-sm hover:underline">
              +506 64670470
            </a>
            <a href="https://www.linkedin.com/in/alvaro-aburto-dev/" className="block text-sm hover:underline">
              LINKEDIN
            </a>
          </div>

          {/* Studio Info Column */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-sm mb-2">Studio</h3>
              <div className="space-y-1">
                <p className="text-sm">Carosello Lab</p>
                <p className="text-sm">via C. Darwin 8,</p>
                <p className="text-sm">555 GUANACASTE</p>
                <p className="text-sm">COSTA RICA</p>
              </div>
            </div>
            
            <div>
              <h3 className="uppercase text-sm mb-2">Remote Office</h3>
              <div className="space-y-1">
                <p className="text-sm">CaroselloLab srl</p>
                <p className="text-sm">Circonvallazione Clodia, 82</p>
                <p className="text-sm">00195 - COSTA RICA (CR) LIBERIA</p>
              </div>
            </div>
          </div>

          {/* Brands & Policies Column */}
          <div className="space-y-6">
            <div>
              <h3 className="uppercase text-sm mb-2">Our Brands</h3>
              <div className="space-y-1">
                <a href="#" className="block text-sm hover:underline">ALVARO_ABURTO</a>
                <a href="#" className="block text-sm hover:underline">AGENCY Designers DREAMS</a>
                <a href="https://bento.me/alvaroaburto" className="block text-sm hover:underline">BENTO</a>
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
          <h1 className="text-[12rem] font-bold leading-none tracking-tighter">ADDW</h1>
        </div>
      </div>
    </footer>
  );
}
