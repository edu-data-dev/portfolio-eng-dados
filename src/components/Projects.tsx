import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Brain, Workflow } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ETL para Memória de Contexto de IA",
      description: "Pipeline completa para alimentar sistemas de IA com dados contextuais estruturados, incluindo processamento de texto, vetorização e indexação para busca semântica.",
      icon: <Brain className="h-6 w-6" />,
      tags: ["Python", "Azure Data Factory", "Vector DB", "NLP", "Airflow"],
      features: [
        "Processamento de documentos em batch",
        "Vetorização com embeddings",
        "Pipeline de qualidade de dados",
        "Monitoramento automatizado"
      ],
      status: "Em Produção",
      statusColor: "bg-green-500",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      title: "Pipelines de Dados em Produção",
      description: "Arquitetura completa de dados utilizando Medallion com camadas Bronze, Silver e Gold. Processamento de milhões de registros diários com alta disponibilidade.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Databricks", "Delta Lake", "Azure", "Spark", "SQL"],
      features: [
        "Arquitetura Medallion (Bronze/Silver/Gold)",
        "Processamento incremental",
        "Data quality checks",
        "Recuperação automática de falhas"
      ],
      status: "Produção",
      statusColor: "bg-green-500",
      gradient: "from-blue-500/20 to-teal-500/20"
    },
    {
      title: "Orquestração Avançada com Airflow",
      description: "Sistema de orquestração complexo gerenciando múltiplas fontes de dados, transformações e cargas. Inclui alertas inteligentes e recuperação automática.",
      icon: <Workflow className="h-6 w-6" />,
      tags: ["Apache Airflow", "Docker", "PostgreSQL", "Python", "Monitoring"],
      features: [
        "DAG's dinâmicos e reutilizáveis",
        "Paralelização otimizada",
        "Alertas contextuais",
        "Dashboard personalizado"
      ],
      status: "Ativo",
      statusColor: "bg-blue-500",
      gradient: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            Projetos Recentes
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções de <span className="gradient-text">Impacto Real</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Projetos que demonstram minha capacidade de criar soluções de dados escaláveis e eficientes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card hover-lift h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} text-primary`}>
                    {project.icon}
                  </div>
                  <Badge 
                    className={`${project.statusColor} text-white px-3 py-1`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                    Características Principais
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-primary">
                    Stack Tecnológico
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => console.log('View on GitHub')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => console.log('View documentation')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Docs
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            onClick={() => console.log('View all projects on GitHub')}
          >
            <Github className="h-5 w-5 mr-2" />
            Ver Todos os Projetos no GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;