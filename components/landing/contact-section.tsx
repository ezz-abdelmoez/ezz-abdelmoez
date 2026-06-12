"use client";

import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "ezzabdelmoez@gmail.com",
      href: "mailto:ezzabdelmoez@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201014080630",
      href: "tel:+201014080630"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ezz-abdelmoez",
      href: "https://www.linkedin.com/in/ezz-abdelmoez"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ezzabdelmoez",
      href: "https://github.com/ezzabdelmoez"
    }
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-display text-white mb-8">Let&apos;s Work Together</h2>
          <div className="h-px bg-gradient-to-r from-white/20 via-white/30 to-transparent w-24" />
        </div>

        {/* Main CTA */}
        <div className="mb-16">
          <p className="text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, feel free to get in touch!
          </p>
          <a href="mailto:ezzabdelmoez@gmail.com">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 text-base font-medium">
              Send me an email
            </Button>
          </a>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-white/60 group-hover:text-white mb-4 transition-colors" />
                <h3 className="text-sm font-mono text-white/50 mb-2">{contact.label}</h3>
                <p className="text-white font-medium hover:text-white/80 transition-colors break-all">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-white/50 text-sm">
            Available for remote and on-site opportunities. Ready to join immediately. Based in Cairo, Egypt 🌍
          </p>
        </div>
      </div>
    </section>
  );
}
