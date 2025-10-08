import { Instagram, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Feel free to reach out for collaborations or just a friendly hello!</p>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8"> Contact Information </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2"> Email </h4>
                <a href="mailto:noveracode@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  noveracode@gmail.com
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2"> Instagram </h4>
                <a href="https://www.instagram.com/noveracode" className="text-muted-foreground hover:text-primary transition-colors">
                  @noveracode
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <h4 className="font-medium mb-2"> Location </h4>
                <a className="text-muted-foreground hover:text-primary transition-colors">Surakarta, Jawa Tengah, Indonesia</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
