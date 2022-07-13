import type { NextPage } from 'next';
import { FlagSelector } from '@components/forms/FlagSelector';
import MainContainer from '@components/layout/MainContainer';
import MiTable from '../../components/table/MiTable';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Button from '@components/layout/Button';
import FormDialog from '@components/layout/modals/GeneralModal';
import { useState } from 'react';
import { FormikValues } from 'formik';
import Form from '@components/forms/Form';
import { Field } from 'formik';
import ErrorMsg from '@components/forms/ErrorMsg';
import Loader from '@components/Loader';
import { SOCIAL } from '@components/data/SocialNetworks';
import Select from '@components/forms/Select';
import AddIcon from '@mui/icons-material/Add';
import SearchBar from '../../components/layout/SearchBar'
import { Box } from '@mui/system';
import Modal from '@components/layout/modals/GeneralModal';
import { CreateForm } from '@components/pages/business/CreateForm';

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
  )
}


const Business: NextPage = () => {

  const handleSelectFlag = (e: any) => {
    console.log("Se selecciono la bandera de:", e);
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const [loading, setLoading] = useState(false);

  const initValues = {
    name: '',
    id_number: '',
    phone_number: '',
    email: '',
    website: '',
    whatsapp: '',
    request_service: '',
    offert_service: '',
    pref_course: '',
    notification_frecuency: '',
    country: '',
    city: '',
    state: '',
    line1: '',
    line2: '',
    social_network: ''
  };
  // as BusinessForm

  const handleSubmit = async (values: FormikValues, { setStatus }: any) => {
    console.log("Buenas poliedro de caracas", values)
    // setLoading(true);
    // try {
    //   // await login(values.username, values.password);
    //   setStatus({});
    // } catch (exception: any) {
    //   setStatus(exception.data);
    //   setLoading(false);
    // }
  };


  return (
    <MainContainer>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <BusinessButton onclick={handleClickOpen} />
        <SearchBar></SearchBar>
      </Box>
      <CreateForm
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        initValues={initValues} />
      <FlagSelector
        onSelect={handleSelectFlag}
      ></FlagSelector>
      <MiTable rows={businessData}></MiTable>
    </MainContainer >
  );
};

export default Business;
