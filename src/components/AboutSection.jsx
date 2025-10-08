import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Us</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            {/* <p className="text-foreground">
              Di Novera Code, kita percaya bahwa website bukan cuma soal tampil aesthetic, tapi juga soal impact. We mix creativity, modern tech, and attention to detail untuk bikin solusi digital yang bener-bener ngefek buat brand kamu.
            </p>
            <p className="text-foreground">
              Dari landing page kece sampai aplikasi web yang powerful, every pixel has a purpose, every line of code has a goal. Bareng kami, brand kamu nggak cuma online, tapi juga standout di dunia digital.
            </p> */}
            <p className="text-foreground">Halo! Kami dari Novera Code, tim kecil dengan big passion buat bikin website kece dan berfaedah. Kita percaya setiap brand punya cerita, dan tugas kita adalah bikin cerita itu shine online.</p>
            <p className="text-foreground">Whether it’s a simple landing page or a full-on web app, we keep it fun, modern, and impactful. Bareng kami, kamu nggak cuma punya website — kamu punya digital presence yang bikin orang inget.</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#projects" className="cosmic-button">
                View Projects
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">Kami bikin website & web app yang bukan cuma estetik tapi juga powerful. From simple pages to complex systems, we keep it modern, smooth, and scalable.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">Desain yang clean, responsif, dan user-friendly biar brand kamu keliatan profesional. Every click feels effortless & keeps people coming back.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Brand & Digital Strategy</h4>
                  <p className="text-muted-foreground">Bukan cuma soal coding, tapi juga bikin strategi biar bisnis kamu grow online. We craft digital solutions that actually work for your goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
