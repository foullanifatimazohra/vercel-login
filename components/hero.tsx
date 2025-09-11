/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Target } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function Hero() {
  const t = await getTranslations("hero");

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-[#031e32] via-[#354b5b] to-[#031e32] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight text-balance"
                dangerouslySetInnerHTML={{ __html: t.raw("title") }}
              />

              <p className="text-xl text-gray-300 leading-relaxed text-pretty">
                {t("description")}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={t("cta.href")}>
                <Button
                  size="lg"
                  className="bg-[#FF8200] hover:bg-[#ff9b33] text-white"
                >
                  {t("cta.label")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href={t("contactUs.href")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#031e32] bg-transparent"
                >
                  {t("contactUs.label")}
                </Button>
              </Link>
            </div>

            {/* Ambition */}
            <div className="pt-8 mb-4">
              <h3 className="text-lg font-semibold text-gray-300 text-center">
                {t("ambition")}
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  {t("stats.startups.value")}
                </div>
                <div className="text-sm text-gray-300">
                  {t("stats.startups.label")}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  {t("stats.experts.value")}
                </div>
                <div className="text-sm text-gray-300">
                  {t("stats.experts.label")}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">
                  {t("stats.success.value")}
                </div>
                <div className="text-sm text-gray-300">
                  {t("stats.success.label")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="bg-gradient-to-r from-[#FF8200] to-[#ffc180] rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 text-[#031e32] transform -rotate-3">
                <h3 className="text-2xl font-bold mb-4">{t("join.title")}</h3>
                <ul className="space-y-3">
                  {t
                    .raw("join.features")
                    .map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3 rtl:ml-3"></div>
                        {feature}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
