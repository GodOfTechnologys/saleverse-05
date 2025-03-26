
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/pos/ProductGrid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, ShoppingBag, DollarSign, Users, ChevronDown, Bell, Settings } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back to your POS system dashboard.</p>
              </div>
              <div className="flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="space-x-1">
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80">
                    <div className="flex items-center justify-between px-4 py-2 border-b">
                      <h3 className="font-medium">Notifications</h3>
                      <Button variant="ghost" size="sm">Mark all as read</Button>
                    </div>
                    <div className="py-2 px-4 text-sm text-muted-foreground">
                      No new notifications
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Overview</h2>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8">
                      {selectedPeriod} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setSelectedPeriod("Today")}>Today</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedPeriod("Yesterday")}>Yesterday</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedPeriod("This Week")}>This Week</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setSelectedPeriod("This Month")}>This Month</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Sales</CardDescription>
                    <CardTitle className="text-2xl">$1,245.89</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-green-500">
                      <span className="font-medium">+12.5%</span>
                      <span className="ml-1">from last {selectedPeriod.toLowerCase()}</span>
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      <DollarSign className="inline h-4 w-4 mr-1" />
                      <span className="text-xs">Sales are up</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>New Orders</CardDescription>
                    <CardTitle className="text-2xl">24</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-red-500">
                      <span className="font-medium">-4.2%</span>
                      <span className="ml-1">from last {selectedPeriod.toLowerCase()}</span>
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      <ShoppingBag className="inline h-4 w-4 mr-1" />
                      <span className="text-xs">8 orders pending</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>New Customers</CardDescription>
                    <CardTitle className="text-2xl">12</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-green-500">
                      <span className="font-medium">+8.1%</span>
                      <span className="ml-1">from last {selectedPeriod.toLowerCase()}</span>
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      <Users className="inline h-4 w-4 mr-1" />
                      <span className="text-xs">2 returning customers</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Conversion Rate</CardDescription>
                    <CardTitle className="text-2xl">3.2%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-green-500">
                      <span className="font-medium">+1.1%</span>
                      <span className="ml-1">from last {selectedPeriod.toLowerCase()}</span>
                    </div>
                    <div className="mt-2 text-muted-foreground">
                      <BarChart3 className="inline h-4 w-4 mr-1" />
                      <span className="text-xs">Above target</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex mb-6">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="mt-0">
                <ProductGrid />
              </TabsContent>
              
              <TabsContent value="transactions" className="mt-0">
                <div className="glass-card p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
                  <p className="text-muted-foreground">
                    Connect with Supabase to enable transaction tracking and history.
                  </p>
                  <Button className="mt-4">Connect Supabase</Button>
                </div>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
