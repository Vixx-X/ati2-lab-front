import Button from '@components/layout/Button';
import Form from '@components/forms/Form';
import { Field } from 'formik';
import ErrorMsg from '@components/forms/ErrorMsg';
import { SOCIAL } from '@components/data/SocialNetworks';
import Select from '@components/forms/Select';
import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FlagSelector } from '@components/forms/FlagSelector';
import SubmitButton from '@components/forms/SubmitButton'
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';


export const CreateForm = ({ open, handleClose, handleSubmit, initValues, edit }: any) => {

    console.log(initValues)

    const styles = {
        '& .MuiPaper-root': {
            maxWidth: '900px'
        },
    }

    const handleSelectFlag = (ISOflag:string) =>{
        initValues.client.addresses[0].country = ISOflag;
    }

    return (
        <Dialog open={open} onClose={handleClose} sx={styles}>
            <DialogTitle>{!edit ? "Crear Proveedor" : "Editar Proveedor"}</DialogTitle>
            <DialogTitle className="py-0 text-center"> Datos proveedor </DialogTitle>
            <Form initialValues={initValues} onSubmit={handleSubmit}>
                <DialogContent>
                    <div className="pt-4">
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="name">
                                    Nombre
                                </label>
                                <Field
                                    label="Nombre de usuario"
                                    name="name"
                                    id="name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Nombre de la empresa"
                                />
                                <ErrorMsg name="name" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="tax_id"
                                >
                                    Numero de identificación tributaria
                                </label>
                                <Field
                                    label="Numero de identificación tributaria"
                                    name="tax_id"
                                    id="tax_id"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Numero de identificación tributaria"
                                />
                                <ErrorMsg name="tax_id" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="phone_number"
                                >
                                    Teléfono
                                </label>
                                <Field
                                    label="Teléfono"
                                    name="phone_number"
                                    id="phone_numner"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Teléfono"
                                />
                                <ErrorMsg name="phone_number" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="email"
                                >
                                    E-mail
                                </label>
                                <Field
                                    label="E-mail"
                                    name="email"
                                    id="email"
                                    type="email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1 text-sm"
                                    placeholder="E-mail"
                                />
                                <ErrorMsg name="email" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="website"
                                >
                                    Sitio Web
                                </label>
                                <Field
                                    label="Sitio web"
                                    name="website"
                                    id="website"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Sitio Web"
                                />
                                <ErrorMsg name="website" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="offered_services"
                                >
                                    Servicios que ofrezco
                                </label>
                                <Field
                                    label="Servicios que ofrezco"
                                    name="offered_services"
                                    id="offered_services"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Servicios que ofrezco"
                                />
                                <ErrorMsg name="offered_services" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="tax_id"
                                >
                                    Numero de identificacion tributaria
                                </label>
                                <Field
                                    label="Numero de identificacion tributaria"
                                    name="tax_id"
                                    id="tax_id"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Numero de identificacion tributaria"
                                />
                                <ErrorMsg name="notification_frecuency" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="notification_frecuency"
                                >
                                    Frecuencia de Notificaciones
                                </label>
                                <Field
                                    label="Frecuencia de Notificaciones"
                                    name="notification_frecuency"
                                    id="notification_frecuency"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Frecuencia de Notificaciones"
                                />
                                <ErrorMsg name="notification_frecuency" />
                            </div>
                        </div>
                        <div >
                            <div className="flex gap-x-8">
                                <div className="mb-1 text-sm basis-1/3">
                                    <label htmlFor="country">
                                        País
                                    </label>
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
                    </div>
                    <DialogTitle className="text-center"> Datos Representante </DialogTitle>
                    <Divider></Divider>
                    <div className="pt-4">
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.name">
                                    Nombre de Representante
                                </label>
                                <Field
                                    label="Nombre de representante"
                                    name="representant.name"
                                    id="representant.name"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Nombre de la empresa"
                                />
                                <ErrorMsg name="representant.name" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.lastname">
                                    Apellido de Representante
                                </label>
                                <Field
                                    label="Apellido de representante"
                                    name="representant.lastname"
                                    id="representant.lastname"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Apellido de Representante"
                                />
                                <ErrorMsg name="representant.lastname" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mb-4 text-sm basis-1/3">
                                <label htmlFor="representant.charge">
                                    Cargo del representante
                                </label>
                                <Field
                                    label="Cargo del representante"
                                    name="representant.charge"
                                    id="representant.charge"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Cargo del representante"
                                />
                                <ErrorMsg name="representant.personal_email" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.personal_email">
                                    Correo electronico personal
                                </label>
                                <Field
                                    label="Correo electronico personal"
                                    name="representant.personal_email"
                                    id="representant.personal_email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Correo electronico personal"
                                />
                                <ErrorMsg name="representant.personal_email" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.business_email">
                                    Correo electronico empresarial
                                </label>
                                <Field
                                    label="Correo electronico empresarial"
                                    name="representant.business_email"
                                    id="representant.business_email"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Correo electronico empresarial"
                                />
                                <ErrorMsg name="representant.business_email" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.local_phone">
                                    Telefono Local
                                </label>
                                <Field
                                    label="Telefono Local"
                                    name="representant.local_phone"
                                    id="representant.local_phone"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Telefono Local"
                                />
                                <ErrorMsg name="representant.local_phone" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="representant.phone_number">
                                    Telefono Celular
                                </label>
                                <Field
                                    label="Telefono Celular"
                                    name="representant.phone_number"
                                    id="representant.phone_number"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Telefono Celular"
                                />
                                <ErrorMsg name="representant.phone_number" />
                            </div>
                        </div>
                        <div >
                            <div className="flex gap-x-8">
                                <div className="mb-1 text-sm basis-1/3">
                                    <label htmlFor="representant.addresses.country">
                                        País
                                    </label>
                                    <FlagSelector
                                        onSelect={handleSelectFlag}
                                    ></FlagSelector>
                                    <ErrorMsg name="representant.addresses[0].country" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="city"
                                    >
                                        Ciudad
                                    </label>
                                    <Field
                                        label="Ciudad"
                                        name="representant.addresses[0].city"
                                        id="city"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Ciudad"
                                    />
                                    <ErrorMsg name="representant.addresses[0].city" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="representant.addresses[0].state"
                                    >
                                        Estado
                                    </label>
                                    <Field
                                        label="Estado"
                                        name="representant.addresses[0].state"
                                        id="state"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Estado"
                                    />
                                    <ErrorMsg name="representant.addresses[0].state" />
                                </div>
                            </div>
                            <div className="flex gap-x-8">
                                <div className="mb-4 text-sm basis-2/4">
                                    <label htmlFor="line1">
                                        Línea 1
                                    </label>
                                    <Field
                                        label="Línea 1"
                                        name="representant.addresses.line1"
                                        id="line1"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 1"
                                    />
                                    <ErrorMsg name="representant.addresses.line1" />
                                </div>
                                <div className="mb-4 text-sm basis-2/4">
                                    <label
                                        htmlFor="line2"
                                    >
                                        Línea 2
                                    </label>
                                    <Field
                                        label="Línea 2"
                                        name="representant.addresses.line2"
                                        id="line2"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 2"
                                    />
                                    <ErrorMsg name="representant.addresses.line2" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="representant.socials">
                                Redes sociales
                            </label>
                            <div className="flex gap-x-16 justify-between">
                                <div className="basis-4/5 gap-x-4 text-sm flex">
                                    <div className="basis-1/5">
                                        <Select choices={SOCIAL} placeholder='Red Social' />
                                    </div>
                                    <Field
                                        label="Redes sociales"
                                        name="representant.socials[0].value"
                                        id="representant.socials[0].value"
                                        className="rounded py-2 px-2 text-gray-600 mt-1 basis-4/5"
                                        placeholder="Red Social"
                                    />
                                </div>
                                <div className="basis-1/5">
                                    <Button endIcon={<AddIcon />}>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ErrorMsg name="detail" />
                    {/* {loading && <Loader />} */}
                </DialogContent>
                <DialogActions>
                    <Box  display="flex" justifyContent="space-between">
                        <Button onclick={handleClose}>Cancelar</Button>
                        {/* <button type="submit">{!edit ? "Crear" : "Editar"}</button> */}
                        <SubmitButton>
                            {!edit ? "CREAR" : "EDITAR"}
                        </SubmitButton>
                    </Box>
                </DialogActions>
            </Form>
        </Dialog>
    )
}