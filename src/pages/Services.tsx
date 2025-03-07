import React from 'react';
import { Calculator, FileText, Users, PieChart, Headphones, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-12 h-12 text-orange-500" />,
      title: "Buhalterinė apskaita",
      description: "Pilnas buhalterinės apskaitos tvarkymas, įskaitant mokesčių deklaravimą ir finansinių ataskaitų rengimą.",
      features: [
        "Kasdienė buhalterija",
        "Mokesčių apskaičiavimas",
        "Finansinės ataskaitos",
        "Konsultacijos"
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-500" />,
      title: "Įmonių steigimas",
      description: "Padedame įsteigti įvairių tipų įmones, tvarkome visus reikalingus dokumentus.",
      features: [
        "Dokumentų paruošimas",
        "Teisinės konsultacijos",
        "Įstatų rengimas",
        "Registracija"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: "Personalo valdymas",
      description: "Visapusiškas personalo dokumentų tvarkymas ir darbo užmokesčio apskaita.",
      features: [
        "Darbo sutartys",
        "Atostogų apskaita",
        "Algalapių ruošimas",
        "Sodros ataskaitos"
      ]
    },
    {
      icon: <PieChart className="w-12 h-12 text-orange-500" />,
      title: "Verslo konsultacijos",
      description: "Strateginės verslo konsultacijos ir finansų planavimas.",
      features: [
        "Verslo planai",
        "Finansų analizė",
        "Biudžeto planavimas",
        "Rizikų vertinimas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative">
          <div className="max-w-2xl text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Mūsų paslaugos
            </motion.h1>
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Profesionalios buhalterinės ir verslo paslaugos
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:border-orange-500 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Kodėl rinktis mus?</h2>
            <p className="text-gray-600">
              Mūsų komanda teikia aukščiausios kokybės paslaugas, pritaikytas individualiems jūsų verslo poreikiams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Patyrusi komanda</h3>
              <p className="text-gray-600">
                Mūsų specialistai turi ilgametę patirtį buhalterinės apskaitos srityje
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kokybės garantija</h3>
              <p className="text-gray-600">
                Užtikriname aukščiausią paslaugų kokybę ir atitikimą teisės aktų reikalavimams
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Pagalba</h3>
              <p className="text-gray-600">
                Visada esame pasiruošę padėti ir atsakyti į jūsų klausimus
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pradėkite bendradarbiavimą jau šiandien
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Susisiekite su mumis ir gaukite nemokamą konsultaciją
          </p>
          <Link
            to="/kontaktai"
            className="inline-block bg-white text-orange-500 px-8 py-3 rounded-md font-medium hover:bg-orange-50 transition-colors"
          >
            Susisiekti
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;