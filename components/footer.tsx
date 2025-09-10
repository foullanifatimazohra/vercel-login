import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const services = ["Incubateur/Accélérateur", "Coworking Space", "Formations", "Conseil & Assistance"]

  const quickLinks = [
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Partenaires", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  return (
    <footer className="bg-[#031e32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center text-2xl font-bold mb-4">
              <img src="/weone-services-logo.jpg" alt="WeOne Services Logo" className="h-8 w-8 mr-3" />
              WeOne <span className="text-[#FF8200]">Services</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre partenaire de confiance pour l'innovation et la croissance entrepreneuriale en Algérie.
            </p>
            <div className="space-y-2">
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <span>Cité AADL 416 Logt. Gué de Constantine, Bat S01, Kouba – Alger (16055)</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <div>
                  <div>+213 (0) 23 53 51 13</div>
                  <div>+213 (0) 555 777 289</div>
                  <div>+213 (0) 774 244 459</div>
                </div>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <div>
                  <div>contact@weoneservices.dz</div>
                  <div>contact@weoneit.net</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-gray-300 hover:text-[#FF8200] transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF8200] transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Restez connecté</h3>
            <p className="text-gray-300 text-sm mb-4">
              Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos actualités.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="bg-[#354b5b] p-2 rounded-lg hover:bg-[#FF8200] transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} WeOne Services. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-300 hover:text-[#FF8200] text-sm transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="#" className="text-gray-300 hover:text-[#FF8200] text-sm transition-colors duration-200">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
