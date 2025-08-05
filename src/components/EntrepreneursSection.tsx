import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EntrepreneursSection = () => {
  const categories = [
    {
      title: "Tailoring & Fashion",
      description: "Start your own tailoring business with government support and training programs.",
      income: "₹5,000 - ₹25,000",
      bgColor: "bg-gradient-to-br from-pink-100 to-purple-100",
      textColor: "text-purple-800"
    },
    {
      title: "Home Food Services", 
      description: "Transform your cooking skills into a profitable home-based food business.",
      income: "₹8,000 - ₹30,000",
      bgColor: "bg-gradient-to-br from-green-100 to-blue-100",
      textColor: "text-blue-800"
    },
    {
      title: "Beauty & Wellness",
      description: "Start your beauty parlor or wellness center with professional training support.",
      income: "₹10,000 - ₹35,000",
      bgColor: "bg-gradient-to-br from-green-100 to-teal-100",
      textColor: "text-teal-800"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Empowering Women Entrepreneurs
          </h2>
          <p className="text-muted-foreground text-lg">
            Join our community of successful women who have built their own businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className={`border-0 shadow-soft hover:shadow-card transition-all duration-300 ${category.bgColor}`}>
              <CardHeader>
                <CardTitle className={`text-xl ${category.textColor}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`mb-4 ${category.textColor}`}>
                  {category.description}
                </p>
                <div className={`text-sm font-semibold ${category.textColor}`}>
                  Average Monthly Income: {category.income}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EntrepreneursSection;