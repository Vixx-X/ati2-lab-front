import Button from '@components/layout/Button';
import Form from '@components/forms/Form';
import { Field } from 'formik';
import ErrorMsg from '@components/forms/ErrorMsg';
import { SOCIAL } from '@components/data/SocialNetworks';
import Select from '@components/forms/Select';
import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FlagSelector } from '@components/forms/FlagSelector';
import useSWR from 'swr';
import { getBusinesses } from '@fetches/business';
import SubmitButton from '@components/forms/SubmitButton';
import Box from '@mui/material/Box';
import useTranslate from '@hooks/useTranslate';

export const CreateForm = ({ open, handleClose, handleSubmit, initValues, edit }: any) => {

    // console.log(initValues)

    const t = useTranslate();

    const styles = {
        '& .MuiPaper-root': {
            maxWidth: '900px'
        },
    }

    const handleSelectFlag = (ISOflag: string) => {
        initValues.client.addresses[0].country = ISOflag;
    }

    const { data: business } = useSWR('business', getBusinesses);

    return (
        <Dialog open={open} onClose={handleClose} sx={styles}>
            <DialogTitle>{!edit ? `${"Create employee"}` : `${"Edit employee"}`}</DialogTitle>
            <Form initialValues={initValues} onSubmit={handleSubmit}>
                <DialogContent>
                    <div className="pt-4">
                        <div className="mb-4 text-sm w-1/2">
                            <Box className="w-full" alignItems="center" display="flex" justifyContent="space-between">
                                <label
                                    htmlFor="business"
                                >
                                    {t("Select Employees")}
                                </label>
                                <Field className="rounded" as="select" name="business" id="business">
                                    <option disabled>--{t("Select")}--</option>
                                    {business && business.results.map(({ id, name }: any) => (
                                        <option key={id} value={id}>{name}</option>
                                    ))}
                                </Field>
                            </Box>
                            <ErrorMsg name="business" />
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="first_name">
                                    {t("name")}
                                </label>
                                <Field
                                    label={t("name")}
                                    name="user.first_name"
                                    id="first_name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("name")}
                                />
                                <ErrorMsg name="user.first_name" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="last_name">
                                    {t("lastname")}
                                </label>
                                <Field
                                    label={t("lastname")}
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
                                <label
                                    htmlFor="charge"
                                >
                                    {t("charge")}
                                </label>
                                <Field
                                    label={t("charge")}
                                    name="user.charge"
                                    id="charge"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("charge")}
                                />
                                <ErrorMsg name="user.charge" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="email"
                                >
                                    {t("e-mail")}
                                </label>
                                <Field
                                    label={t("e-mail")}
                                    name="user.email"
                                    id="email"
                                    type="email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
                                    placeholder={t("e-mail")}
                                />
                                <ErrorMsg name="user.email" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="phone_number"
                                >
                                   {t("phone")}
                                </label>
                                <Field
                                    label={t("phone")}
                                    name="phone_number"
                                    id="phone_number"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("phone")}
                                />
                                <ErrorMsg name="phone_number" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="local_phone_number"
                                >
                                    {t("rep. phone")}
                                </label>
                                <Field
                                    label="Teléfono Local"
                                    name={t("rep. phone")}
                                    id="local_phone_number"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("rep. phone")}
                                />
                                <ErrorMsg name="local_phone_number" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="document_id"
                                >
                                    {t("document id or passport")}
                                </label>
                                <Field
                                    label={t("document id or passport")}
                                    name="document_id"
                                    id="document_id"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("document id or passport")}
                                />
                                <ErrorMsg name="document_id" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="contract_modality"
                                >
                                    {t("contract modality")}
                                </label>
                                <Field
                                    label={t("contract modality")}
                                    name="contract_modality"
                                    id="contract_modality"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("Ex: fixed, professional fees")}
                                />
                                <ErrorMsg name="contract_modality" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="business_email"
                                >
                                    {t("business e-mail")}
                                </label>
                                <Field
                                    label={t("business e-mail")}
                                    name="business_email"
                                    id="business_email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("business e-mail")}
                                />
                                <ErrorMsg name="business_email" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-8">
                                <div className="mb-1 text-sm basis-1/3">
                                    <label htmlFor="country">
                                        {t("country")}
                                    </label>
                                    {/* <Field
                                        label="País"
                                        name="addresses[0].country"
                                        id="country"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="País"
                                    /> */}
                                    <FlagSelector
                                        onSelect={handleSelectFlag}
                                    ></FlagSelector>
                                    <ErrorMsg name="addresses[0].country" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="city"
                                    >
                                        {t("city")}
                                    </label>
                                    <Field
                                        label={t("city")}
                                        name="addresses[0].city"
                                        id="city"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("city")}
                                    />
                                    <ErrorMsg name="addresses[0].city" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="state"
                                    >
                                        {t("state")}
                                    </label>
                                    <Field
                                        label={t("state")}
                                        name="addresses[0].state"
                                        id="state"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("state")}
                                    />
                                    <ErrorMsg name="addresses[0].state" />
                                </div>
                            </div>
                            <div className="flex gap-x-8">
                                <div className="mb-4 text-sm basis-2/4">
                                    <label htmlFor="line1">
                                        {t("basic address")}
                                    </label>
                                    <Field
                                        label={t("basic address")}
                                        name="addresses[0].line1"
                                        id="line1"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("basic address")}
                                    />
                                    <ErrorMsg name="addresses[0].line1" />
                                </div>
                                <div className="mb-4 text-sm basis-2/4">
                                    <label
                                        htmlFor="line2"
                                    >
                                        {t("more detail address")}
                                    </label>
                                    <Field
                                        label={t("more detail address")}
                                        name="addresses[0].line2"
                                        id="line2"
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
                                        name="social_network"
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
                        <SubmitButton>{!edit ? `${t("Create")}` : `${t("Edit")}`}</SubmitButton>
                    </Box>
                </DialogActions>
            </Form>
        </Dialog>
    )
}