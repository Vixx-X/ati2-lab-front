import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import { FlagSelector } from '@components/forms/FlagSelector';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import { CreateForm } from '@components/pages/business/CreateForm';
import { getBusiness, postBusiness } from '@fetches/user';

import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import MiTable from '@components/table/MiTable';
import SearchBar from '@components/layout/SearchBar';
import { AnyPointerEvent } from 'framer-motion/types/gestures/PanSession';
import useSWR from 'swr';
import Loader from '@components/Loader';
import { BusinessHeaders } from '@components/data/Headers';

const businessDataf = [
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

const flattenJSON = (obj: any = {}, res: any = {}) => {
  for (const key in obj) {
    if (typeof obj[key] !== 'object') {
      res[key] = obj[key];
    } else if (key == 'socials') {
      let a = obj[key].map(function ({ name, value }: any) {
        return `${name}: ${value}`;
      }).join("\n");
      res[key] = a;
    } else {
      flattenJSON(obj[key], res);
    }
  }
  return res;
};

const Business: NextPage = () => {

  const handleSelectFlag = (e: any) => {
    console.log("Se selecciono la bandera de:", e);
  }

  const [open, setOpen] = useState(false);
  const [businessData, setBusinessData] = useState()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [loading, setLoading] = useState(false);

  const { data: business } = useSWR('business', getBusiness);

  const initValues = {
    client: {
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

  useEffect(() => {
    if (business) {
      console.log('111', business);
      const businessFlaten = business.results.map(function (element: any) {
        return flattenJSON(element);
      });
      console.log("holi", businessFlaten)
      setBusinessData(businessFlaten)
      // setLoading(true)
    }
  }, [business]);

  const handleSubmitCreate = async (values: FormikValues, { setStatus }: any) => {
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

  const headers = [{},
  ]



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
      {businessData ? <MiTable rows={businessData} headTable={BusinessHeaders}></MiTable>
        : <Loader />}
    </MainContainer>
  );
};

export default Business;
