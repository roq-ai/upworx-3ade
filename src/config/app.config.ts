interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Upworx',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read job offers',
    'Apply to job offers',
    'Update application status',
    'Read company information',
  ],
  ownerAbilities: ['Manage job offers', 'Manage applications', 'Manage users', 'Manage companies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/f9087b39-94f5-46d6-b229-7ca06a9fe26e',
};
