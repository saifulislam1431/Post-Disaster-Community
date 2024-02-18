
export  interface TPieChartProps {
    data: {
      [key: string]: {
        name: string;
        quantity: number;
      };
    };
  }
  
  
export interface TBarChartProps {
    data: {
      supplies_by_month: {
        [month: string]: number;
      };
    };
  }
  
  