import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileCheck, Database } from "lucide-react";

const UtilitiesSection = () => {
  const utilities = [
    {
      icon: FileCheck,
      title: "എല്ലിസിബിരിട്ടീസ് മാനത്വ",
      description: "ചെച്ക് യുര് എലിജിബിലിട്ടി ആൻഡ് സ്റ്റാതു സ് ഓൺലൈൻ",
      subtitle: "അപ്ലിക്കേഷൻ വെരിഫിക്കേഷൻ",
      action: "Click to access →"
    },
    {
      icon: Database,
      title: "സുമംതൊമോല് നി",
      description: "സുമോത്രാനാശാത്ത് ചുക്കു വാന്",
      subtitle: "തിഷൂമനാദ് മുന്നിൽ",
      action: "Click to access →"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Useful Utilities</h2>
          <p className="text-muted-foreground text-lg">
            Quick access to helpful tools and resources for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {utilities.map((utility, index) => (
            <Card key={index} className="bg-card border shadow-soft hover:shadow-card transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <utility.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  {utility.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-2">{utility.description}</p>
                <p className="text-sm text-muted-foreground mb-6">{utility.subtitle}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {utility.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilitiesSection;