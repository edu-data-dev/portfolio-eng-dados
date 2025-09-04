import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Send, MapPin, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-primary text-primary">
            Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interessado em discutir projetos de dados, oportunidades ou apenas trocar ideias? 
            Estou sempre aberto a novas conexões e desafios.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Quick Contact */}
            <Card className="skill-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  Contato Direto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Brasil • Remote</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>GMT-3 • Flexível</span>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="skill-card hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-blue-500 hover:text-white hover:border-blue-500"
                  onClick={() => window.open('https://www.linkedin.com/in/eduardo-alves95/', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-3" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-gray-800 hover:text-white hover:border-gray-800"
                  onClick={() => window.open('https://github.com/edu-data-dev', '_blank')}
                >
                  <Github className="h-4 w-4 mr-3" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-red-500 hover:text-white hover:border-red-500"
                  onClick={() => window.open('mailto:eduardo.dataengineer@gmail.com', '_blank')}
                >
                  <Mail className="h-4 w-4 mr-3" />
                  Email
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-green-500 hover:text-white hover:border-green-500"
                  onClick={() => window.open('https://wa.me/5561998760988', '_blank')}
                >
                  <Phone className="h-4 w-4 mr-3" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="skill-card hover-lift">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                  <p className="font-semibold text-green-600 mb-2">Disponível para Projetos</p>
                  <p className="text-sm text-muted-foreground">
                    Aberto para freelances e oportunidades full-time
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e entrarei em contato em até 24 horas
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu.email@exemplo.com"
                        required
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      required
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva seu projeto ou dúvida..."
                      required
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-3 transition-all duration-300 hover:scale-105"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;