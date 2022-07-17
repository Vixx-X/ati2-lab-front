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

export const CreateForm = ({ open, handleClose, handleSubmit, initValues, edit }: any) => {

    // console.log(initValues)

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
            <DialogTitle>{!edit ? "Crear Empleado" : "Editar Empleado"}</DialogTitle>
            <Form initialValues={initValues} onSubmit={handleSubmit}>
                <DialogContent>
                    <div className="pt-4">
                        <div className="mb-4 text-sm w-1/2">
                            <Box className="w-full" alignItems="center" display="flex" justifyContent="space-between">
                                <label
                                    htmlFor="business"
                                >
                                    Seleccionar Empresa
                                </label>
                                <Field className="rounded" as="select" name="business" id="business">
                                    <option disabled>--Seleccionar--</option>
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
                                    Nombre
                                </label>
                                <Field
                                    label="Nombre de usuario"
                                    name="user.first_name"
                                    id="first_name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Nombre de cliente"
                                />
                                <ErrorMsg name="user.first_name" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="last_name">
                                    Apellido
                                </label>
                                <Field
                                    label="Apellido de usuario"
                                    name="user.last_name"
                                    id="last_name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Apellido de cliente"
                                />
                                <ErrorMsg name="user.last_name" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="charge"
                                >
                                    Cargo
                                </label>
                                <Field
                                    label="Cargo"
                                    name="user.charge"
                                    id="charge"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Cargo"
                                />
                                <ErrorMsg name="user.charge" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="email"
                                >
                                    E-mail
                                </label>
                                <Field
                                    label="E-mail"
                                    name="user.email"
                                    id="email"
                                    type="email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
                                    placeholder="E-mail"
                                />
                                <ErrorMsg name="user.email" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="phone_number"
                                >
                                    Teléfono Celular
                                </label>
                                <Field
                                    label="Teléfono Celular"
                                    name="phone_number"
                                    id="phone_number"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Teléfono Celular"
                                />
                                <ErrorMsg name="phone_number" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="local_phone_number"
                                >
                                    Teléfono Local
                                </label>
                                <Field
                                    label="Teléfono Local"
                                    name="local_phone_number"
                                    id="local_phone_number"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Teléfono Local"
                                />
                                <ErrorMsg name="local_phone_number" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="document_id"
                                >
                                    Cedula o nro pasaporte
                                </label>
                                <Field
                                    label="Cedula o nro pasaporte"
                                    name="document_id"
                                    id="document_id"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Cedula o nro pasaporte"
                                />
                                <ErrorMsg name="document_id" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="contract_modality"
                                >
                                    Modalidad de contratación
                                </label>
                                <Field
                                    label="Teléfono Local"
                                    name="contract_modality"
                                    id="contract_modality"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Ej: fijo, honorarios profesionales"
                                />
                                <ErrorMsg name="contract_modality" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="business_email"
                                >
                                    Correo electrónico de empresa
                                </label>
                                <Field
                                    label="Correo electrónico de empresa"
                                    name="business_email"
                                    id="business_email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Correo electrónico de empresa"
                                />
                                <ErrorMsg name="business_email" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-8">
                                <div className="mb-1 text-sm basis-1/3">
                                    <label htmlFor="country">
                                        País
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
                                        Ciudad
                                    </label>
                                    <Field
                                        label="Ciudad"
                                        name="addresses[0].city"
                                        id="city"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Ciudad"
                                    />
                                    <ErrorMsg name="addresses[0].city" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="state"
                                    >
                                        Estado
                                    </label>
                                    <Field
                                        label="Estado"
                                        name="addresses[0].state"
                                        id="state"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Estado"
                                    />
                                    <ErrorMsg name="addresses[0].state" />
                                </div>
                            </div>
                            <div className="flex gap-x-8">
                                <div className="mb-4 text-sm basis-2/4">
                                    <label htmlFor="line1">
                                        Línea 1
                                    </label>
                                    <Field
                                        label="Línea 1"
                                        name="addresses[0].line1"
                                        id="line1"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 1"
                                    />
                                    <ErrorMsg name="addresses[0].line1" />
                                </div>
                                <div className="mb-4 text-sm basis-2/4">
                                    <label
                                        htmlFor="line2"
                                    >
                                        Línea 2
                                    </label>
                                    <Field
                                        label="Línea 2"
                                        name="addresses[0].line2"
                                        id="line2"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 2"
                                    />
                                    <ErrorMsg name="addresses[0].line2" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="social_newtworks">
                                Redes sociales
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
                        <Button onclick={handleClose}>Cancelar</Button>
                        <SubmitButton>{!edit ? "Crear" : "Editar"}</SubmitButton>
                    </Box>
                </DialogActions>
            </Form>
        </Dialog>
    )
}