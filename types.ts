export enum AppScreen {
  WELCOME = 'WELCOME',
  INPUT = 'INPUT',
  REVIEW = 'REVIEW',
  RESULT = 'RESULT'
}

export enum TaxpayerType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
  HOUSEHOLD = 'HOUSEHOLD'
}

export interface TaxData {
  type: TaxpayerType | null;
  totalIncome: string;
  insurance: string;
  dependents: string;
}

export enum InputTab {
  CHAT = 'CHAT',
  FORM = 'FORM'
}