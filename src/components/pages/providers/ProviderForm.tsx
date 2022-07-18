import { SOCIAL } from '@components/data/SocialNetworks';
import { BusinessSelect } from '@components/forms/BusinessSelect';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import { FlagSelector } from '@components/forms/FlagSelector';
import Select from '@components/forms/Select';
import SocialsArrayField from '@components/forms/SocialsArrayField';
import Button from '@components/layout/Button';

import useTranslate from '@hooks/useTranslate';

import AddIcon from '@mui/icons-material/Add';

export const ProviderForm = () => {
  const t = useTranslate();

  return (
    <div className="pt-4">
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <BusinessSelect name="businesses" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('name')}
            name="name"
            id="name"
            placeholder={t('name')}
          />
          <ErrorMsg name="name" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('tax identification number')}
            name="tax_id"
            id="tax_id"
            placeholder={t('tax identification number')}
          />
          <ErrorMsg name="tax_id" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('phone')}
            name="phone_number"
            id="phone_numner"
            placeholder={t('phone')}
          />
          <ErrorMsg name="phone_number" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('e-mail')}
            name="email"
            id="email"
            type="email"
            placeholder={t('e-mail')}
          />
          <ErrorMsg name="email" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('website')}
            name="website"
            id="website"
            placeholder={t('website')}
          />
          <ErrorMsg name="website" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('solicited services')}
            name="offered_services"
            id="offered_services"
            placeholder={t('solicited services')}
          />
          <ErrorMsg name="offered_services" />
        </div>
      </div>
      <div>
        <div className="flex gap-x-8">
          <div className="mb-1 text-sm basis-1/3">
            <FlagSelector name="addresses[0].country"></FlagSelector>
            <ErrorMsg name="addresses[0].country" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('city')}
              name="addresses[0].city"
              id="addresses[0].city"
              placeholder={t('city')}
            />
            <ErrorMsg name="addresses[0].city" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('state')}
              name="addresses[0].state"
              id="addresses[0].state"
              placeholder={t('state')}
            />
            <ErrorMsg name="addresses[0].state" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('basic address')}
              name="addresses[0].line1"
              id="addresses[0].line1"
              placeholder={t('basic address')}
            />
            <ErrorMsg name="addresses[0].line1" />
          </div>
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('more detail address')}
              name="addresses[0].line2"
              id="addresses[0].line2"
              placeholder={t('more detail address')}
            />
            <ErrorMsg name="addresses[0].line2" />
          </div>
        </div>
      </div>
      <div>
        <SocialsArrayField name="socials" />
      </div>
    </div>
  );
};
export default ProviderForm;
