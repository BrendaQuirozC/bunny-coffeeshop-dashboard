import { Coffee, DollarSign, ShoppingCart, TrendingUp, Users, Star, Sparkles } from 'lucide-react';
import { KPICard } from '@/app/components/KPICard';
import { TopCoffeesChart } from '@/app/components/TopCoffeesChart';
import { AgeDemographicsChart } from '@/app/components/AgeDemographicsChart';
import { HourlySalesChart } from '@/app/components/HourlySalesChart';
import { WeeklySalesChart } from '@/app/components/WeeklySalesChart';
import { SeasonalTrendsChart } from '@/app/components/SeasonalTrendsChart';
import { MLPredictionChart } from '@/app/components/MLPredictionChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { kpiMetrics } from '@/app/data/mockData';

const Dashboard = () => {
  return (
          <main className="container mx-auto px-6 py-10">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <KPICard
              title="Total Revenue"
              value={`$${(kpiMetrics.totalRevenue / 1000).toFixed(1)}K`}
              icon={DollarSign}
              trend={kpiMetrics.growthRate}
            />
            <KPICard
              title="Total Orders"
              value={kpiMetrics.totalOrders.toLocaleString()}
              icon={ShoppingCart}
              trend={8.3}
            />
            <KPICard
              title="Avg Order Value"
              value={`$${kpiMetrics.averageOrderValue.toFixed(2)}`}
              icon={TrendingUp}
              trend={5.2}
            />
            <KPICard
              title="Customer Satisfaction"
              value={kpiMetrics.customerSatisfaction}
              icon={Star}
              suffix="/5"
              trend={2.1}
            />
            <KPICard
              title="Total Customers"
              value="4.5K"
              icon={Users}
              trend={15.7}
            />
            <KPICard
              title="Repeat Customers"
              value={kpiMetrics.repeatCustomerRate}
              icon={Coffee}
              suffix="%"
              trend={4.8}
            />
          </div>
  
          {/* Tabs for different views */}
          <Tabs defaultValue="overview" className="space-y-8">
            <TabsList className="options-kpi backdrop-blur-sm border border-green-leafs p-0">
              <TabsTrigger 
                value="overview"
                className="button-kpi data-[state=active]:bg-green-leafs data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="analytics"
                className="button-kpi data-[state=active]:bg-green-leafs data-[state=active]:text-white"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger 
                value="predictions"
                className="button-kpi data-[state=active]:bg-green-leafs data-[state=active]:text-white"
              >
                <Sparkles className="w-4 h-4 mr-1.5 inline-block" />
                ML Predictions
              </TabsTrigger>
            </TabsList>
  
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TopCoffeesChart />
                <AgeDemographicsChart />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HourlySalesChart />
                <WeeklySalesChart />
              </div>
            </TabsContent>
  
            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <SeasonalTrendsChart />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <HourlySalesChart />
                <WeeklySalesChart />
              </div>
              
              {/* Insights Section */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                <h3 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-8 bg-green-leafs rounded-full"></span>
                  Key Insights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="group p-6 key-insights rounded-xl border border-light-green hover:border-green-leafs transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-leafs rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Peak Hours</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Highest traffic at <strong className="text-green-leafs">8 AM</strong> and <strong className="text-green-leafs">1 PM</strong>. 
                          Consider staffing accordingly during rush hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-green-leafs-7 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-leafs-3 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Best Day</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong className="text-green-leafs-3">Saturday</strong> generates the most revenue. 
                          Special weekend promotions could boost sales further.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 key-insights rounded-xl border border-light-green hover:border-green-leafs transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-leafs rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Top Demographic</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          <strong className="text-green-leafs">25-34 age group</strong> represents 35% of customers. 
                          Target marketing campaigns to this segment.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-green-leafs-7 transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-leafs-3 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Seasonal Trend</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Sales peak in <strong className="text-green-leafs-3">summer months</strong>. 
                          Prepare iced coffee varieties and cold brews.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
  
            {/* ML Predictions Tab */}
            <TabsContent value="predictions" className="space-y-6">
              <MLPredictionChart />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200">
                  <h3 className="text-2xl font-light text-slate-900 mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-8 bg-green-leafs rounded-full"></span>
                    Predictive Analytics
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 p-4 rounded-xl key-insights border border-light-green">
                      <div className="w-3 h-3 bg-green-leafs rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Time Series Forecasting</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Using ARIMA models to predict future sales based on historical patterns
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-transparent border border-slate-100">
                      <div className="w-3 h-3 bg-slate-700 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Trend Analysis</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Identifying seasonal patterns and growth trajectories
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl key-insights border border-light-green">
                      <div className="w-3 h-3 bg-green-leafs rounded-full mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Anomaly Detection</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Monitoring for unusual sales patterns and outliers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="recommendations rounded-2xl p-8 shadow-xl border border-emerald-500/20">
                  <h3 className="text-2xl font-light text-white mb-6 flex items-center gap-2">
                    <span className="w-1.5 h-8 bg-green-leafs rounded-full"></span>
                    Actionable Recommendations
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
                      <p className="text-sm text-light-green">
                        <strong className="text-green-leafs">✓ Inventory:</strong> Increase stock by 20% for spring season
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
                      <p className="text-sm text-light-green">
                        <strong className="text-green-leafs">✓ Staffing:</strong> Hire 2-3 part-time baristas for summer rush
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
                      <p className="text-sm text-light-green">
                        <strong className="text-green-leafs">✓ Marketing:</strong> Launch Instagram campaign targeting 25-34 demographic
                      </p>
                    </div>
                    
                    <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 hover:bg-emerald-500/20 transition-all duration-300">
                      <p className="text-sm text-light-green">
                        <strong className="text-green-leafs">✓ Menu:</strong> Promote Caramel Latte (top seller) in loyalty program
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
  )
}

export default Dashboard