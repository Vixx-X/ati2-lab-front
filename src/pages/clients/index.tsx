import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { ClientsHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/clients/CreateForm';
import MiTable from '@components/table/MiTable';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useTranslate from '@hooks/useTranslate';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { flattenJSON } from '@utils/flattenJSON';
import Form from '@components/forms/Form';
import useSWR from 'swr';

import {
  deleteClient,
  getClient,
  getClients,
  postClient,
  putClient,
} from '@fetches/clients';



const ClientsButton = ({ onclick }: any) => {

  const t = useTranslate()

  return (
    <Button endIcon={<GroupAddIcon />} onclick={onclick}>
      {t("Add Client")}
    </Button>
  );
};

let initValues = {
  user: {
    charge: 'CEO',
    first_name: 'gaby',
    last_name: 'ustariz',
    email: 'gabyustariz@hotmail.com',
  },
  type: 'estudiante',
  company: 'COMPANY COOL',
  client: {
    phone_number: '+584245556677',
    whatsapp: '+584245556677',
    fav_course: 'PHP',
    notification_frecuency: '1 vez al mes',
    offered_services: 'Curso de programacion',
    addresses: [
      {
        line1: 'casita1',
        line2: 'la calle bonita',
        city: 'caracas',
        state: 'distrito capital',
        country: 've',
      },
    ],
    socials: [
      {
        name: 'instagram',
        value: '@micasita',
      },
    ],
  },
};

const Clients: NextPage = () => {

  const t = useTranslate()

  const [clientsData, setClientData] = useState()

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
    mutate();
  };

  const handleEditRow = async (id: number) => {
    setId(id);
    setEditable(true);
    try {
      initValues = await getClient(id);
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

  const { data: clients, mutate } = useSWR('clients', getClients);

  useEffect(() => {
    if (clients) {
      console.log('111', clients);
      const clientsFlaten = clients.results.map(function (element: any) {
        console.log('datica', clientsFlaten);
        return flattenJSON(element);
      });
      console.log('holi', clientsFlaten);
      setClientData(clientsFlaten);
    }
  }, [clients]);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    console.log('OnSubmit():', values);
    try {
      await postClient(values);
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
      await putClient(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log("exceptions:", exception);
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteClient(currentId);
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
    getClient,
  };

  const stylesCard = {
    height: 100,
    '& .MuiSvgIcon-root': {
      width: '100%',
      height: '100%',
    },
  };

  const [query, setQuery] = useState<any>({});
  const initFilterValues = {
    type: query?.type ?? '',
    country: query?.country ?? '',
  };
  const handleFilter = (values: FormikValues) => {
    setQuery((prev: any) => {
      return {
        ...prev,
        ...values,
      };
    });
  };
  
  return (
    <MainContainer>
      <Box sx={{ maxWidth: 500 }}>
        <Card
          name={ENTITYS[2].name}
          icon={ENTITYS[2].icon}
          color={ENTITYS[2].color}
          description={ENTITYS[2].description}
          link={ENTITYS[2].link}
          style={stylesCard}
        />
      </Box>
      {/* <MiTable rows={clientData}></MiTable> */}
      <Box display="flex" justifyContent="space-around" className="my-8">
        <ClientsButton onclick={handleClickOpenCreate} />
          <Box className="w-1/3">
            <Form
              initialValues={initFilterValues}
              onSubmit={handleFilter}
              autoSubmit
            >
              <Box display="flex" justifyContent="space-around" alignItems={"center"}>
                <Box width="40%">
                  <FlagSelector name="country" />
                </Box>
                <Box width="40%">
                  <SearchBar name="type" />
                </Box>
              </Box>
            </Form>
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
      {clientsData ? (
        <MiTable
          rows={clientsData}
          headTable={ClientsHeaders}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        ></MiTable>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default Clients;
