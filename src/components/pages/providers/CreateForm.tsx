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
                                    name="client.phone_number"
                                    id="phone_numner"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Teléfono"
                                />
                                <ErrorMsg name="client.phone_number" />
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
                                    Servicio solicitado
                                </label>
                                <Field
                                    label="Servicio solicitado"
                                    name="services"
                                    id="services"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Servicio solicitado"
                                />
                                <ErrorMsg name="services" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="offered_services"
                                >
                                    Servicios que ofrezco
                                </label>
                                <Field
                                    label="Servicios que ofrezco"
                                    name="client.offered_services"
                                    id="offered_services"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Servicios que ofrezco"
                                />
                                <ErrorMsg name="client.offered_services" />
                            </div>
                        </div>
                        <div className="flex gap-x-8">
                            <div className="mb-4 text-sm basis-2/4">
                                <label htmlFor="fav_course">
                                    Cursos de interés
                                </label>
                                <Field
                                    label="Cursos de interés"
                                    name="client.fav_course"
                                    id="fav_course"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Cursos de interés"
                                />
                                <ErrorMsg name="client.fav_course" />
                            </div>
                            <div className="mb-4 text-sm basis-2/4">
                                <label
                                    htmlFor="notification_frecuency"
                                >
                                    Frecuencia de Notificaciones
                                </label>
                                <Field
                                    label="Frecuencia de Notificaciones"
                                    name="client.notification_frecuency"
                                    id="notification_frecuency"
                                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                    placeholder="Frecuencia de Notificaciones"
                                />
                                <ErrorMsg name="client.notification_frecuency" />
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
                                        name="client.addresses[0].country"
                                        id="country"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="País"
                                    /> */}
                                    <FlagSelector
                                        onSelect={handleSelectFlag}
                                    ></FlagSelector>
                                    <ErrorMsg name="client.addresses[0].country" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="city"
                                    >
                                        Ciudad
                                    </label>
                                    <Field
                                        label="Ciudad"
                                        name="client.addresses[0].city"
                                        id="city"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Ciudad"
                                    />
                                    <ErrorMsg name="client.addresses[0].city" />
                                </div>
                                <div className="mb-1 text-sm basis-1/3">
                                    <label
                                        htmlFor="state"
                                    >
                                        Estado
                                    </label>
                                    <Field
                                        label="Estado"
                                        name="client.addresses[0].state"
                                        id="state"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Estado"
                                    />
                                    <ErrorMsg name="client.addresses[0].state" />
                                </div>
                            </div>
                            <div className="flex gap-x-8">
                                <div className="mb-4 text-sm basis-2/4">
                                    <label htmlFor="line1">
                                        Línea 1
                                    </label>
                                    <Field
                                        label="Línea 1"
                                        name="client.addresses[0].line1"
                                        id="line1"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 1"
                                    />
                                    <ErrorMsg name="client.addresses[0].line1" />
                                </div>
                                <div className="mb-4 text-sm basis-2/4">
                                    <label
                                        htmlFor="line2"
                                    >
                                        Línea 2
                                    </label>
                                    <Field
                                        label="Línea 2"
                                        name="client.addresses[0].line2"
                                        id="line2"
                                        className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                                        placeholder="Línea 2"
                                    />
                                    <ErrorMsg name="client.addresses[0].line2" />
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
                    <Box  display="flex" justifyContent="space-between">
                        <Button onClick={handleClose}>Cancelar</Button>
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