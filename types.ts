
export enum Screen {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  PAY_MOBILE = 'PAY_MOBILE',
  PAY_AMOUNT = 'PAY_AMOUNT',
  TRANSFER_SELECT = 'TRANSFER_SELECT',
  TRANSFER_FORM = 'TRANSFER_FORM',
  TRANSFER_CONFIRM = 'TRANSFER_CONFIRM',
  SUCCESS = 'SUCCESS',
  BENEFITS = 'BENEFITS',
  PROFILE = 'PROFILE'
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
}

export interface Account {
  id: string;
  name: string;
  type: 'soles' | 'dollars';
  balance: number;
  number: string;
}

export interface TransactionData {
  contact?: Contact;
  amount: string;
  method: 'Yape' | 'Plin';
  message?: string;
  operationId: string;
  date: string;
  type: 'transfer' | 'payment';
  accountSource?: Account;
  accountDest?: string;
}
