import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">About E-life Society</h1>
          <p className="text-xl text-muted-foreground">
            Empowering communities through self-employment opportunities
          </p>
        </div>

        <div className="space-y-8">
          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                The E-life Society Self Employment Registration Portal is designed to provide 
                comprehensive support and opportunities for individuals seeking to establish 
                their own businesses and become self-employed. We focus on empowering communities, 
                especially women entrepreneurs, by providing accessible registration processes, 
                training programs, and financial assistance.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">What We Offer</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Multiple self-employment categories including agriculture, handicrafts, and food services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Affordable registration fees with significant discounts for eligible candidates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>24/7 support and guidance throughout the registration process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Quick application status tracking and transparent processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Training and mentorship programs for successful business establishment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card border-0 bg-gradient-card">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                  <div className="text-muted-foreground">Registered Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-muted-foreground">Approval Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">7</div>
                  <div className="text-muted-foreground">Categories Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;