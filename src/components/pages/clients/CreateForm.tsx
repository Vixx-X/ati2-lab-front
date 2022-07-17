import * as React from 'react';

import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Select from '@components/forms/Select';
import SubmitButton from '@components/forms/SubmitButton';
import Button from '@components/layout/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Field } from 'formik';
import useTranslate from '@hooks/useTranslate';

export const CreateForm = ({
  open,
  handleClose,
  handleSubmit,
  initValues,
  edit,
}: any) => {

  const t = useTranslate()

  console.log(initValues)

  const styles = {
    '& .MuiPaper-root': {
      maxWidth: '900px'
    },
  }

  const handleSelectFlag = (ISOflag: string) => {
    initValues.client.addresses[0].country = ISOflag;
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={styles}>
      <DialogTitle>{!edit ? ` ${t("Create Particular Client")} ` : `${t("Edit Particular Client")}`}</DialogTitle>
      <Form initialValues={initValues} onSubmit={handleSubmit}>
        <DialogContent>
          <div className="pt-4">
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label htmlFor="first_name">
                  {t("Name")}
                </label>
                <Field
                  label={t("Name")}
                  name="user.first_name"
                  id="first_name"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Name")}
                />
                <ErrorMsg name="user.first_name" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <label htmlFor="last_name">
                  {t("Lastname")}
                </label>
                <Field
                  label={t("Lastname")}
                  name="user.last_name"
                  id="last_name"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Lastname")}
                />
                <ErrorMsg name="user.last_name" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label htmlFor="type">
                  {t("Type")}
                </label>
                <Field
                  label={t("Type")}
                  name="type"
                  id="type"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Ej: Student, Employ")}
                />
                <ErrorMsg name="type" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <label htmlFor="company">
                  {t("Company")}
                </label>
                <Field
                  label={t("Company")}
                  name="company"
                  id="company"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Company")}
                />
                <ErrorMsg name="company" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="charge"
                >
                  {t("Charge")}
                </label>
                <Field
                  label={t("Charge")}
                  name="user.charge"
                  id="charge"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Charge")}
                />
                <ErrorMsg name="user.charge" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="email"
                >
                  {t("E-Mail")}
                </label>
                <Field
                  label={t("E-Mail")}
                  name="user.email"
                  id="email"
                  type="email"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
                  placeholder={t("E-Mail")}
                />
                <ErrorMsg name="user.email" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="phone_number"
                >
                  {t("Phone")}
                </label>
                <Field
                  label={t("Phone")}
                  name="client.phone_number"
                  id="phone_numner"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Phone")}
                />
                <ErrorMsg name="client.phone_number" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="whatsapp"
                >
                  Whatsapp
                </label>
                <Field
                  label="Whatsapp"
                  name="client.whatsapp"
                  id="whatsapp"
                  type="whatsapp"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder="Whatsapp"
                />
                <ErrorMsg name="client.whatsapp" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="offered_services"
                >
                  {t("Services I offer")}
                </label>
                <Field
                  label={t("Services I offer")}
                  name="client.offered_services"
                  id="offered_services"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Services I offer")}
                />
                <ErrorMsg name="client.offered_services" />
              </div>
            </div>
            <div className="flex gap-x-8">
              <div className="mb-4 text-sm basis-2/4">
                <label htmlFor="fav_course">
                  {t("Courses of interest")}
                </label>
                <Field
                  label={t("Courses of interest")}
                  name="client.fav_course"
                  id="fav_course"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Courses of interest")}
                />
                <ErrorMsg name="client.fav_course" />
              </div>
              <div className="mb-4 text-sm basis-2/4">
                <label
                  htmlFor="notification_frecuency"
                >
                  {t("Notification Frequency")}
                </label>
                <Field
                  label={t("Notification Frequency")}
                  name="client.notification_frecuency"
                  id="notification_frecuency"
                  className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                  placeholder={t("Notification Frequency")}
                />
                <ErrorMsg name="client.notification_frecuency" />
              </div>
            </div>
            <div>
              <div className="flex gap-x-8">
                <div className="mb-1 text-sm basis-1/3">
                  <label htmlFor="country">
                    {t("Country")}
                  </label>
                  <FlagSelector name="client.addresses[0].country" ></FlagSelector>
                  <ErrorMsg name="client.addresses[0].country" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <label
                    htmlFor="city"
                  >
                    {t("City")}
                  </label>
                  <Field
                    label={t("City")}
                    name="client.addresses[0].city"
                    id="city"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder={t("City")}
                  />
                  <ErrorMsg name="client.addresses[0].city" />
                </div>
                <div className="mb-1 text-sm basis-1/3">
                  <label
                    htmlFor="state"
                  >
                    {t("State")}
                  </label>
                  <Field
                    label={t("State")}
                    name="client.addresses[0].state"
                    id="state"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder={t("State")}
                  />
                  <ErrorMsg name="client.addresses[0].state" />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="line1">
                    {t("Line 1")}
                  </label>
                  <Field
                    label={t("Line 1")}
                    name="client.addresses[0].line1"
                    id="line1"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder={t("Line 1")}
                  />
                  <ErrorMsg name="client.addresses[0].line1" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                  <label
                    htmlFor="line2"
                  >
                    {t("Line 2")}
                  </label>
                  <Field
                    label={t("Line 1")}
                    name="client.addresses[0].line2"
                    id="line2"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder={t("Line 1")}
                  />
                  <ErrorMsg name="client.addresses[0].line2" />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="social_newtworks">
                {t("Social Media")}
              </label>
              <div className="flex gap-x-16 justify-between">
                <div className="basis-4/5 gap-x-4 text-sm flex">
                  <div className="basis-1/5">
                    <Select choices={SOCIAL} placeholder='Red Social' />
                  </div>
                  <Field
                    label=""
                    name={t("Social Media")}
                    id="social_network"
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

            <div className="mb-6">
            </div>
          </div>
          <ErrorMsg name="detail" />
          {/* {loading && <Loader />} */}
        </DialogContent>
        <DialogActions>
          <Box display="flex" className="gap-x-4" justifyContent="space-between">
            <Button onclick={handleClose}>{t("Cancel")}</Button>
            <SubmitButton>{!edit ? t("Create") : t("Edit")}</SubmitButton>
          </Box>
        </DialogActions>
      </Form>
    </Dialog>
  )
}
