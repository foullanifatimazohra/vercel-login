import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, UserCheck, DollarSign } from "lucide-react"

export function Partners() {
  const partnerCategories = [
    {
      title: "Nos Partenaires",
      icon: Users,
      description: "Réseau de partenaires stratégiques pour accompagner votre croissance",
      color: "bg-blue-500",
      benefits: [
        "Accès à un réseau étendu",
        "Collaborations stratégiques",
        "Opportunités de développement",
        "Synergies d'affaires",
      ],
    },
    {
      title: "Nos Consultants & Experts",
      icon: UserCheck,
      description: "Équipe d'experts qualifiés dans tous les domaines d'activité",
      color: "bg-green-500",
      benefits: [
        "Expertise multisectorielle",
        "Accompagnement personnalisé",
        "Conseils stratégiques",
        "Formation spécialisée",
      ],
    },
    {
      title: "Investisseurs & Sponsors",
      icon: DollarSign,
      description: "Réseau d'investisseurs pour financer vos projets innovants",
      color: "bg-purple-500",
      benefits: [
        "Financement de projets",
        "Capital de développement",
        "Accompagnement financier",
        "Mise en relation investisseurs",
      ],
    },
  ]

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">Notre Écosystème</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Rejoignez un écosystème dynamique composé de partenaires, d'experts et d'investisseurs engagés dans votre
            réussite.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {partnerCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-[#031e32] mb-2">{category.title}</CardTitle>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#031e32] hover:bg-[#354b5b] text-white">Rejoindre le réseau</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#031e32] to-[#354b5b] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à rejoindre notre écosystème ?</h3>
            <p className="text-lg mb-6 opacity-90 text-pretty">
              Connectez-vous avec des entrepreneurs, des experts et des investisseurs partageant votre vision.
            </p>
            <Button size="lg" className="bg-[#FF8200] hover:bg-[#ff9b33] text-white">
              Devenir partenaire
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
