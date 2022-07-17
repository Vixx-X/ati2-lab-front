import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import { FlagSelector } from '@components/forms/FlagSelector';
import Select from '@components/forms/Select';
import Button from '@components/layout/Button';
import useTranslate from '@hooks/useTranslate';

import AddIcon from '@mui/icons-material/Add';
import { Field } from 'formik';

export const ProviderForm = ({ initValues }: any) => {

  const t = useTranslate();

  const handleSelectFlag = (ISOflag: string) => {
    initValues.addresses[0].country = ISOflag;
  }

  return (
    <div className="pt-4">
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label htmlFor="name">
            {t('name')}
          </label>
          <Field
            label={t('name')}
            name="name"
            id="name"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder={t('name')}
          />
          <ErrorMsg name="name" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label
            htmlFor="tax_id"
          >
            {t('tax identification number')}
          </label>
          <Field
            label={t('tax identification number')}
            name="tax_id"
            id="tax_id"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder={t('tax identification number')}
          />
          <ErrorMsg name="tax_id" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label
            htmlFor="phone_number"
          >
            {t('phone')}
          </label>
          <Field
            label={t('phone')}
            name="phone_number"
            id="phone_numner"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder={t('phone')}
          />
          <ErrorMsg name="phone_number" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label
            htmlFor="email"
          >
            {t("e-mail")}
          </label>
          <Field
            label={t("e-mail")}
            name="email"
            id="email"
            type="email"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
            placeholder={t("e-mail")}
          />
          <ErrorMsg name="email" />
        </div>
      </div>
      <div className="flex gap-x-8">
        <div className="mb-4 text-sm basis-2/4">
          <label
            htmlFor="website"
          >
            {t("website")}
          </label>
          <Field
            label={t("website")}
            name="website"
            id="website"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder={t("website")}
          />
          <ErrorMsg name="website" />
        </div>
        <div className="mb-4 text-sm basis-2/4">
          <label
            htmlFor="offered_services"
          >
            {t("solicited services")}
          </label>
          <Field
            label={t("solicited services")}
            name="offered_services"
            id="offered_services"
            className="rounded py-2 px-2 text-gray-600 w-full mt-1"
            placeholder={t("solicited services")}
          />
          <ErrorMsg name="offered_services" />
        </div>
      </div>
      <div >
        <div className="flex gap-x-8">
          <div className="mb-1 text-sm basis-1/3">
            <label htmlFor="addresses[0].country">
              {t("country")}
            </label>
            <FlagSelector name="addresses[0].country"></FlagSelector>
            <ErrorMsg name="addresses[0].country" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <label
              htmlFor="addresses[0].city"
            >
              {t("city")}
            </label>
            <Field
              label={t("city")}
              name="addresses[0].city"
              id="addresses[0].city"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder={t("city")}
            />
            <ErrorMsg name="addresses[0].city" />
          </div>
          <div className="mb-1 text-sm basis-1/3">
            <label
              htmlFor="addresses[0].state"
            >
              {t("state")}
            </label>
            <Field
              label={t("state")}
              name="addresses[0].state"
              id="addresses[0].state"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder={t("state")}
            />
            <ErrorMsg name="addresses[0].state" />
          </div>
        </div>
        <div className="flex gap-x-8">
          <div className="mb-4 text-sm basis-2/4">
            <label htmlFor="addresses[0].line1">
              {t("basic address")}
            </label>
            <Field
              label={t("basic address")}
              name="addresses[0].line1"
              id="addresses[0].line1"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder={t("basic address")}
            />
            <ErrorMsg name="addresses[0].line1" />
          </div>
          <div className="mb-4 text-sm basis-2/4">
            <label
              htmlFor="addresses[0].line2"
            >
              {t("more detail address")}
            </label>
            <Field
              label={t("more detail address")}
              name="addresses[0].line2"
              id="addresses[0].line2"
              className="rounded py-2 px-2 text-gray-600 w-full mt-1"
              placeholder={t("more detail address")}
            />
            <ErrorMsg name="addresses[0].line2" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="social_newtworks">
          {t("social media")}
        </label>
        <div className="flex gap-x-16 justify-between">
          <div className="basis-4/5 gap-x-4 text-sm flex">
            <div className="basis-1/5">
              <Select choices={SOCIAL} placeholder='Red Social' />
            </div>
            <Field
              label=""
              name="socials[0].value"
              id="socials[0].value"
              className="rounded py-2 px-2 text-gray-600 mt-1 basis-4/5"
              placeholder=""
            />
          </div>
          <div className="basis-1/5">
            <Button endIcon={<AddIcon />}>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProviderForm;