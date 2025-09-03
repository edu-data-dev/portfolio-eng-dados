import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Database, 
  Code, 
  GitBranch, 
  Layers, 
  Workflow,
  BarChart3,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Microsoft Azure", level: "AZ-900 Certified", color: "bg-blue-500" },
        { name: "Azure Data Factory", level: "Advanced", color: "bg-blue-600" },
        { name: "Azure Data Lake", level: "Advanced", color: "bg-blue-700" },
        { name: "Databricks", level: "Intermediate", color: "bg-orange-500" }
      ],
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "ETL/ELT Pipelines", level: "Expert", color: "bg-green-500" },
        { name: "SQL & PostgreSQL", level: "Advanced", color: "bg-green-600" },
        { name: "DBeaver", level: "Advanced", color: "bg-green-700" },
        { name: "Data Modeling", level: "Advanced", color: "bg-emerald-500" }
      ],
      gradient: "from-green-500/20 to-emerald-600/20"
    },
    {
      title: "Programming & Scripts",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: "Advanced", color: "bg-yellow-500" },
        { name: "Data Wrangling", level: "Advanced", color: "bg-yellow-600" },
        { name: "Pandas & NumPy", level: "Advanced", color: "bg-amber-500" },
        { name: "API Integration", level: "Intermediate", color: "bg-orange-600" }
      ],
      gradient: "from-yellow-500/20 to-amber-600/20"
    },
    {
      title: "Orchestration & Workflow",
      icon: <Workflow className="h-6 w-6" />,
      skills: [
        { name: "Apache Airflow", level: "Advanced", color: "bg-purple-500" },
        { name: "Task Scheduling", level: "Advanced", color: "bg-purple-600" },
        { name: "Monitoring", level: "Advanced", color: "bg-violet-500" },
        { name: "Error Handling", level: "Expert", color: "bg-indigo-500" }
      ],
      gradient: "from-purple-500/20 to-violet-600/20"
    },
    {
      title: "Architecture & Design",
      icon: <Layers className="h-6 w-6" />,
      skills: [
        { name: "Medallion Architecture", level: "Advanced", color: "bg-rose-500" },
        { name: "Data Lake Design", level: "Advanced", color: "bg-pink-500" },
        { name: "Layered Architecture", level: "Advanced", color: "bg-rose-600" },
        { name: "Scalability", level: "Advanced", color: "bg-red-500" }
      ],
      gradient: "from-rose-500/20 to-pink-600/20"
    },
    {
      title: "Quality & Testing",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: "Data Quality", level: "Expert", color: "bg-teal-500" },
        { name: "Test Automation", level: "Expert", color: "bg-teal-600" },
        { name: "Validation", level: "Expert", color: "bg-cyan-500" },
        { name: "Monitoring", level: "Advanced", color: "bg-blue-500" }
      ],
      gradient: "from-teal-500/20 to-cyan-600/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            Habilidades Técnicas
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Stack Tecnológico</span> Completo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ferramentas e tecnologias que utilizo para construir soluções de dados robustas e escaláveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-card hover-lift">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.gradient} text-primary`}>
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge 
                          variant="secondary" 
                          className="text-xs px-2 py-1"
                        >
                          {skill.level}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skill.level === 'Expert' ? '95%' : 
                                  skill.level === 'Advanced' ? '85%' : 
                                  skill.level === 'Intermediate' ? '70%' : '60%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Certificações & Credenciais</h3>
            <p className="text-muted-foreground">Validação formal das minhas competências técnicas</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            <div className="text-center hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-blue-500">AZ</span>
              </div>
              <p className="text-sm font-medium">Azure Fundamentals</p>
            </div>
            
            <div className="text-center hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-orange-500">AWS</span>
              </div>
              <p className="text-sm font-medium">Cloud Practitioner</p>
            </div>

            <div className="text-center hover:opacity-100 transition-opacity">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center mb-2">
                <span className="text-2xl font-bold text-green-500">GCP</span>
              </div>
              <p className="text-sm font-medium">AI Essentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;