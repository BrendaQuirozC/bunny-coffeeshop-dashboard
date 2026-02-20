// Mock data for Bunny Café Dashboard

export interface CoffeeSale {
  name: string;
  sales: number;
  revenue: number;
  color: string;
}

export interface AgeGroup {
  range: string;
  customers: number;
  percentage: number;
}

export interface HourlySale {
  hour: string;
  sales: number;
  customers: number;
}

export interface DailySale {
  day: string;
  sales: number;
  revenue: number;
}

export interface SeasonalData {
  month: string;
  sales: number;
  predicted: number;
}

// Top selling coffee products
export const coffeeSales: CoffeeSale[] = [
  { name: 'Caramel Latte', sales: 1250, revenue: 5625, color: 'var(--color-green-leafs)'},
  { name: 'Espresso', sales: 980, revenue: 3920, color: 'var(--color-green-leafs-2)' },
  { name: 'Cappuccino', sales: 850, revenue: 4250, color: 'var(--color-green-leafs-3)' },
  { name: 'Iced Americano', sales: 720, revenue: 2880, color: 'var(--color-green-leafs-4)' },
  { name: 'Mocha', sales: 650, revenue: 3575, color: 'var(--color-green-leafs-5)' },
  { name: 'Bunny Special', sales: 580, revenue: 3480, color: 'var(--color-green-leafs-6)' },
  { name: 'Flat White', sales: 480, revenue: 2400, color: 'var(--color-green-leafs-7)' },
  { name: 'Macchiato', sales: 380, revenue: 1900, color: 'var(--color-green-leafs-8)' },
];

// Customer age demographics
export const ageGroups: AgeGroup[] = [
  { range: '18-24', customers: 1250, percentage: 28 },
  { range: '25-34', customers: 1580, percentage: 35 },
  { range: '35-44', customers: 920, percentage: 20 },
  { range: '45-54', customers: 520, percentage: 12 },
  { range: '55+', customers: 230, percentage: 5 },
];

// Sales by hour (average weekday)
export const hourlySales: HourlySale[] = [
  { hour: '6 AM', sales: 45, customers: 15 },
  { hour: '7 AM', sales: 180, customers: 60 },
  { hour: '8 AM', sales: 320, customers: 105 },
  { hour: '9 AM', sales: 250, customers: 80 },
  { hour: '10 AM', sales: 180, customers: 60 },
  { hour: '11 AM', sales: 150, customers: 50 },
  { hour: '12 PM', sales: 280, customers: 90 },
  { hour: '1 PM', sales: 320, customers: 105 },
  { hour: '2 PM', sales: 240, customers: 78 },
  { hour: '3 PM', sales: 200, customers: 65 },
  { hour: '4 PM', sales: 180, customers: 58 },
  { hour: '5 PM', sales: 220, customers: 72 },
  { hour: '6 PM', sales: 160, customers: 52 },
  { hour: '7 PM', sales: 80, customers: 25 },
];

// Sales by day of week
export const dailySales: DailySale[] = [
  { day: 'Monday', sales: 2150, revenue: 9675 },
  { day: 'Tuesday', sales: 2280, revenue: 10260 },
  { day: 'Wednesday', sales: 2420, revenue: 10890 },
  { day: 'Thursday', sales: 2380, revenue: 10710 },
  { day: 'Friday', sales: 2680, revenue: 12060 },
  { day: 'Saturday', sales: 3120, revenue: 14040 },
  { day: 'Sunday', sales: 2580, revenue: 11610 },
];

// Seasonal patterns (12 months with predictions)
export const seasonalData: SeasonalData[] = [
  { month: 'Jan', sales: 18500, predicted: 18200 },
  { month: 'Feb', sales: 17200, predicted: 17500 },
  { month: 'Mar', sales: 19800, predicted: 19500 },
  { month: 'Apr', sales: 21500, predicted: 21200 },
  { month: 'May', sales: 23200, predicted: 23000 },
  { month: 'Jun', sales: 24800, predicted: 24500 },
  { month: 'Jul', sales: 26500, predicted: 26200 },
  { month: 'Aug', sales: 25800, predicted: 25500 },
  { month: 'Sep', sales: 22400, predicted: 22800 },
  { month: 'Oct', sales: 21200, predicted: 21600 },
  { month: 'Nov', sales: 20500, predicted: 20800 },
  { month: 'Dec', sales: 24200, predicted: 24500 },
];

// Future predictions (next 6 months)
export const futurePredictions: SeasonalData[] = [
  { month: 'Jan 2026', sales: 0, predicted: 25200 },
  { month: 'Feb 2026', sales: 0, predicted: 24800 },
  { month: 'Mar 2026', sales: 0, predicted: 26500 },
  { month: 'Apr 2026', sales: 0, predicted: 28200 },
  { month: 'May 2026', sales: 0, predicted: 29800 },
  { month: 'Jun 2026', sales: 0, predicted: 31500 },
];

// Combined historical and predictions
export const trendData = [
  ...seasonalData.slice(-6).map(d => ({ month: d.month, actual: d.sales, predicted: null })),
  { month: 'Jan 2026', actual: null, predicted: 25200 },
  { month: 'Feb 2026', actual: null, predicted: 24800 },
  { month: 'Mar 2026', actual: null, predicted: 26500 },
  { month: 'Apr 2026', actual: null, predicted: 28200 },
  { month: 'May 2026', actual: null, predicted: 29800 },
  { month: 'Jun 2026', actual: null, predicted: 31500 },
];

// KPI Metrics
export const kpiMetrics = {
  totalRevenue: 265840,
  totalOrders: 58920,
  averageOrderValue: 4.51,
  customerSatisfaction: 4.7,
  growthRate: 12.5,
  repeatCustomerRate: 68,
};