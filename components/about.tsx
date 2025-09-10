import { getTranslations } from "next-intl/server";

export async function About() {
  const t = await getTranslations("about");
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6 text-balance">
            {t("title")}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 text-pretty">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
