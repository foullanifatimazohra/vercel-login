import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Users, Target } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-[#031e32] via-[#354b5b] to-[#031e32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                Unlock potential, <span className="text-[#FF8200]">Build the future!</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed text-pretty">
                WeOne Services vous accompagne dans la réalisation de vos projets d'innovation. Incubateur,
                accélérateur, coworking et formations pour faire évoluer votre entreprise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#FF8200] hover:bg-[#ff9b33] text-white">
                Découvrir nos services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#031e32] bg-transparent"
              >
                Nous contacter
              </Button>
            </div>

            <div className="pt-8 mb-4">
              <h3 className="text-lg font-semibold text-gray-300 text-center">Notre ambition ...</h3>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-300">Startups accompagnées</div>
              </div>
              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-gray-300">Experts consultants</div>
              </div>
              <div className="text-center">
                <div className="bg-[#FF8200] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-gray-300">Taux de réussite</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-[#FF8200] to-[#ffc180] rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-xl p-6 text-[#031e32] transform -rotate-3">
                <h3 className="text-2xl font-bold mb-4">Rejoignez l'écosystème WeOne</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3"></div>
                    Accompagnement personnalisé
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3"></div>
                    Réseau d'experts et mentors
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3"></div>
                    Espaces de coworking modernes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#FF8200] rounded-full mr-3"></div>
                    Formations spécialisées
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
