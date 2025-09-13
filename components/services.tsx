import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Building,
  GraduationCap,
  HeadphonesIcon,
  Users,
  MapPin,
  FileText,
  CheckCircle,
  Gift,
  Star,
  BookOpen,
  Calculator,
  FileCheck,
  Scale,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons: Record<string, any> = {
  Rocket,
  Building,
  GraduationCap,
  HeadphonesIcon,
  Users,
  MapPin,
  FileText,
  CheckCircle,
  Gift,
  Star,
  BookOpen,
  Calculator,
  FileCheck,
  Scale,
};

export async function Services() {
  const t = await getTranslations("services");

  // icons by service index
  const serviceIcons = [Rocket, Building, GraduationCap, HeadphonesIcon];
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-orange-500",
  ];

  const services = t.raw("list");

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service: any, index: number) => {
            const Icon = serviceIcons[index];
            const color = colors[index];

            return (
              <Card
                key={index}
                className="hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center mb-4">
                    <div className={`${color} p-3 rounded-lg mr-4 rtl:ml-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-wrap text-[#031e32]">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.items.map((item: any, itemIndex: number) => {
                      const ItemIcon = icons[item.icon] || CheckCircle; // fallback
                      return (
                        <div
                          key={itemIndex}
                          className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="bg-[#FF8200] p-2 rounded-md mr-3 rtl:ml-3 flex-shrink-0">
                            <ItemIcon className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#031e32] mb-1">
                              {item.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-6">
                    <Button
                      aria-label="call to action"
                      className="w-full text-white border-0 hover:!bg-[#ff9b33]"
                      style={{ backgroundColor: "#FF8200", color: "#ffffff" }}
                    >
                      {t("cta")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
