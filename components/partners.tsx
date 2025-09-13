import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserCheck, DollarSign } from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons = [Users, UserCheck, DollarSign];
const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500"];

export async function Partners() {
  const t = await getTranslations("partners");
  const categories = t.raw("categories");

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("description")}
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {categories.map((category: any, index: number) => {
            const Icon = icons[index];
            const color = colors[index];
            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#031e32] mb-2">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {category.benefits.map(
                      (benefit: string, benefitIndex: number) => (
                        <li
                          key={benefitIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3 rtl:ml-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      )
                    )}
                  </ul>
                  <Button
                    aria-label="call to action"
                    className="w-full bg-[#031e32] hover:bg-[#354b5b] text-white"
                  >
                    {t("ctaCategory")}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Highlight CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#031e32] to-[#354b5b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t("highlight.title")}</h3>
            <p className="text-lg mb-6 opacity-90 text-pretty">
              {t("highlight.description")}
            </p>
            <Button
              aria-label="highlight"
              size="lg"
              className="bg-[#FF8200] hover:bg-[#ff9b33] text-white"
            >
              {t("highlight.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
