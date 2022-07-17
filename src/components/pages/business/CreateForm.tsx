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
import SubmitButton from '@components/forms/SubmitButton'
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

    return (
        <Dialog open={open} onClose={handleClose} sx={styles}>
            <DialogTitle>{!edit ? `${t("Create Business")}` : `${t("Edit Business")}`}</DialogTitle>
            <Form initialValues={initValues} onSubmit={handleSubmit}>
                <DialogContent>
                    {/* <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText> */}
                    <div className="pt-4">
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="name">
                                    {t("Name")}
                                </label>
                                <Field
                                    label={t("Enter user name")}
                                    name="name"
                                    id="name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("Business Name")}
                                />
                                <ErrorMsg name="name" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="tax_id"
                                >
                                    {t("tax identification number")}
                                </label>
                                <Field
                                    label={t("tax identification number")}
                                    name="tax_id"
                                    id="tax_id"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("tax identification number")}
                                />
                                <ErrorMsg name="tax_id" />
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
                                    name="client.phone_number"
                                    id="phone_numner"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("phone")}
                                />
                                <ErrorMsg name="client.phone_number" />
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
                                <label htmlFor="services">
                                    {t("offered services")}
                                </label>
                                <Field
                                    label= {t("offered services")}
                                    name="services"
                                    id="services"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder= {t("offered services")}
                                />
                                <ErrorMsg name="services" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="offered_services"
                                >
                                    {t("solicited services")}
                                </label>
                                <Field
                                    label={t("solicited services")}
                                    name="client.offered_services"
                                    id="offered_services"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("solicited services")}
                                />
                                <ErrorMsg name="client.offered_services" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="fav_course">
                                    {t("courses of interest")}
                                </label>
                                <Field
                                    label={t("courses of interest")}
                                    name="client.fav_course"
                                    id="fav_course"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("courses of interest")}
                                />
                                <ErrorMsg name="client.fav_course" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="notification_frecuency"
                                >
                                    {t("notification frequency")}
                                </label>
                                <Field
                                    label={t("notification frequency")}
                                    name="client.notification_frecuency"
                                    id="notification_frecuency"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder={t("notification frequency")}
                                />
                                <ErrorMsg name="client.notification_frecuency" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-8">
                                <div className="mb-1 text-sm basis-1/3">
                                    <label htmlFor="country">
                                        {t("country")}
                                    </label>
                                    <FlagSelector
                                        onSelect={handleSelectFlag}
                                    ></FlagSelector>
                                    <ErrorMsg name="client.addresses[0].country" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="city"
                                    >
                                        {t("city")}
                                    </label>
                                    <Field
                                        label={t("city")}
                                        name="client.addresses[0].city"
                                        id="city"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("city")}
                                    />
                                    <ErrorMsg name="client.addresses[0].city" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="state"
                                    >
                                        {t("state")}
                                    </label>
                                    <Field
                                        label={t("state")}
                                        name="client.addresses[0].state"
                                        id="state"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("state")}
                                    />
                                    <ErrorMsg name="client.addresses[0].state" />
                                </div>
                            </div>
                            <div className="flex gap-x-8">
                                <div className="mb-4 text-sm basis-2/4">
                                    <label htmlFor="line1">
                                        {t("basic address")}
                                    </label>
                                    <Field
                                        label={t("basic address")}
                                        name="client.addresses[0].line1"
                                        id="line1"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("basic address")}
                                    />
                                    <ErrorMsg name="client.addresses[0].line1" />
                                </div>
                                <div className="mb-4 text-sm basis-2/4">
                                    <label
                                        htmlFor="line2"
                                    >
                                        {t("more detail address")}
                                    </label>
                                    <Field
                                        label={t("more detail address")}
                                        name="client.addresses[0].line2"
                                        id="line2"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("more detail address")}
                                    />
                                    <ErrorMsg name="client.addresses[0].line2" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="social_newtworks">
                                {t("social media")}
                            </label>
                            <div className="flex gap-x-16 justify-between">
                                <div className="basis-4/5 gap-x-4 text-sm flex">
                                    <div className="basis-2/5">
                                        <Select choices={SOCIAL} placeholder={t("Social Media")} />
                                    </div>
                                    <Field
                                        label={t("social media")}
                                        name="social_network"
                                        id="social_network"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder={t("social media")}
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
                        {/* <button type="submit">{!edit ? "Crear" : "Editar"}</button> */}
                        <SubmitButton>
                            {!edit ? t("Create") : t("Editar")}
                        </SubmitButton>
                    </Box>
                </DialogActions>
            </Form>
        </Dialog>
    )
}