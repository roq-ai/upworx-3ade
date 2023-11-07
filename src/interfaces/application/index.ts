import { JobOfferInterface } from 'interfaces/job-offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  job_offer_id: string;
  freelancer_id: string;
  status?: boolean;
  created_at?: any;
  updated_at?: any;

  job_offer?: JobOfferInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_offer_id?: string;
  freelancer_id?: string;
}
