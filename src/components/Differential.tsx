import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, Eye, Target } from "lucide-react";

const Differential = () => {
  const differentials = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Qualidade como DNA",
      description: "Experiência em testes trouxe uma mentalidade única de validação e qualidade de dados. Implemento verificações em cada etapa do pipeline.",
      highlights: ["Data quality checks automáticos", "Testes preditivos", "Validação em tempo real"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Otimização Inteligente",
      description: "Abordagem analítica para identificar gargalos e oportunidades de melhoria, resultando em pipelines até 40% mais eficientes.",
      highlights: ["Performance tuning", "Otimização de custos", "Paralelização inteligente"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visão Sistêmica",
      description: "Compreendo como os dados impactam todo o ecossistema de negócio, não apenas a parte técnica. Foco em soluções que agregam valor real.",
      highlights: ["Análise de impacto", "Arquitetura end-to-end", "ROI mensurável"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precisão e Confiabilidade",
      description: "Construção de soluções robustas com alta disponibilidade. Monitoramento proativo e recuperação automática de falhas.",
      highlights: ["99.9% uptime", "Alertas inteligentes", "Auto-healing systems"],
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="differential" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-accent text-accent">
            Visão Diferencial
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que me torna <span className="gradient-text">Único</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A combinação de background em testes com expertise em dados cria uma perspectiva única 
            focada em qualidade, otimização e impacto real de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <Card key={index} className="project-card hover-lift overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg flex-shrink-0`}>
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} mr-3`} />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium italic text-foreground mb-6 leading-relaxed">
              "Dados sem qualidade são apenas ruído. 
              <span className="gradient-text"> Minha missão é transformar ruído em insights confiáveis.</span>"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-muted-foreground font-medium">Filosofia de Trabalho</span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differential;