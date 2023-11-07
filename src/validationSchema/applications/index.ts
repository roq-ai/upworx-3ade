import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  status: yup.boolean().required(),
  job_offer_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
