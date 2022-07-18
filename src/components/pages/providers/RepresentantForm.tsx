import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import { FlagSelector } from '@components/forms/FlagSelector';
import Select from '@components/forms/Select';
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
            label={t('Name Representant')}
            name="representant.first_name"
            id="representant.first_name"
            placeholder={t('Name Representant')}
          />
          <ErrorMsg name="representant.first_name" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('Lastname Representant')}
            name="representant.last_name"
            id="representant.last_name"
            placeholder={t('Lastname Representant')}
          />
          <ErrorMsg name="representant.last_name" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('Charge Representant')}
            name="representant.charge"
            id="representant.charge"
            placeholder={t('Charge Representant')}
          />
          <ErrorMsg name="representant.charge" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('phone')}
            name="representant.phone_number"
            id="representant.phone_number"
            placeholder={t('phone')}
          />
          <ErrorMsg name="representant.phone_number" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('personal e-mail')}
            name="representant.personal_email"
            id="representant.personal_email"
            placeholder={t('personal e-mail')}
          />
          <ErrorMsg name="representant.personal_email" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('business e-mail')}
            name="representant.business_email"
            id="representant.business_email"
            placeholder={t('business e-mail')}
          />
          <ErrorMsg name="representant.business_email" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <Field
            label={t('local phone')}
            name="representant.local_phone"
            id="representant.local_phone"
            placeholder={t('local phone')}
          />
          <ErrorMsg name="representant.local_phone" />
        </div>
      </div>
      <div>
        <div className="flex gap-x-8">
          <div className="mb-1 text-sm basis-1/3">
            <FlagSelector name="representant.addresses[0].country"></FlagSelector>
            <ErrorMsg name="representant.addresses[0].country" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('city')}
              name="representant.addresses[0].city"
              id="representant.addresses[0].city"
              placeholder={t('city')}
            />
            <ErrorMsg name="representant.addresses[0].city" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <Field
              label={t('state')}
              name="representant.addresses[0].state"
              id="representant.addresses[0].state"
              placeholder={t('state')}
            />
            <ErrorMsg name="representant.addresses[0].state" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('basic address')}
              name="representant.addresses[0].line1"
              id="representant.addresses[0].line1"
              placeholder={t('basic address')}
            />
            <ErrorMsg name="representant.addresses[0].line1" />
          </div>
          <div className="mb-4 text-sm basis-2/4">
            <Field
              label={t('more detail address')}
              name="representant.addresses[0].line2"
              id="representant.addresses[0].line2"
              placeholder={t('more detail address')}
            />
            <ErrorMsg name="representant.addresses[0].line2" />
          </div>
        </div>
      </div>
      <div>
        <label>{t('social media')}</label>
        <div className="flex gap-x-16 justify-between">
          <div className="basis-4/5 gap-x-4 text-sm flex">
            <div className="basis-1/5">
              <Select
                choices={SOCIAL}
                placeholder={t('social media')}
                name="social"
              />
            </div>
            <Field
              label="Redes sociales"
              name="representant.socials[0].value"
              id="representant.socials[0].value"
              placeholder={t('social media')}
            />
            <ErrorMsg name="representant.socials[0].value" />
          </div>
          <div className="basis-1/5">
            <Button endIcon={<AddIcon />}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RepresentantForm;
