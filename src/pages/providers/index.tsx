import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { FlagSelector } from '@components/forms/FlagSelector';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import { CreateForm } from '@components/pages/providers/CreateForm';
import { deleteProvider, getProvider, getProviders, postProvider, putProvider } from '@fetches/providers';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import MiTable from '@components/table/MiTable';
import SearchBar from '@components/layout/SearchBar';
import useSWR from 'swr';
import Loader from '@components/Loader';
import { ProvidersHeaders } from '@components/data/Headers';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';
import Alert from '@components/layout/Alert';
import AddIcon from '@mui/icons-material/Add';
import {  flattenJSONProvider } from '@utils/flattenJSON';

const ProvidersButton = ({ onclick }: any) => {
  return (
    <Button endIcon={<AddIcon />} onclick={onclick}>
      Añadir Proveedor
    </Button>
  );
};

let initValues = {
  representant: {
    addresses: [
      {
        line1: "lin1 re",
        line2: "lin2 re",
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
    ],
    // charge:"string", Tiene que estar y no esta 
    phone_number: "+584241315948",  //
    // local_phone_number: "+584241315948",  //
    fav_course: "curso bonito", // No debe estar
    notification_frecuency: "1 vez al mes", // No debe estar
    first_name: "juan", //
    last_name: "perez",  //
    personal_email: "user2@example.com", //
    business_email: "user5@example.com"  //
  },
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
  ],
  // tax_id:"222333", // Se deben enviar
  // website:"string", //
  phone_number: "+582123335544", //
  fav_course: "string", // NO
  notification_frecuency: "string", // NO
  name: "string", //
  email: "user@example.com", //
  business: [22], // NO
  // services:"Servicio que promociona"
};
// as ProviderForm

const Provider: NextPage = () => {

  const [providerData, setProviderData] = useState()

  const [openCreate, setOpenCreate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [editable, setEditable] = useState(false);

  const [initialValues, setInitial] = useState(initValues);

  const [currentId, setId] = useState<number>();

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

  const handleEditRow = async (id: number) => {
    setId(id)
    setEditable(true);
    try {
      initValues = await getProvider(id);;
    } catch (exception: any) {
      // setLoading(false);
    }
    // get de la variable y setear initial values
    handleClickOpenCreate()
  }

  const handleDeleteRow = (id: number) => {
    console.log("He aqui el id", id)
    setId(id)
    handleClickOpenDelete()
  }


  // const [loading, setLoading] = useState(false);

  const { data: provider } = useSWR('provider', getProviders);

  useEffect(() => {
    if (provider) {
      console.log('111', provider);
      const providerFlaten = provider.results.map(function (element: any) {
        return flattenJSONProvider(element);
      });
      console.log("holi", providerFlaten)
      setProviderData(providerFlaten)
    }
  }, [provider]);

  const handleSubmitCreate = async (values: FormikValues, { setStatus }: any) => {
    console.log("OnSubmit():", values);
    try {
      await postProvider(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log("exceptions:", exception)
      setStatus(exception.data);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      console.log("edit", values, currentId)
      await putProvider(values, currentId);
      setStatus({});
      handleCloseDelete();
    } catch (exception: any) {
      console.log("exceptions:", exception);
      setStatus(exception.data);
    }
  }

  const handleSubmitDelete = async () => {
    try {
      await deleteProvider(currentId);
      // setStatus({});
      handleCloseDelete();
    } catch (e) {
      // setStatus(exception.data);
      // setLoading(false);
    }
  }

  const handleSelectFlag = (e: any) => {
    console.log("Se selecciono la bandera de:", e);
  }

  const styles = {
    '& form': {
      height: '100%'
    },
    getProvider
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
        <Card name={ENTITYS[4].name}
          icon={ENTITYS[4].icon}
          color={ENTITYS[4].color}
          description={ENTITYS[4].description}
          link={ENTITYS[4].link}
          style={stylesCard} />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <ProvidersButton onclick={handleClickOpenCreate} />
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
      {providerData ? <MiTable rows={providerData}
        headTable={ProvidersHeaders}
        handleEditRow={handleEditRow}
        handleDeleteRow={handleDeleteRow}></MiTable>
        : <Loader />}
    </MainContainer>
  );
};

export default Provider;
