"use client";

import type React from "react";
import { useState } from "react";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("contact");

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setStatusMessage(data.message || t("form.success"));
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.error || t("form.error"));
      }
    } catch {
      setSubmitStatus("error");
      setStatusMessage(t("form.connectionError"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t("info.address.title"),
      details: t("info.address.details"),
      color: "bg-blue-500",
    },
    {
      icon: Phone,
      title: t("info.phone.title"),
      details: t("info.phone.details"),
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: t("info.email.title"),
      details: t("info.email.details"),
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: t("info.hours.title"),
      details: t("info.hours.details"),
      color: "bg-orange-500",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#031e32] mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            {t("description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#031e32]">
                  {t("form.title")}
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
                        {t("form.name")}
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
                        {t("form.email")}
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
                      {t("form.subject")}
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
                      {t("form.message")}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={20}
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
                    {isSubmitting ? t("form.sending") : t("form.submit")}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Infos contact */}
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

            {/* Bloc d'aide */}
            <Card className="bg-gradient-to-br from-[#FF8200] to-[#ffc180] text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{t("help.title")}</h3>
                <p className="mb-4 opacity-90">{t("help.description")}</p>
                <Button
                  variant="secondary"
                  className="bg-white text-[#FF8200] hover:bg-gray-100"
                >
                  {t("help.cta")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
