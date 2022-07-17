import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { ProvidersHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/providers/CreateForm';
import MiTable from '@components/table/MiTable';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import useSWR from 'swr';
import useTranslate from '@hooks/useTranslate';
import { flattenJSONProvider } from '@utils/flattenJSON';

import {
  deleteProvider,
  getProvider,
  getProviders,
  postProvider,
  putProvider,
} from '@fetches/providers';


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
        line1: 'lin1 re',
        line2: 'lin2 re',
        country: 've',
        city: 'Caracas',
        state: 'Distrito Capital',
      },
    ],
    socials: [
      {
        name: 'instagram',
        value: '@juanito',
      },
    ],
    charge: "CE02",
    phone_number: "+584241315948",  //
    local_phone: "+582121315948",  //
    fav_course: "curso bonito", // No debe estar
    notification_frecuency: "1 vez al mes", // No debe estar
    first_name: "juan", //
    last_name: "perez",  //
    personal_email: "user2@example.com", //
    business_email: "user5@example.com"  //
  },
  addresses: [
    {
      line1: 'lin1',
      line2: 'lin2',
      country: 've',
      city: 'Caracas',
      state: 'Distrito Capital',
    },
  ],
  socials: [
    {
      name: 'string',
      value: 'string',
    },
  ],
  tax_id:"222333", // Se deben enviar
  website:"https://api.ati2.vittorioadesso.com/", //
  phone_number: "+582123335544", //
  fav_course: "string", // NO
  notification_frecuency: "string", // NO
  name: "PROVEEDOR CHEVERE", //
  email: "user@example.com", //
  business: [36], // NO
  // services:"Servicio que promociona"
};
// as ProviderForm

const Provider: NextPage = () => {

  const t = useTranslate()

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
    setInitial(initValues);
    mutate();
  };

  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleEditRow = async (id: number) => {
    setId(id);
    setEditable(true);
    try {
      initValues = await getProvider(id);
    } catch (exception: any) {
      // setLoading(false);
    }
    // get de la variable y setear initial values
    handleClickOpenCreate();
  };

  const handleDeleteRow = (id: number) => {
    console.log('He aqui el id', id);
    setId(id);
    handleClickOpenDelete();
  };

  // const [loading, setLoading] = useState(false);

  const { data: provider, mutate } = useSWR('provider', getProviders);

  useEffect(() => {
    if (provider) {
      console.log('111', provider);
      const providerFlaten = provider.results.map(function (element: any) {
        return flattenJSONProvider(element);
      });
      // console.log("formateo", flattenJSONProvider(initValues))
      setProviderData(providerFlaten);
    }
  }, [provider]);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    console.log('OnSubmit():', values);
    try {
      await postProvider(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log("exceptions:", exception)
      setStatus(exception.data.detail);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      console.log('edit', values, currentId);
      await putProvider(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log("exceptions:", exception);
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteProvider(currentId);
      // setStatus({});
      handleCloseDelete();
    } catch (e) {
      // setStatus(exception.data.detail);
      // setLoading(false);
    }
  };

  const handleSelectFlag = (e: any) => {
    console.log('Se selecciono la bandera de:', e);
  };

  const styles = {
    '& form': {
      height: '100%',
    },
    getProvider,
  };

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
        <Card
          name={ENTITYS[4].name}
          icon={ENTITYS[4].icon}
          color={ENTITYS[4].color}
          description={ENTITYS[4].description}
          link={ENTITYS[4].link}
          style={stylesCard}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <ProvidersButton onclick={handleClickOpenCreate} />
        <Box
          className="w-1/2 gap-x-4"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <SearchBar />
          <Box className="w-1/2">
            <FlagSelector onSelect={handleSelectFlag}></FlagSelector>
          </Box>
        </Box>
      </Box>
      <CreateForm
        open={openCreate}
        handleClose={handleCloseCreate}
        handleSubmit={!editable ? handleSubmitCreate : handleSubmitEdit}
        initValues={initialValues}
        edit={editable}
      />
      {initialValues && currentId && (
        <Alert
          open={openDelete}
          handleClose={handleCloseDelete}
          handleSubmit={handleSubmitDelete}
        >{`${t("Are you sure do you want to delete")} ${currentId}?`}</Alert>
      )}
      {providerData ? (
        <MiTable
          rows={providerData}
          headTable={ProvidersHeaders}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        ></MiTable>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default Provider;
