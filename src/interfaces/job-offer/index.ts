import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobOfferInterface {
  id?: string;
  company_id: string;
  name: string;
  status?: boolean;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
  };
}

export interface JobOfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  name?: string;
}
