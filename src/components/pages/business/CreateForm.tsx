import * as React from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import SocialsArrayField from '@components/forms/SocialsArrayField';
import SubmitButton from '@components/forms/SubmitButton';
import Button from '@components/layout/Button';

import useTranslate from '@hooks/useTranslate';

import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const CreateForm = ({
  open,
  handleClose,
  handleSubmit,
  initValues,
  edit,
}: any) => {
  const t = useTranslate();

  const styles = {
    '& .MuiPaper-root': {
      maxWidth: '900px',
    },
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={styles}>
      <DialogTitle>
        {!edit ? `${t('Create Business')}` : `${t('Edit Business')}`}
      </DialogTitle>
      <Form initialValues={initValues} onSubmit={handleSubmit}>
        <DialogContent>
          <div className="pt-4">
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('Enter business name')}
                  name="name"
                  id="name"
                  placeholder={t('Business Name')}
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
                  name="client.phone_number"
                  id="phone_numner"
                  placeholder={t('phone')}
                />
                <ErrorMsg name="client.phone_number" />
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
                  label="whatsapp"
                  name="client.whatsapp"
                  id="whatsapp"
                  placeholder="whatsapp"
                />
                <ErrorMsg name="client.whatsapp" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('offered services')}
                  name="services"
                  id="services"
                  placeholder={t('offered services')}
                />
                <ErrorMsg name="services" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('solicited services')}
                  name="client.offered_services"
                  id="offered_services"
                  placeholder={t('solicited services')}
                />
                <ErrorMsg name="client.offered_services" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('courses of interest')}
                  name="client.fav_course"
                  id="fav_course"
                  placeholder={t('courses of interest')}
                />
                <ErrorMsg name="client.fav_course" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('notification frequency')}
                  name="client.notification_frecuency"
                  id="notification_frecuency"
                  placeholder={t('notification frequency')}
                />
                <ErrorMsg name="client.notification_frecuency" />
              </div>
            </div>
            <div>
              <label className="capitalize">{t('address data')}</label>
              <div className="flex gap-x-8 my-4">
                <div className="mb-1 text-sm basis-1/3">
                  <FlagSelector name="client.addresses[0].country"></FlagSelector>
                  <ErrorMsg name="client.addresses[0].country" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <Field
                    name="client.addresses[0].city"
                    label={t('city')}
                    id="city"
                    placeholder={t('city')}
                  />
                  <ErrorMsg name="client.addresses[0].city" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <Field
                    label={t('state')}
                    name="client.addresses[0].state"
                    id="state"
                    placeholder={t('state')}
                  />
                  <ErrorMsg name="client.addresses[0].state" />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <Field
                    label={t('basic address')}
                    name="client.addresses[0].line1"
                    id="line1"
                    placeholder={t('basic address')}
                  />
                  <ErrorMsg name="client.addresses[0].line1" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                  <Field
                    label={t('more detail address')}
                    name="client.addresses[0].line2"
                    id="line2"
                    placeholder={t('more detail address')}
                  />
                  <ErrorMsg name="client.addresses[0].line2" />
                </div>
              </div>
            </div>
            <div>
              <SocialsArrayField name="client.socials" />
            </div>
            <div className="mb-6"></div>
          </div>
          <ErrorMsg name="detail" />
          {/* {loading && <Loader />} */}
        </DialogContent>
        <DialogActions>
          <Box
            display="flex"
            className="gap-x-4"
            justifyContent="space-between"
          >
            <Button onclick={handleClose}>{t('Cancel')}</Button>
            {/* <button type="submit">{!edit ? "Crear" : "Editar"}</button> */}
            <SubmitButton>{!edit ? t('Create') : t('Editar')}</SubmitButton>
          </Box>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
