"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message);
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue");
      }
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details:
        "Cité AADL 416 Logt. Gué de Constantine, Bat S01, Kouba – Alger (16055)",
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details:
        "+213 (0) 23 53 51 13\n+213 (0) 555 777 289\n+213 (0) 774 244 459",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@weoneservices.dz\ncontact@weoneit.net",
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Dim-Jeu: 9h-17h",
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            Prêt à démarrer votre projet ? Notre équipe est là pour vous
            accompagner. Contactez-nous dès aujourd'hui pour discuter de vos
            besoins.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#031e32]">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus !== "idle" && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span>{statusMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#FF8200] focus:ring-[#FF8200]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="border-gray-300 focus:border-[#FF8200] focus:ring-[#FF8200]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#FF8200] focus:ring-[#FF8200]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="border-gray-300 focus:border-[#FF8200] focus:ring-[#FF8200]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF8200] hover:bg-[#ff9b33] text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className={`${info.color} p-3 rounded-lg mr-4`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#031e32] mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-[#FF8200] to-[#ffc180] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Besoin d'aide ?</h3>
                <p className="mb-4 opacity-90">
                  Notre équipe est disponible pour répondre à toutes vos
                  questions et vous guider dans vos projets.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-[#FF8200] hover:bg-gray-100"
                >
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
