import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface RegistrationModalProps {
  category: any;
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal = ({ category, isOpen, onClose }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    panchayath: "",
    ward: "",
    ageGroup: "",
    preference: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.mobileNumber || !formData.address) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Registration Submitted!",
      description: "Your application has been submitted successfully. You will receive a confirmation shortly.",
    });

    onClose();
    setFormData({
      fullName: "",
      mobileNumber: "",
      address: "",
      panchayath: "",
      ward: "",
      ageGroup: "",
      preference: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Registration Form
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            Please fill in your details for {category.title} ({category.subtitle})
          </p>
        </DialogHeader>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name / പൂർണ്ണ നാമം *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name / നിങ്ങളുടെ പൂർണ്ണ നാമം നൽകുക"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="mobileNumber">Mobile Number / ദൂരവാണി നമ്പർ *</Label>
                <Input
                  id="mobileNumber"
                  placeholder="Enter 10 digit mobile number / 10 അക്ക ദൂരവാണി നമ്പർ നൽകുക"
                  value={formData.mobileNumber}
                  onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="address">Address / വിലാസം *</Label>
                <Textarea
                  id="address"
                  placeholder="Enter your complete address / നിങ്ങളുടെ പൂർണ്ണ വിലാസം നൽകുക"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="panchayath">Panchayath / പഞ്ചായത്ത്</Label>
                <Select onValueChange={(value) => handleInputChange("panchayath", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your panchayath / നിങ്ങളുടെ പഞ്ചായത്ത് തിരഞ്ഞെടുക്കുക" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nadukottara">നാടുകൊട്ടാര</SelectItem>
                    <SelectItem value="thrur">തൃശൂർ</SelectItem>
                    <SelectItem value="ollukkara">ഒല്ലുക്കര</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="ward">Ward / വാർഡ് *</Label>
                <Input
                  id="ward"
                  placeholder="Enter ward number/name / വാർഡ് നമ്പർ/പേര് നൽകുക"
                  value={formData.ward}
                  onChange={(e) => handleInputChange("ward", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="ageGroup">Age/PRC/ക്യാറ്ഗറി / പ്രായം</Label>
                <Input
                  id="ageGroup"
                  placeholder="Enter age/PRC card optional / പ്രായം/PRC കാർഡ് ഓപ്ഷണൽ ഇവിട് നൽകുക"
                  value={formData.ageGroup}
                  onChange={(e) => handleInputChange("ageGroup", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="preference">Preference / മുൻഗണന</Label>
                <Select onValueChange={(value) => handleInputChange("preference", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your preference for job card / ജോലി കാർഡിനുള്ള നിങ്ങളുടെ മുൻഗണന തിരഞ്ഞെടുക്കുക" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="agriculture">കൃഷി</SelectItem>
                    <SelectItem value="construction">നിർമ്മാണം</SelectItem>
                    <SelectItem value="handicrafts">കരകൗശലവസ്തുക്കൾ</SelectItem>
                    <SelectItem value="other">മറ്റുള്ളവ</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-primary-foreground">
                Submit Registration
              </Button>
            </form>
          </div>

          {/* Registration Summary */}
          <div>
            <Card className="bg-gradient-card border shadow-soft">
              <CardHeader>
                <CardTitle className="text-center">Registration Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    {category.id}. {category.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.subtitle}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>തിരഞ്ഞെടുത്ത പാക്കേജ്:</span>
                      <span className="font-medium">{category.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ലാഭിക്കാൻ സാധിക്കും:</span>
                      <span className="text-success font-medium">{category.savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>എകാധികമായ സേവനങ്ങൾ:</span>
                      <span className="text-primary">✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span>പിന്തുണ:</span>
                      <span className="text-primary">24/7</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Regular Fee:</span>
                    <span className="line-through text-muted-foreground">{category.regularFee}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Offer Price:</span>
                    <span className="text-2xl font-bold text-success">{category.offerPrice}</span>
                  </div>
                  {category.savings !== "₹0" && (
                    <div className="flex justify-between items-center">
                      <span className="font-medium">You Save:</span>
                      <span className="text-lg font-bold text-danger">{category.savings}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;