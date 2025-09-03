import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Search, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Visão de Negócio",
      description: "Traduzindo necessidades de negócio em soluções de dados eficientes"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunicação",
      description: "Experiência em colaboração multidisciplinar e apresentação de insights"
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Pensamento Crítico",
      description: "Background em testes trouxe rigor analítico para arquitetura de dados"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Inovação",
      description: "Sempre buscando otimizações e soluções criativas para desafios complexos"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            Sobre Mim
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Da Análise de Testes à 
            <span className="gradient-text ml-2">Engenharia de Dados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Uma jornada única que combina rigor de qualidade com inovação em dados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Minha transição de <strong className="text-primary">Analista de Testes</strong> para 
                <strong className="text-primary"> Engenheiro de Dados</strong> não foi apenas uma mudança de carreira, 
                mas uma evolução natural que trouxe uma perspectiva única ao mundo dos dados.
              </p>
              
              <p className="text-lg leading-relaxed">
                O background em testes me ensinou a importância da <strong className="text-accent">qualidade</strong>, 
                <strong className="text-accent"> validação</strong> e <strong className="text-accent">pensamento sistêmico</strong>. 
                Hoje, aplico esses princípios na construção de pipelines robustas, 
                arquiteturas escaláveis e soluções de dados que realmente geram impacto.
              </p>

              <p className="text-lg leading-relaxed">
                Minha abordagem combina <strong className="text-primary">precisão técnica</strong> com 
                <strong className="text-primary"> visão estratégica</strong>, sempre focando em 
                como os dados podem impulsionar decisões de negócio mais inteligentes.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="skill-card p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 text-primary">
                      {highlight.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{highlight.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "3+", label: "Anos em Dados" },
            { number: "10+", label: "Projetos Entregues" },
            { number: "5+", label: "Tecnologias Cloud" },
            { number: "100%", label: "Foco em Qualidade" }
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;