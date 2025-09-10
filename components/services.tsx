"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
} from "lucide-react"

export function Services() {
  const services = [
    {
      title: "Incubateur/Accélérateur",
      icon: Rocket,
      color: "bg-blue-500",
      items: [
        { icon: Users, title: "Accompagnement", description: "Suivi personnalisé de votre projet" },
        { icon: BookOpen, title: "Encadrement", description: "Mentorat par des experts" },
        { icon: MapPin, title: "Espace de travail", description: "Bureaux équipés et modernes" },
        { icon: FileText, title: "Process", description: "Méthodologies éprouvées" },
        { icon: CheckCircle, title: "Candidature", description: "Processus de sélection transparent" },
      ],
    },
    {
      title: "Coworking Space",
      icon: Building,
      color: "bg-green-500",
      items: [
        { icon: Gift, title: "Packs & offres", description: "Formules adaptées à vos besoins" },
        { icon: Star, title: "Services annexes", description: "Services complémentaires" },
        { icon: CheckCircle, title: "Avantages", description: "Bénéfices exclusifs membres" },
        { icon: Rocket, title: "Special startups", description: "Offres dédiées aux startups" },
        { icon: FileText, title: "Formulaire", description: "Inscription simplifiée" },
      ],
    },
    {
      title: "Formations",
      icon: GraduationCap,
      color: "bg-purple-500",
      items: [
        { icon: BookOpen, title: "Séminaires Techniques", description: "Formation technique avancée" },
        { icon: Users, title: "Management", description: "Leadership et gestion d'équipe" },
        { icon: Star, title: "Soft Skills", description: "Compétences comportementales" },
        { icon: Rocket, title: "IT & AI", description: "Technologies et intelligence artificielle" },
        { icon: GraduationCap, title: "E-learning", description: "Formation en ligne" },
        { icon: BookOpen, title: "Langues", description: "Apprentissage des langues" },
      ],
    },
    {
      title: "Conseil & Assistance",
      icon: HeadphonesIcon,
      color: "bg-orange-500",
      items: [
        { icon: FileCheck, title: "Appro & Contrats", description: "Gestion des approvisionnements" },
        { icon: Calculator, title: "Budgets & Recouvrement", description: "Gestion financière" },
        { icon: FileText, title: "Appels d'offres", description: "Accompagnement marchés publics" },
        { icon: Calculator, title: "Conseil fiscal", description: "Optimisation fiscale" },
        { icon: Scale, title: "Droit d'affaires", description: "Conseil juridique entreprise" },
        {
          icon: Users,
          title: "Financement & Partenariat",
          description:
            "Assistance et accompagnement pour obtention de crédits bancaires ou des partenariats stratégiques",
        },
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Découvrez notre gamme complète de services conçus pour accompagner votre croissance et votre réussite
            entrepreneuriale.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  <div className={`${service.color} p-3 rounded-lg mr-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#031e32]">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="bg-[#FF8200] p-2 rounded-md mr-3 flex-shrink-0">
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#031e32] mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Button
                    className="w-full text-white border-0"
                    style={{ backgroundColor: "#FF8200", color: "#ffffff" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff9b33")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF8200")}
                  >
                    En savoir plus
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
