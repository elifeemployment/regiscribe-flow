import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-banner.jpg";
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Hero Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-primary opacity-85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full bg-slate-800">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            E-life Society Self Employment
            <br />
            <span className="text-secondary">Registration Portal</span>
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-4xl mx-auto">
            സ്വയം തൊഴിലിന് ഉത്തരവാദിത്ത ആദായനവ്യുത്പാദന ധനകാര്യ സഹായം
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-4xl mx-auto">
            നാടുകൊട്ടാര ബ്ലോക്കിലെ എല്ലാ പഞ്ചായത്തുകളും ഇ-ലൈഫ് സെൽഫ് എംപ്ലോയ്മെന്റ് പ്രോജക്ട്
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                പുതുക്തരേറി കര്ഷക്ടിടാന്റ്
              </h3>
              <h4 className="text-lg font-medium text-foreground mb-4">പെണ്ടിംഗ്</h4>
              <p className="text-muted-foreground mb-6">
                പാസ്ടിരികാള് തൊഴില് ബാര്ച്ചികാരന്
                <br />
                സ്വയംതൊഴിലാളികളുടെ പണ്ഡിംഗ് ആപ്ലിക്കേഷന്കൾ പരിശോധിക്കുക
              </p>
              <Button asChild variant="secondary" size="lg" className="w-full">
                <Link to="/categories">View Applications</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-0 shadow-card hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                കോര്പെറേറ്റിവ് സ്കെമ്സ് കോല്സ്
              </h3>
              <h4 className="text-lg font-medium text-foreground mb-4">പെണ്ടിംഗ്</h4>
              <p className="text-muted-foreground mb-6">
                നാലാമുമ്പിൽ കോള്ള് സെറ്റ് നമ്പ്
                <br />
                പേര്ബിസിനെസ് ടൊരിംഗ് സേവനങ്ങൾ
              </p>
              <Button asChild variant="warning" size="lg" className="w-full">
                <Link to="/check-status">Check Status</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default HeroSection;