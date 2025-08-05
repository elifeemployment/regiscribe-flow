import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  MapPin, 
  Bell, 
  Settings, 
  BarChart3,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  LogOut
} from "lucide-react";
import Navbar from "@/components/Navbar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("registrations");

  const dashboardCards = [
    {
      title: "Registrations",
      icon: Users,
      color: "bg-primary",
      path: "registrations"
    },
    {
      title: "Categories", 
      icon: FileText,
      color: "bg-secondary",
      path: "categories"
    },
    {
      title: "Panchayaths",
      icon: MapPin,
      color: "bg-warning",
      path: "panchayaths"
    },
    {
      title: "Announcements",
      icon: Bell,
      color: "bg-success",
      path: "announcements"
    },
    {
      title: "Utilities",
      icon: Settings,
      color: "bg-danger",
      path: "utilities"
    },
    {
      title: "Accounts",
      icon: BarChart3,
      color: "bg-muted",
      path: "accounts"
    }
  ];

  const registrations = [
    {
      id: "ESEP97785988888",
      name: "ടുറയ",
      status: "approved",
      category: "Job Card",
      date: "2024-01-15"
    },
    {
      id: "ESEP811845438",
      name: "♦♦♦♦♦♦♦",
      status: "pending", 
      category: "Entrelife",
      date: "2024-01-14"
    },
    {
      id: "ESEP889959323315",
      name: "Sharee",
      status: "approved",
      category: "Farmerlife", 
      date: "2024-01-13"
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Job Card (Special) (ജോലി കാർഡ്)",
      actualFee: "₹999",
      offerFee: "₹300",
      discount: "70%",
      status: "Active",
      image: "📋"
    },
    {
      id: 2,
      name: "Entrelife (എന്റെട ലൈഫ്)",
      actualFee: "₹500",
      offerFee: "₹150", 
      discount: "70%",
      status: "Active",
      image: "🏢"
    },
    {
      id: 3,
      name: "Farmerlife (ഫാര്മലൈഫ്)",
      actualFee: "₹500",
      offerFee: "₹150",
      discount: "70%", 
      status: "Active",
      image: "🌾"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success text-success-foreground">Approved</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "rejected":
        return <Badge className="bg-danger text-danger-foreground">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, <span className="text-primary font-medium">SUPER ADMIN</span></p>
          </div>
          <Button variant="danger" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {dashboardCards.map((card) => (
            <Card 
              key={card.path}
              className={`cursor-pointer transition-all duration-300 hover:shadow-card ${
                activeTab === card.path ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveTab(card.path)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-medium text-foreground text-sm">{card.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Navigation */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Card className="cursor-pointer hover:shadow-card transition-all duration-300">
            <CardContent className="p-6 text-center">
              <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-foreground">Reports</h3>
            </CardContent>
          </Card>
          <Card className="cursor-pointer hover:shadow-card transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium text-foreground">Admin Control</h3>
            </CardContent>
          </Card>
        </div>

        {/* Content Area */}
        {activeTab === "registrations" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-foreground">Registrations Management</h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Expiry Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Excel
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>

              {/* Search and Filters */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                  <Input placeholder="Search by name, mobile, or customer ID..." className="pl-10" />
                </div>
                <select className="px-3 py-2 border border-input rounded-md bg-background">
                  <option>All Statuses</option>
                  <option>Approved</option>
                  <option>Pending</option>
                  <option>Rejected</option>
                </select>
                <select className="px-3 py-2 border border-input rounded-md bg-background">
                  <option>All Categories</option>
                  <option>Job Card</option>
                  <option>Entrelife</option>
                  <option>Farmerlife</option>
                </select>
                <select className="px-3 py-2 border border-input rounded-md bg-background">
                  <option>All Panchayaths</option>
                  <option>നാടുകൊട്ടാര</option>
                  <option>തൃശൂർ</option>
                </select>
              </div>

              {/* Date Range */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">From Date</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">To Date</label>
                  <Input type="date" />
                </div>
              </div>

              {/* Registrations Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">
                        <input type="checkbox" className="rounded" />
                      </th>
                      <th className="text-left p-3">Customer ID</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Category</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Date</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">
                          <input type="checkbox" className="rounded" />
                        </td>
                        <td className="p-3 font-mono text-sm">{reg.id}</td>
                        <td className="p-3">{reg.name}</td>
                        <td className="p-3">{reg.category}</td>
                        <td className="p-3">{getStatusBadge(reg.status)}</td>
                        <td className="p-3">{reg.date}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "categories" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-foreground">Categories Management</h2>
                <Button className="bg-primary hover:bg-primary-hover">
                  + Add Category
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Actual Fee</th>
                      <th className="text-left p-3">Offer Fee</th>
                      <th className="text-left p-3">Discount</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Image</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((cat) => (
                      <tr key={cat.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">{cat.name}</td>
                        <td className="p-3">{cat.actualFee}</td>
                        <td className="p-3 text-success font-medium">{cat.offerFee}</td>
                        <td className="p-3 text-danger">{cat.discount}</td>
                        <td className="p-3">
                          <Badge className="bg-success text-success-foreground">{cat.status}</Badge>
                        </td>
                        <td className="p-3 text-2xl">{cat.image}</td>
                        <td className="p-3">
                          <div className="flex space-x-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;