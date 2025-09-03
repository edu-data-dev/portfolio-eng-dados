import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              DataEngineer.dev
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Transformando dados em insights através de engenharia de qualidade. 
              Combinando experiência em testes com expertise em dados para soluções robustas e escaláveis.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://linkedin.com', '_blank')}
                className="hover:bg-blue-500 hover:text-white hover:border-blue-500"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://github.com', '_blank')}
                className="hover:bg-gray-800 hover:text-white hover:border-gray-800"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('mailto:contato@exemplo.com', '_blank')}
                className="hover:bg-red-500 hover:text-white hover:border-red-500"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navegação</h4>
            <div className="space-y-2">
              {[
                { label: 'Sobre Mim', href: '#about' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Especialidades</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>ETL/ELT Pipelines</div>
              <div>Azure Data Factory</div>
              <div>Apache Airflow</div>
              <div>Databricks</div>
              <div>Data Quality</div>
              <div>Arquitetura Medallion</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 DataEngineer.dev. Todos os direitos reservados.
          </div>
          
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Voltar ao Topo
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;