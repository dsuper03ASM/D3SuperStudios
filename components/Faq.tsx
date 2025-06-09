import { faqs } from "@/data/services";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React from "react";

export default function Faq() {
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    return (
        <section id="faq" className="py-32 px-4 relative">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <h2 className="text-6xl font-bold text-white mb-6 tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-400 font-light">Everything you need to know about working with us</p>
                  </motion.div>
        
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="relative rounded-3xl border border-white/10 backdrop-blur-xl bg-gradient-to-br from-white/5 to-transparent hover:border-white/20 transition-all duration-500 overflow-hidden">
                          <div
                            className="cursor-pointer p-8"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-white text-lg font-semibold pr-8">{faq.question}</h3>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                  openFaq === index ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                          <motion.div
                            initial={false}
                            animate={{
                              height: openFaq === index ? "auto" : 0,
                              opacity: openFaq === index ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <p className="text-gray-400 font-light leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
        
    )
}