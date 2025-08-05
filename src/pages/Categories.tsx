import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import RegistrationModal from "@/components/RegistrationModal";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      id: 1,
      title: "Job Card (Special)",
      subtitle: "(ജോലി കാർഡ്)",
      description: "നിര്ദ്ദിഷ്ട് കാര്യ ത്വരയ്യല് കാംത്രികാരന് എത്ര്കൊടുക്കുന്നതിനായി സുമമ്മതന് തൊഴ്ിലാളികളും ദരിദ്ര കുടുംബങ്ങളും എതിര്പ്പോടെ.",
      regularFee: "₹999",
      offerPrice: "₹300",
      discount: "70% OFF",
      savings: "₹699",
      bgColor: "bg-gradient-to-br from-yellow-100 to-orange-100",
      buttonColor: "warning",
      tag: "SPECIAL OFFER"
    },
    {
      id: 2,
      title: "Entrelife",
      subtitle: "(എന്റെട ലൈഫ്)",
      description: "അയ്യം ദേവമുക്കി ശ്ലീല ചൈനി് കമാലി ക്ലെരിന് സമുച്ഛുമുല്ലി കല്ക്കിത്ര ചിറിയോകാ ചലിത്രുണാക്ക് ശലാറത്തുക്കു് സാമൂൽ.",
      regularFee: "₹500",
      offerPrice: "₹150",
      discount: "70% OFF",
      savings: "₹350",
      bgColor: "bg-gradient-to-br from-blue-100 to-purple-100",
      buttonColor: "secondary"
    },
    {
      id: 3,
      title: "Farmerlife",
      subtitle: "(ഫാര്മലൈഫ്)",
      description: "കാഷ്ടി കൊച്ചാരുരയ്യലപ്പേരന് വലിയ ചിവമാരീ കടലാശിന് ചെരൂ കാമ്രു ക്ലിന്തു് ചെറിങ്ങിനു വച്ചുതുങ്ങുന്ന്.",
      regularFee: "₹500",
      offerPrice: "₹150",
      discount: "70% OFF",
      savings: "₹350",
      bgColor: "bg-gradient-to-br from-pink-100 to-red-100",
      buttonColor: "danger"
    },
    {
      id: 4,
      title: "Organiclife",
      subtitle: "(ഓര്ഗാനിക്)",
      description: "ചില്ലവന് അവശ്യമുല്ലാതത് 8 ദിവസ ലണ്പണന്തെ മാര്ച്ച് ചെയ്താല് മൊചിച്ചുലിന്ത് തൊണ്ടിയില് വിളിച്ചുകൂട്ടുന്ന് ചിത്ത ലക്കൊട്ടില് ചിത്തിയാ പേ.",
      regularFee: "₹500",
      offerPrice: "₹150",
      discount: "70% OFF",
      savings: "₹350",
      bgColor: "bg-gradient-to-br from-orange-100 to-yellow-100",
      buttonColor: "warning"
    },
    {
      id: 5,
      title: "Foodslife",
      subtitle: "(ഫൂഡ്സ് ലൈഫ്)",
      description: "ക്ഷമ് ചിരാത്കുറെന് ചിലകാല മണെത്യോ അയ്യേമുണ്ടേ അന്ത്യകുല് പിരിവേണ്ണ ചിട്ട ഇരുള് എകുലിന്ത് വിറ്റാലുള്ള സെര്വിന്.",
      regularFee: "₹500",
      offerPrice: "₹150",
      discount: "70% OFF",
      savings: "₹350",
      bgColor: "bg-gradient-to-br from-blue-100 to-indigo-100",
      buttonColor: "secondary"
    },
    {
      id: 6,
      title: "Pennykart Paid Registration",
      subtitle: "(പെണ്ണികാര്ട് പെയ്ഡ് രജിസ്ട്രേഷന്)",
      description: "കുടുയല് ചുവന്ലക്കിന് ആള് ഊറി ലാമണ് ചുവിയകായാം സിരാര്ത് തിക്കലിന് ചന്ദ് ലാവുന് ലിപ്പിവാര്.",
      regularFee: "₹500",
      offerPrice: "₹150",
      discount: "70% OFF",
      savings: "₹350",
      bgColor: "bg-gradient-to-br from-purple-100 to-pink-100",
      buttonColor: "danger"
    },
    {
      id: 7,
      title: "Pennykart Free Registration",
      subtitle: "(പെണ്ണികാര്ട് ഫ്രീ രജിസ്ട്രേഷന്)",
      description: "പണൈാച്ചുട്ടു വല് ന്ദ് മിര്ദുപാന് കലല്ിയിന് കാണിന്ന് മുന്നുംച്ചോ ശിര്ത് ജൈവയാമിന് വല്പ്പം കാര്വി നിറല്ല ചുയുന്ന് മിഴ്ിറ്റാന്.",
      regularFee: "₹0",
      offerPrice: "₹0",
      discount: "0% OFF",
      savings: "₹0",
      bgColor: "bg-gradient-to-br from-green-100 to-teal-100",
      buttonColor: "success"
    }
  ];

  const handleRegisterClick = (category: any) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            സ്വയം തൊഴില് വിഭാഗങ്ങൾ
          </h1>
          <p className="text-muted-foreground">
            തിരഞ്ഞെടുക്കുക നിങ്ങളുടെ ബിസിനസ് കാറ്റഗറി തുടങ്ങാൻ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`${category.bgColor} border-0 shadow-soft hover:shadow-card transition-all duration-300 group`}
            >
              <CardContent className="p-6">
                {category.tag && (
                  <Badge className="mb-3 bg-warning text-warning-foreground">
                    ⭐ {category.tag}
                  </Badge>
                )}
                
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {category.id}. {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.subtitle}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Regular Fee:</span>
                    <span className="line-through text-muted-foreground">{category.regularFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Offer Price:</span>
                    <span className="text-lg font-bold text-success">{category.offerPrice}</span>
                  </div>
                  {category.savings !== "₹0" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">You Save:</span>
                        <span className="text-danger font-medium">{category.savings}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Discount:</span>
                        <span className="text-danger font-medium">{category.discount}</span>
                      </div>
                    </>
                  )}
                </div>

                <Button 
                  variant={category.buttonColor as any}
                  className="w-full"
                  onClick={() => handleRegisterClick(category)}
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <RegistrationModal 
        category={selectedCategory}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Categories;