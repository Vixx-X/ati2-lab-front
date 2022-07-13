import { useState } from 'react';

import type { NextPage } from 'next';

import Loader from '@components/Loader';
import { SOCIAL } from '@components/data/SocialNetworks';
import ErrorMsg from '@components/forms/ErrorMsg';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Select from '@components/forms/Select';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import FormDialog from '@components/layout/modals/GeneralModal';
import Modal from '@components/layout/modals/GeneralModal';

import AddIcon from '@mui/icons-material/Add';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import { Field } from 'formik';

import SearchBar from '../../components/layout/SearchBar';
import MiTable from '../../components/table/MiTable';

const businessData = [
  {
    id: 1,
    nombre: 'Edu',
    telefono: '123-123123',
    servicios: 'Hombre de compañia',
    curso: 'baile exotico',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.eduguapo.com',
  },
  {
    id: 2,
    nombre: 'Gabriela Valentina',
    telefono: '123-123123',
    servicios: 'Estudiante',
    curso: 'estudiante',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.gabisegundonombrevalentina.com',
  },
  {
    id: 3,
    nombre: 'Edu',
    telefono: '123-123123',
    servicios: 'Hombre de compañia',
    curso: 'baile exotico',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.eduguapo.com',
  },
];

const BusinessButton = ({ onclick }: any) => {
  return (
    <Button endIcon={<DomainAddIcon />} onclick={onclick}>
      Añadir Empresa
    </Button>
  );
};

const Business: NextPage = () => {
  const handleSelectFlag = (e: any) => {
    console.log('Se selecciono la bandera de:', e);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState(false);

  const initValues = {
    password: '',
    username: '',
  };
  // as SigninForm

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    setLoading(true);
    try {
      // await login(values.username, values.password);
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <Box
        display="flex"
        alignItems='center'
        justifyContent="space-between"
        className="my-8"
      >
        <BusinessButton onclick={handleClickOpen} />
        <Box
          className="w-1/2"
          display="flex"
          alignItems='center'
          justifyContent="space-between"
        >
          <SearchBar />
          <Box className="w-1/2"><FlagSelector onSelect={handleSelectFlag} /></Box>
        </Box>
      </Box>
      <Modal
        open={open}
        handleClose={handleClose}
        CancelButton={''}
        AcceptButton={''}
      >
        <Form initialValues={initValues} onSubmit={handleSubmit}>
          <>
            <div className="pt-4">
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="name">Nombre</label>
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
                  <label htmlFor="id_number">
                    Numero de identificación tributaria
                  </label>
                  <Field
                    label="Numero de identificación tributaria"
                    name="id_number"
                    id="id_number"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder="Numero de identificación tributaria"
                  />
                  <ErrorMsg name="id_number" />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="phone_number">Teléfono</label>
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
                  <label htmlFor="email">E-mail</label>
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
                  <label htmlFor="website">Sitio Web</label>
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
                  <label htmlFor="whatsapp">Whatsapp</label>
                  <Field
                    label="Whatsapp"
                    name="whatsapp"
                    id="whatsapp"
                    type="whatsapp"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder="Whatsapp"
                  />
                  <ErrorMsg name="whatsapp" />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="request_service">Servicio solicitado</label>
                  <Field
                    label="Servicio solicitado"
                    name="request_service"
                    id="request_service"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder="Servicio solicitado"
                  />
                  <ErrorMsg name="request_service" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="offert_service">Servicios que ofrezco</label>
                  <Field
                    label="Servicios que ofrezco"
                    name="offert_service"
                    id="offert_service"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder="Servicios que ofrezco"
                  />
                  <ErrorMsg name="offert_service" />
                </div>
              </div>
              <div className="flex gap-x-8">
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="pref_course">Cursos de interés</label>
                  <Field
                    label="Cursos de interés"
                    name="pref_course"
                    id="pref_course"
                    className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                    placeholder="Cursos de interés"
                  />
                  <ErrorMsg name="pref_course" />
                </div>
                <div className="mb-4 text-sm basis-2/4">
                  <label htmlFor="notification_frecuency">
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
              <div>
                <div className="flex gap-x-8">
                  <div className="mb-1 text-sm basis-1/3">
                    <label htmlFor="country">País</label>
                    <Field
                      label="País"
                      name="country"
                      id="country"
                      className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                      placeholder="País"
                    />
                    <ErrorMsg name="country" />
                  </div>
                  <div className="mb-1 text-sm basis-1/3">
                    <label htmlFor="city">Ciudad</label>
                    <Field
                      label="Ciudad"
                      name="city"
                      id="city"
                      className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                      placeholder="Ciudad"
                    />
                    <ErrorMsg name="city" />
                  </div>
                  <div className="mb-1 text-sm basis-1/3">
                    <label htmlFor="state">Estado</label>
                    <Field
                      label="Estado"
                      name="state"
                      id="state"
                      className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                      placeholder="Estado"
                    />
                    <ErrorMsg name="state" />
                  </div>
                </div>
                <div className="flex gap-x-8">
                  <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="line1">Línea 1</label>
                    <Field
                      label="Línea 1"
                      name="line1"
                      id="line1"
                      className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                      placeholder="Línea 1"
                    />
                    <ErrorMsg name="line1" />
                  </div>
                  <div className="mb-4 text-sm basis-2/4">
                    <label htmlFor="line2">Línea 2</label>
                    <Field
                      label="Línea 2"
                      name="line2"
                      id="line2"
                      className="rounded py-2 px-2 text-gray-600 w-full mt-1"
                      placeholder="Línea 2"
                    />
                    <ErrorMsg name="line2" />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="social_newtworks">Redes sociales</label>
                <div className="flex gap-x-16 justify-between">
                  <div className="basis-4/5 gap-x-4 text-sm flex">
                    <div className="basis-1/5">
                      <Select choices={SOCIAL} placeholder="Red Social" />
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
                    <Button endIcon={<AddIcon />}></Button>
                  </div>
                </div>
              </div>

              <div className="mb-6"></div>
            </div>
            <ErrorMsg name="detail" />
            {loading && <Loader />}
          </>
        </Form>
      </Modal>
      <MiTable rows={businessData}></MiTable>
    </MainContainer>
  );
};

export default Business;
