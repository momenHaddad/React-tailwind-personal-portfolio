import { Brain, Code2, Sparkles, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "I Build",
    description:
      "From frontend interfaces to backend APIs and databases, I enjoy building complete solutions from the ground up.",
  },
  {
    icon: Brain,
    title: "I Solve",
    description:
      "I approach problems by understanding the requirements, breaking them down, and finding practical solutions.",
  },
  
  {
    icon: Users,
    title: "I Collaborate",
    description:
      "I value clear communication, teamwork, and understanding different perspectives when building software.",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Development",
    description:
      "Leveraging AI tools and models to accelerate development, explore solutions, debug efficiently, and improve productivity.",
  },
];


export const About = () =>{
    return (
      <section className="py-32 relative overflow-hidden" id="about">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/*left col */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                  About me
                </span>
              </div>
              <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-400 text-secondary-foreground">
                Building the future,
                <span className="font-serif italic font-normal text-white">
                  {" "}
                  one component at a time.
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                  I’m a Software Engineer and Software Engineering graduate from
                  Istanbul Okan University, where I graduated with honors. I
                  focus on developing practical, reliable, and maintainable
                  software, with a strong interest in full-stack web
                  development. I have hands-on experience with React,
                  TypeScript, Tailwind CSS, Node.js, and ASP.NET Core, as well
                  as building web applications, REST APIs, database-driven
                  systems, authentication, and role-based functionality.
                </p>
                <p>
                  In addition to my technical skills, I’m fluent in Arabic,
                  English, and Turkish, allowing me to communicate effectively
                  with diverse teams, clients, and users. This multilingual
                  background helps me collaborate across different cultures,
                  support multilingual digital experiences, and contribute
                  effectively in both local and international environments.
                </p>
                <p>
                  I approach software development with a strong focus on
                  continuous learning, problem-solving, and building solutions
                  that are both useful and maintainable. I also leverage modern
                  AI tools to improve productivity, explore solutions, and work
                  more efficiently while maintaining a solid understanding of
                  the code and technologies I use.
                </p>
              </div>
            </div>
            {/*right col- highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl animate-fade-in"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className=" w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary"/>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}