import * as React from 'react';

import { SOCIAL } from '@components/data/SocialNetworks';
import { BusinessSelect } from '@components/forms/BusinessSelect';
import ErrorMsg from '@components/forms/ErrorMsg';
import Field from '@components/forms/Field';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Select from '@components/forms/Select';
import SocialsArrayField from '@components/forms/SocialsArrayField';
import SubmitButton from '@components/forms/SubmitButton';
import Button from '@components/layout/Button';

import useTranslate from '@hooks/useTranslate';

import AddIcon from '@mui/icons-material/Add';
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
  const styles = {
    '& .MuiPaper-root': {
      maxWidth: '900px',
    },
  };

  const t = useTranslate();

  return (
    <Dialog open={open} onClose={handleClose} sx={styles}>
      <DialogTitle>
        {!edit ? `${t('Create employee')}` : `${t('Edit employee')}`}
      </DialogTitle>
      <Form initialValues={initValues} onSubmit={handleSubmit}>
        <DialogContent>
          <div className="pt-4">
            <div className="mb-4 text-sm w-1/2">
              <Box
                className="w-full"
                alignItems="center"
                display="flex"
                justifyContent="space-between"
              >
                <BusinessSelect
                  name="business"
                  placeholder={t('select business')}
                  id="business"
                />
              </Box>
              <ErrorMsg name="business" />
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('name')}
                  name="user.first_name"
                  id="first_name"
                  placeholder={t('name')}
                />
                <ErrorMsg name="user.first_name" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('lastname')}
                  name="user.last_name"
                  id="last_name"
                  placeholder={t('Lastname')}
                />
                <ErrorMsg name="user.last_name" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('charge')}
                  name="user.charge"
                  id="charge"
                  placeholder={t('charge')}
                />
                <ErrorMsg name="user.charge" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('e-mail')}
                  name="user.email"
                  id="email"
                  type="email"
                  placeholder={t('e-mail')}
                />
                <ErrorMsg name="user.email" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('phone')}
                  name="phone_number"
                  id="phone_number"
                  placeholder={t('phone')}
                />
                <ErrorMsg name="phone_number" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('local phone')}
                  name="local_phone_number"
                  id="local_phone_number"
                  placeholder={t('local phone')}
                />
                <ErrorMsg name="local_phone_number" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('document id or passport')}
                  name="document_id"
                  id="document_id"
                  placeholder={t('document id or passport')}
                />
                <ErrorMsg name="document_id" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('contract modality')}
                  name="contract_modality"
                  id="contract_modality"
                  placeholder={t('Ex: fixed, professional fees')}
                />
                <ErrorMsg name="contract_modality" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <Field
                  label={t('business e-mail')}
                  name="business_email"
                  id="business_email"
                  placeholder={t('business e-mail')}
                />
                <ErrorMsg name="business_email" />
              </div>
            </div>
            <div>
              <label className="capitalize">{t('address data')}</label>
              <div className="flex gap-x-8 my-4">
                <div className="mb-1 text-sm basis-1/3">
                  <FlagSelector name="addresses[0].country"></FlagSelector>
                  <ErrorMsg name="addresses[0].country" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <Field
                    label={t('city')}
                    name="addresses[0].city"
                    id="city"
                    placeholder={t('city')}
                  />
                  <ErrorMsg name="addresses[0].city" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <Field
                    label={t('state')}
                    name="addresses[0].state"
                    id="state"
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
                    id="line1"
                    placeholder={t('basic address')}
                  />
                  <ErrorMsg name="addresses[0].line1" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                  <Field
                    label={t('more detail address')}
                    name="addresses[0].line2"
                    id="line2"
                    placeholder={t('more detail address')}
                  />
                  <ErrorMsg name="addresses[0].line2" />
                </div>
              </div>
            </div>
            <div>
              <SocialsArrayField name="socials" />
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
            <SubmitButton>
              {!edit ? `${t('Create')}` : `${t('Edit')}`}
            </SubmitButton>
          </Box>
        </DialogActions>
      </Form>
    </Dialog>
  );
};
