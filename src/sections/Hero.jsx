import { Button } from "../components/Button";
import heroBg from "../assets/hero-bg.jpg";
import profileImage from "../assets/goodp-pic.jpeg";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const skills = [
  "React",
  "TypeScript",
  "JavaScripts",
  "Java",
  "Node.js",
  "MongoDB",
  "CSS",
  "Tailwind CSS",
  "MySQL",
  "Git",
  "GitHub Actions",
  "API",
  "OOP",
];

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero image"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/*green dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, index) => (
          <div
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animantionDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/*content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/*left - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • FullStack Specialist
              </span>
            </div>
            {/*headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white ">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Momen Alhaddad — a software engineer specializing in
                React, NodeJs, JavaScript and TypeScript, with greate experience
                in styling with Tailwindcss. Had an internship in ASP.net core.
                I build scalable, performant web applications that users love.
              </p>
            </div>

            {/*buttons CTA*/}

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button href="#contact" size="lg">
                Contact Me <ArrowRight className=" h-5 w-5" />
              </Button>
              <AnimatedBorderButton
                href="/momen-cv.pdf"
                download="momen-cv.pdf"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Download CV
                </span>
              </AnimatedBorderButton>
            </div>
            {/*social icons */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-muted-foreground text-sm">Follow Me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/momenHaddad" },
                {
                  icon: FaLinkedin,
                  href: "https://www.linkedin.com/in/momen-alhaddad-509854319/",
                },
              ].map((social, idx) => (
                <a
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  href={social.href}
                  key={idx}
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/*right - my picture */}
          <div className=" relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
                rounded-3xl bg-gradient-to-br 
                from-primary/30 via-transparent 
                to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={profileImage}
                  alt="Momen Alhaddad"
                  className="rounded-2xl w-fulll object-cover"
                />
                {/*floating and stats badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-xs text-primary-foreground">
                    Years Exp.
                  </div>
                  <div className="text-xs text-primary-foreground">
                    Honor Grad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*skills bar list */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies i work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, skills].map((skills, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skills}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
