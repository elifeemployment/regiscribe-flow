import { Card, CardContent } from "@/components/ui/card";
import { Users, FileText, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "5,000+",
      label: "Registered Users",
      color: "text-primary"
    },
    {
      icon: FileText,
      number: "7",
      label: "Available Categories",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Approval Rate",
      color: "text-success"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card border-0 shadow-soft hover:shadow-card transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;