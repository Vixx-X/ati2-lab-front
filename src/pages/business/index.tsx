import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import { FlagSelector } from '@components/forms/FlagSelector';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import { CreateForm } from '@components/pages/business/CreateForm';
import { deleteBusiness, getBusiness, getBusinesses, postBusiness } from '@fetches/business';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import MiTable from '@components/table/MiTable';
import SearchBar from '@components/layout/SearchBar';
import { AnyPointerEvent } from 'framer-motion/types/gestures/PanSession';
import useSWR from 'swr';
import Loader from '@components/Loader';
import { BusinessHeaders } from '@components/data/Headers';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';
import Alert from '@components/layout/Alert';

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


const initValues = {
  client: {
    phone_number: "+584241315948",
    fav_course: "PHP",
    notification_frecuency: "1 vez al mes",
    offered_services: "lulu",
    whatsapp: "+584241315946",
    addresses: [
      {
        line1: "lin1",
        line2: "lin2",
        country: "ve",
        city: "Caracas",
        state: "Distrito Capital",
      }
    ],
    socials: [
      {
        name: "string",
        value: "string"
      }
    ]
  },
  name: "Pepa",
  email: "gustariz@mahisoft.com",
  services: "lili",
  tax_id: "2222222",
  website: "https://mui.com/material-ui/api/button/"
};
// as BusinessForm

const Business: NextPage = () => {

  const [businessData, setBusinessData] = useState()

  const [openCreate, setOpenCreate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [editable, setEditable] = useState(false);

  const [initialValues, setInitial] = useState(initValues);

  const [currentId, setId] = useState();

  const handleClickOpenCreate = () => {
    setOpenCreate(true);
  };

  const handleCloseCreate = () => {
    setOpenCreate(false);
    setEditable(false);
    setInitial(initValues)
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleEditRow = (id: any) => {
    setId(id)
    setEditable(true);
    // get de la variable y setear initial values
    handleClickOpenCreate()
  }

  const handleDeleteRow = (id: any) => {
    // console.log("He aqui el id", id)
    setId(id)
    handleClickOpenDelete()
  }


  // const [loading, setLoading] = useState(false);

  const { data: business } = useSWR('business', getBusinesses);

  useEffect(() => {
    if (business) {
      // console.log('111', business);
      const businessFlaten = business.results.map(function (element: any) {
        return flattenJSON(element);
      });
      // console.log("holi", businessFlaten)
      setBusinessData(businessFlaten)
    }
  }, [business]);

  const handleSubmitCreate = async (values: FormikValues, { setStatus }: any) => {
    // console.log("OnSubmit():", values);
    try {
      // await postBusiness({

      await postBusiness(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      // console.log("exceptions:", exception)
      setStatus(exception.data);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
  }

  const handleSubmitDelete = async () => {
    try {
      await deleteBusiness(currentId);
      // setStatus({});
      handleCloseDelete();
    } catch (e) {
      // setStatus(exception.data);
      // setLoading(false);
    }
  }

  const handleSelectFlag = (e: any) => {
    // console.log("Se selecciono la bandera de:", e);
  }

  const styles = {
    '& form': {
      height: '100%'
    },
  }

  const stylesCard = {
    height: 100,
    '& .MuiSvgIcon-root': {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <MainContainer>
      <Box sx={{ maxWidth: 500 }}>
        <Card name={ENTITYS[1].name}
          icon={ENTITYS[1].icon}
          color={ENTITYS[1].color}
          description={ENTITYS[1].description}
          link={ENTITYS[1].link}
          style={stylesCard} />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <BusinessButton onclick={handleClickOpenCreate} />
        <Box className="w-1/2 gap-x-4" display="flex" alignItems="center" justifyContent="space-between">
          <SearchBar />
          <Box className="w-1/2">
            <FlagSelector
              onSelect={handleSelectFlag}
            ></FlagSelector>
          </Box>
        </Box>
      </Box>
      <CreateForm
        open={openCreate}
        handleClose={handleCloseCreate}
        handleSubmit={!editable ? handleSubmitCreate : handleSubmitEdit}
        initValues={initialValues}
        edit={editable} />
      {initialValues && currentId && <Alert open={openDelete}
        handleClose={handleCloseDelete}
        handleSubmit={handleSubmitDelete}>{`¿Está seguro que desea eliminar a ${currentId}?`}</Alert>}
      {businessData ? <MiTable rows={businessData}
        headTable={BusinessHeaders}
        handleEditRow={handleEditRow}
        handleDeleteRow={handleDeleteRow}></MiTable>
        : <Loader />}
    </MainContainer>
  );
};

export default Business;
