import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Brain, Workflow } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plataforma de Dados de E-commerce na Nuvem Azure ",
      description: "Implementação de uma plataforma de dados moderna e ponta a ponta na nuvem Microsoft Azure, simulando um ambiente de e-commerce de larga escala. O projeto engloba desde a geração de dados sintéticos até a orquestração, transformação e visualização em dashboards interativos, seguindo as melhores práticas de mercado com a Arquitetura Medallion.",
      icon: <Brain className="h-6 w-6" />,
      tags: ["Azure Data Factory", "Azure Databricks", "Azure Data Lake", "Azure Synapse Analytics", "Power BI", "PySpark", "SQL", "Python", "Arquitetura Medallion"],
      features: [
        "Arquitetura Medallion (Bronze, Silver, Gold)",
        "ETL/ELT com Orquestração em Nuvem",
        "Processamento de Big Data com PySpark",
        "Serving Layer com SQL Serverless",
        "Dashboards Executivos em Power BI"
      ],
      status: "Case ",
      statusColor: "bg-green-500",
      gradient: "from-purple-500/20 to-blue-500/20",
      githubUrl: "https://github.com/edu-data-dev/Azure-ecommerce-data-pipeline"
    },
    {
      title: "Pipeline de Dados e Arquitetura para ERP",
      description: "Solução completa para um desafio técnico de engenharia de dados, abordando a modelagem de dados transacionais complexos de um sistema ERP (JSON) e o design de uma arquitetura de ingestão escalável para um Data Lake, simulando um ambiente real de varejo (restaurantes).",
      icon: <Database className="h-6 w-6" />,
      tags: ["Python", "SQL", "ETL", "Data Modeling", "Data Lake", "SQLite", "JSON", "Arquitetura de Dados"],
      features: [
        "Modelagem de Dados Relacional",
        "Pipeline de Ingestão de Dados",
        "Design de Arquitetura de Data Lake",
        "Análise de Schema Drift"
      ],
      status: "test desafio",
      statusColor: "bg-green-500",
      gradient: "from-blue-500/20 to-teal-500/20",
      githubUrl: "https://github.com/edu-data-dev/Desafio-dados-erp",
      docsUrl: "https://trello.com/b/LhZDECUs/desafio-de-engenharia-de-dados-kanban-quadro-modelo"
    },
    {
      title: "Pipeline de Análise de Notícias com Orquestração e IA",
      description: "Pipeline de dados ponta a ponta que automatiza a coleta de notícias do portal G1, enriquece os dados com análise de sentimento e categorização através de IA (LLM), e os estrutura para análise. O projeto é totalmente orquestrado com Apache Airflow e containerizado com Docker, seguindo a arquitetura Medallion (Bronze/Silver).",
      icon: <Workflow className="h-6 w-6" />,
      tags: ["Python", "Apache Airflow", "Docker", "PostgreSQL", "OpenAI (LLM)", "Playwright", "ETL", "Web Scraping", "Arquitetura Medallion"],
      features: [
        "Coleta de Dados Dinâmica",
        "Orquestração Automatizada com Airflow",
        "Enriquecimento de Dados com IA:",
        "Infraestrutura como Código (IaC)",
        "Arquitetura de Dados Medallion:"
      ],
      status: "Ativo",
      statusColor: "bg-blue-500",
      gradient: "from-green-500/20 to-emerald-500/20",
      githubUrl: "https://github.com/edu-data-dev/AirDataPipeline",
      docsUrl: "https://trello.com/b/JTQZjq00/projeto-eng-dados01"
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
                    onClick={() => {
                      if (project.githubUrl) {
                        window.open(project.githubUrl, '_blank');
                      } else {
                        console.log('View on GitHub');
                      }
                    }}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      if (project.docsUrl) {
                        window.open(project.docsUrl, '_blank');
                      } else {
                        console.log('View documentation');
                      }
                    }}
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
            onClick={() => window.open('https://github.com/edu-data-dev', '_blank')}
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