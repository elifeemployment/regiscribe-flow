import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const CheckStatus = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckStatus = async () => {
    if (!mobileNumber) {
      toast({
        title: "Error",
        description: "Please enter your mobile number",
        variant: "destructive"
      });
      return;
    }

    if (mobileNumber.length !== 10) {
      toast({
        title: "Error", 
        description: "Please enter a valid 10-digit mobile number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Status Found!",
        description: "Your application status: Under Review. You will be contacted soon.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="shadow-card border-0 bg-gradient-card">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl font-bold text-foreground mb-4">
              Check Application Status
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              Enter your mobile number to check your registration status
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="bg-white/50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Search className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">
                  Search Your Application
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-foreground mb-2">
                    Mobile Number
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="text-center text-lg"
                    maxLength={10}
                  />
                </div>
                
                <Button 
                  onClick={handleCheckStatus}
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
                  size="lg"
                >
                  {isLoading ? "Checking..." : "Check Status"}
                </Button>
              </div>
            </div>

            {/* Information Section */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">Application Status Information:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Submitted:</strong> Your application has been received</li>
                <li>• <strong>Under Review:</strong> Our team is processing your application</li>
                <li>• <strong>Approved:</strong> Your application has been approved</li>
                <li>• <strong>Rejected:</strong> Application needs modification</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckStatus;