import { Link } from "@/i18n/navigation";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("footer");

  const services = t.raw("services.items") as { label: string; href: string }[];
  const quickLinks = t.raw("quickLinks.items") as {
    label: string;
    href: string;
  }[];
  const socialLinks = t.raw("social.links") as {
    label: string;
    href: string;
  }[];

  return (
    <footer className="bg-[#031e32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center text-2xl font-bold mb-4">
              <img
                src={t("company.logo")}
                alt={t("company.name")}
                className="h-8 w-8 mr-3"
              />
              {t("company.name").split(" ")[0]}{" "}
              <span className="text-[#FF8200]">
                {t("company.name").split(" ")[1]}
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t("company.description")}
            </p>
            <div className="space-y-2">
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <span>{t("company.address")}</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <div>
                  {t
                    .raw("company.phones")
                    .map((phone: string, index: number) => (
                      <div key={index}>{phone}</div>
                    ))}
                </div>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-[#FF8200] mt-0.5 flex-shrink-0" />
                <div>
                  {t
                    .raw("company.emails")
                    .map((email: string, index: number) => (
                      <div key={index}>{email}</div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("services.title")}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#FF8200] transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {t("quickLinks.title")}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF8200] transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("social.title")}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t("social.description")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon =
                  social.label === "Facebook"
                    ? Facebook
                    : social.label === "Twitter"
                    ? Twitter
                    : social.label === "LinkedIn"
                    ? Linkedin
                    : Instagram;

                return (
                  <Link
                    key={index}
                    href={social.href}
                    className="bg-[#354b5b] p-2 rounded-lg hover:bg-[#FF8200] transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">{t("legal.copyright")}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href={t("legal.privacyPolicy.href")}
                className="text-gray-300 hover:text-[#FF8200] text-sm transition-colors duration-200"
              >
                {t("legal.privacyPolicy.label")}
              </Link>
              <Link
                href={t("legal.terms.href")}
                className="text-gray-300 hover:text-[#FF8200] text-sm transition-colors duration-200"
              >
                {t("legal.terms.label")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
