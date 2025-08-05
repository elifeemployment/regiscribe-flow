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

  const panchayaths = [
    { name: "Amarambalam", createdDate: "7/7/2025", updatedDate: "7/7/2025" },
    { name: "Chaliyar", createdDate: "8/7/2025", updatedDate: "8/7/2025" },
    { name: "Chokkad", createdDate: "7/7/2025", updatedDate: "7/7/2025" },
    { name: "Chungathara", createdDate: "11/7/2025", updatedDate: "11/7/2025" },
    { name: "Edapatta", createdDate: "7/7/2025", updatedDate: "7/7/2025" },
    { name: "Edavanna", createdDate: "7/7/2025", updatedDate: "7/7/2025" }
  ];

  const announcements = [
    { id: 1, title: "Welcome", status: "Active", message: "Welcome to our registration system", createdDate: "17/7/2025" },
    { id: 2, title: "New Services", status: "Active", message: "New services are now available", createdDate: "17/7/2025" }
  ];

  const utilities = [
    { 
      id: 1, 
      name: "സുമംതൊമോല് നി", 
      url: "https://self-employ-final.vercel.app", 
      description: "സുമോത്രാനാശാത്ത് ചുക്കു വാന്", 
      status: true 
    },
    { 
      id: 2, 
      name: "എഞ്ചിനീയര്മാര് കുറിച്ച്", 
      url: "https://nrega-task-app-2944.vercel.app", 
      description: "വടാവിലി് ഇലെത്രറിന് എ", 
      status: true 
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
          <Card 
            className="cursor-pointer hover:shadow-card transition-all duration-300"
            onClick={() => setActiveTab("reports")}
          >
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

        {activeTab === "panchayaths" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-foreground">Panchayaths Management</h2>
                <Button className="bg-primary hover:bg-primary-hover">
                  + Add Panchayath
                </Button>
              </div>
              <p className="text-muted-foreground mb-6">Malappuram District (24 Panchayaths)</p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Panchayath Name</th>
                      <th className="text-left p-3">Created Date</th>
                      <th className="text-left p-3">Updated Date</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {panchayaths.map((panchayath, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-3">{panchayath.name}</td>
                        <td className="p-3">{panchayath.createdDate}</td>
                        <td className="p-3">{panchayath.updatedDate}</td>
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

        {activeTab === "announcements" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-foreground">Announcements Management</h2>
                <Button className="bg-primary hover:bg-primary-hover">
                  + Add Announcement
                </Button>
              </div>

              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <Card key={announcement.id} className="bg-muted/20">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium">{announcement.title}</h3>
                            <Badge className="bg-success text-success-foreground text-xs">
                              {announcement.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{announcement.message}</p>
                          <p className="text-sm text-muted-foreground">Created: {announcement.createdDate}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "utilities" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Utilities Management</h2>
                  <p className="text-muted-foreground">Manage website utilities that appear in the navigation dropdown</p>
                </div>
                <Button className="bg-primary hover:bg-primary-hover">
                  + Add Utility
                </Button>
              </div>

              <div className="bg-muted/20 p-4 rounded-lg mb-6">
                <h3 className="font-medium mb-2">Utilities List</h3>
                <p className="text-sm text-muted-foreground">All utilities that can appear in the navigation dropdown</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">URL</th>
                      <th className="text-left p-3">Description</th>
                      <th className="text-left p-3">Status</th>
                      <th className="text-left p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {utilities.map((utility) => (
                      <tr key={utility.id} className="border-b hover:bg-muted/50">
                        <td className="p-3">{utility.name}</td>
                        <td className="p-3 text-primary text-sm">{utility.url}</td>
                        <td className="p-3">{utility.description}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${utility.status ? 'bg-success' : 'bg-muted'}`}></div>
                            <span className="text-sm">{utility.status ? 'Active' : 'Inactive'}</span>
                          </div>
                        </td>
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

        {activeTab === "accounts" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Accounts Management</h2>
              
              {/* Cash Balance Cards */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="bg-success/10 border-success/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Cash in Hand</h3>
                      <Button variant="outline" size="sm">📊</Button>
                    </div>
                    <div className="text-2xl font-bold text-success mb-2">₹3900.00</div>
                    <p className="text-sm text-muted-foreground">Available cash from collections</p>
                    <p className="text-sm font-medium text-success mt-2">Total Fee Collected: ₹3900.00</p>
                  </CardContent>
                </Card>

                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-medium">Cash at Bank</h3>
                      <Button variant="outline" size="sm">📊</Button>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">₹0.00</div>
                    <p className="text-sm text-muted-foreground">Transferred to bank</p>
                  </CardContent>
                </Card>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-6">
                <Button className="bg-primary">
                  💰 Cash Transfer
                </Button>
                <Button variant="destructive">
                  ➕ Add Expense
                </Button>
              </div>

              {/* Transfer History Section */}
              <div className="flex gap-4 mb-4">
                <Button variant="outline" size="sm">Cash Transfers</Button>
                <Button variant="outline" size="sm" className="bg-destructive text-destructive-foreground">Expenses</Button>
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Cash Transfer History</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-success text-success-foreground">
                      📊 Excel
                    </Button>
                    <Button variant="outline" size="sm" className="bg-destructive text-destructive-foreground">
                      📄 PDF
                    </Button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Amount</th>
                        <th className="text-left p-3">Period</th>
                        <th className="text-left p-3">Remarks</th>
                        <th className="text-left p-3">Created By</th>
                        <th className="text-left p-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={6} className="p-8 text-center text-muted-foreground">
                          No cash transfers found
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "reports" && (
          <Card className="shadow-card border-0">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Reports</h2>
              
              {/* Date Range Filter */}
              <div className="bg-muted/20 p-6 rounded-lg mb-6">
                <h3 className="font-medium mb-4">Date Range Filter</h3>
                <div className="grid md:grid-cols-4 gap-4 items-end">
                  <div>
                    <label className="block text-sm font-medium mb-2">From:</label>
                    <Input type="date" placeholder="Start Date" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">To:</label>
                    <Input type="date" placeholder="End Date" />
                  </div>
                  <Button variant="outline">Hide Verification</Button>
                  <Button variant="destructive">Clear</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Filters Total Registrations, Fee Collection, and Pending Amount
                </p>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">163</div>
                    <p className="text-sm text-muted-foreground">Total Registrations</p>
                    <p className="text-xs text-muted-foreground">All time</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">7</div>
                    <p className="text-sm text-muted-foreground">Total Categories</p>
                    <p className="text-xs text-muted-foreground">Active</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-sm text-muted-foreground">Total Panchayaths</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-success/10 text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-success">₹3,900</div>
                    <p className="text-sm text-muted-foreground">Total Fees Collected</p>
                    <p className="text-xs text-muted-foreground">All time revenue</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-warning/10 text-center">
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold text-warning">₹13,500</div>
                    <p className="text-sm text-muted-foreground">Pending Amount</p>
                    <p className="text-xs text-muted-foreground">From pending registrations</p>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Badge */}
              <div className="flex justify-end mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Performance</span>
                  <Badge className="bg-success text-success-foreground">Good</Badge>
                  <span className="text-xs text-muted-foreground">Active registrations</span>
                </div>
              </div>

              {/* Report Sections */}
              <div className="space-y-4">
                <Card className="bg-success/5 border-success/20 cursor-pointer hover:bg-success/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Active Panchayath Report</h3>
                        <p className="text-sm text-muted-foreground">Performance grading based on registrations and revenue collection</p>
                      </div>
                      <div className="text-xl">→</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 cursor-pointer hover:bg-primary/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Category Performance Report</h3>
                        <p className="text-sm text-muted-foreground">Total fee collected and registration count for each category</p>
                      </div>
                      <div className="text-xl">→</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-warning/5 border-warning/20 cursor-pointer hover:bg-warning/10 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Panchayath Performance Report</h3>
                      </div>
                      <div className="text-xl">→</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;