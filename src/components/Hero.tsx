import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    // This would trigger CV download
    console.log('Downloading CV...');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={profilePhoto}
                alt="Data Engineer Profile"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/50 shadow-2xl animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Engenharia de Dados</span>
            <br />
            <span className="text-foreground">além das pipelines</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Arquitetura, qualidade e impacto real através de dados.
            <br className="hidden md:block" />
            Transformando análise de testes em soluções de dados escaláveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={downloadCV}
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover-lift"
            >
              <Download className="mr-2 h-5 w-5" />
              Baixar CV
            </Button>
            
            <Button 
              onClick={scrollToAbout}
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown 
              className="h-8 w-8 text-primary mx-auto cursor-pointer hover:text-primary-glow transition-colors"
              onClick={scrollToAbout}
            />
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rounded-lg rotate-45 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-accent/30 rounded-full animate-bounce" />
      <div className="absolute top-1/2 right-20 w-8 h-8 bg-primary/20 rounded-full animate-ping" />
    </section>
  );
};

export default Hero;