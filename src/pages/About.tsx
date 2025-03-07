import React from 'react';
import { Users, Award, Clock, Star, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      value: "500+",
      label: "Patenkintų klientų"
    },
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      value: "15+",
      label: "Metų patirties"
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      value: "24/7",
      label: "Klientų aptarnavimas"
    }
  ];

  const values = [
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: "Profesionalumas",
      description: "Mūsų komanda nuolat tobulina savo žinias ir įgūdžius"
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Patikimumas",
      description: "Užtikriname konfidencialumą ir saugų duomenų tvarkymą"
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: "Efektyvumas",
      description: "Dirbame greitai ir kokybiškai, taupydami jūsų laiką"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
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
              Apie mus
            </motion.h1>
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Profesionali buhalterinių paslaugų komanda
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Mūsų istorija ir patirtis
              </h2>
              <p className="text-gray-600 mb-6">
                Nuo pat įkūrimo 2010 metais, mūsų tikslas buvo teikti aukščiausios kokybės buhalterines paslaugas Lietuvos verslui. Per šiuos metus užsitarnavome patikimo partnerio reputaciją ir išplėtėme savo paslaugų spektrą.
              </p>
              <p className="text-gray-600">
                Šiandien mūsų komandą sudaro patyrę specialistai, kurie nuolat tobulina savo žinias ir seka naujausias tendencijas buhalterinės apskaitos srityje.
              </p>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-orange-50 p-6 rounded-lg">
                  {stat.icon}
                  <h3 className="text-2xl font-bold mt-4 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mūsų vertybės
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Mūsų komanda
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Laura Kazlauskienė</h3>
                <p className="text-gray-600">Vyriausioji buhalterė</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Agnė Petraitienė</h3>
                <p className="text-gray-600">Finansų analitikė</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Tomas Paulauskas</h3>
                <p className="text-gray-600">Mokesčių konsultantas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Mūsų biuras</h2>
              <p className="text-gray-600 mb-6">
                Mūsų biuras įsikūręs patogioje Vilniaus miesto vietoje, lengvai pasiekiamoje tiek viešuoju, tiek nuosavu transportu.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Darbo laikas</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Pirmadienis - Penktadienis</span>
                    <span>8:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Šeštadienis</span>
                    <span>Pagal susitarimą</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sekmadienis</span>
                    <span>Nedirbame</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="h-[400px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.2995081927884!2d25.279903815859584!3d54.687155980279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9417621fb72d%3A0x9f881e6eb7ad7bd9!2sGedimino%20pr.%2C%20Vilnius%2C%20Lithuania!5e0!3m2!1sen!2sus!4v1625689121177!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;