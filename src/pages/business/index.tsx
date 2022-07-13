import { useState } from 'react';

import type { NextPage } from 'next';

import { FlagSelector } from '@components/forms/FlagSelector';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import { CreateForm } from '@components/pages/business/CreateForm';
import { postBusiness } from '@fetches/user';
import AddIcon from '@mui/icons-material/Add';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import MiTable from '@components/table/MiTable';
import SearchBar from '@components/layout/SearchBar';

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
    client : {
      phone_number: '',
      fav_course: '',
      notification_frecuency: '',
      offered_services: '',
      whatsapp: '',
      // line1: '',
      // line2: '',
      // city: '',
      // state: '',
      // country: '',
      // socials: []
    },
    name: '',
    email: '',
    services: '',
    task_id: '',
    // website: '',
  };
  // as BusinessForm

  const handleSubmitCreate = async (values: FormikValues, { setStatus }: any) => {
    console.log("Buenas poliedro de caracas", values)
    // setLoading(true);
    try {
      await postBusiness({
        "client": {
          "phone_number": "+584241315948",
          "fav_course": "PHP",
          "notification_frecuency": "1 vez al mes",
          "offered_services": "lulu",
          "whatsapp": "+584241315946",
          "addresses": [
            {
              "line1": "lin1",
              "line2": "lin2",
              "country": "ve",
              "city": "Caracas",
              "state": "Distrito Capital",
            }
          ],
          "socials": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        },
        "name": "Pepa",
        "email": "gustariz@mahisoft.com",
        "services": "lili",
        "tax_id": "2222222",
        "website": "https://mui.com/material-ui/api/button/"
      });
      setStatus({});
    } catch (exception: any) {
      setStatus(exception.data);
      // setLoading(false);
    }
  };




  return (
    <MainContainer>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <BusinessButton onclick={handleClickOpen} />
        <SearchBar />
      </Box>
      <CreateForm
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmitCreate}
        initValues={initValues} />
      <FlagSelector
        onSelect={handleSelectFlag}
      ></FlagSelector>
      <MiTable rows={businessData}></MiTable>
    </MainContainer>
  );
};

export default Business;
