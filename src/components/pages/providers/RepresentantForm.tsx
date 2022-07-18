import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import { FlagSelector } from '@components/forms/FlagSelector';
import Select from '@components/forms/Select';
import SocialsArrayField from '@components/forms/SocialsArrayField';
import Button from '@components/layout/Button';

import useTranslate from '@hooks/useTranslate';

import AddIcon from '@mui/icons-material/Add';

export const RepresentantForm = () => {
  const t = useTranslate();

  return (
    <div className="pt-4">
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. name')}
            name="representant.user.first_name"
            id="representant.user.first_name"
            placeholder={t('rep. name')}
          />
          <ErrorMsg name="representant.user.first_name" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. lastname')}
            name="representant.user.last_name"
            id="representant.user.last_name"
            placeholder={t('rep. lastname')}
          />
          <ErrorMsg name="representant.user.last_name" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. charge')}
            name="representant.user.charge"
            id="representant.user.charge"
            placeholder={t('rep. charge')}
          />
          <ErrorMsg name="representant.user.charge" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. cellphone')}
            name="representant.phone_number"
            id="representant.phone_number"
            placeholder={t('rep. cellphone')}
          />
          <ErrorMsg name="representant.phone_number" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. personal email')}
            name="representant.user.email"
            id="representant.user.email"
            placeholder={t('rep. personal email')}
          />
          <ErrorMsg name="representant.user.email" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. business email')}
            name="representant.business_email"
            id="representant.business_email"
            placeholder={t('rep. business email')}
          />
          <ErrorMsg name="representant.business_email" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('rep. localphone')}
            name="representant.local_phone"
            id="representant.local_phone"
            placeholder={t('rep. localphone')}
          />
          <ErrorMsg name="representant.local_phone" />
        </div>
      </div>
      <div>
        <label className="capitalize">{t('address data')}</label>
        <div className="flex gap-x-8 my-4">
          <div className="mb-1 text-sm basis-1/3">
            <FlagSelector name="representant.addresses[0].country"></FlagSelector>
            <ErrorMsg name="representant.addresses[0].country" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('rep. city')}
              name="representant.addresses[0].city"
              id="representant.addresses[0].city"
              placeholder={t('rep. city')}
            />
            <ErrorMsg name="representant.addresses[0].city" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('rep. state')}
              name="representant.addresses[0].state"
              id="representant.addresses[0].state"
              placeholder={t('rep. state')}
            />
            <ErrorMsg name="representant.addresses[0].state" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('rep. basic address')}
              name="representant.addresses[0].line1"
              id="representant.addresses[0].line1"
              placeholder={t('rep. basic address')}
            />
            <ErrorMsg name="representant.addresses[0].line1" />
          </div>
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('rep. more details address')}
              name="representant.addresses[0].line2"
              id="representant.addresses[0].line2"
              placeholder={t('rep. more details address')}
            />
            <ErrorMsg name="representant.addresses[0].line2" />
          </div>
        </div>
      </div>
      <div>
        <SocialsArrayField name="representant.socials" />
      </div>
    </div>
  );
};
export default RepresentantForm;
