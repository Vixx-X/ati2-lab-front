import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { ClientsHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/clients/CreateForm';
import MiTable from '@components/table/MiTable';

import { API_URLS } from '@config';

import {
  deleteClient,
  getClient,
  getClients,
  postClient,
  putClient,
} from '@fetches/clients';

import useTranslate from '@hooks/useTranslate';

import { flattenJSONProvider } from '@utils/flattenJSON';
import { makeUrl } from '@utils/makeUrl';

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useSWR from 'swr';

const ClientsButton = ({ onclick }: any) => {
  const t = useTranslate();

  return (
    <Button endIcon={<GroupAddIcon />} onclick={onclick}>
      {t('Add Client')}
    </Button>
  );
};

let initValues = {
  user: {
    charge: '',
    first_name: '',
    last_name: '',
    email: '',
  },
  type: '',
  company: '',
  client: {
    phone_number: '',
    whatsapp: '',
    fav_course: '',
    notification_frecuency: '',
    offered_services: '',
    addresses: [
      {
        line1: '',
        line2: '',
        city: '',
        state: '',
        country: '',
      },
    ],
    socials: [
      {
        name: '',
        value: '',
      },
    ],
  },
};

const Clients: NextPage = () => {
  const t = useTranslate();

  const [clientsData, setClientData] = useState<any>();

  const [openCreate, setOpenCreate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [editable, setEditable] = useState(false);

  const [initialValues, setInitial] = useState(initValues);

  const [currentId, setId] = useState<number>();

  const [currentRow, setCurrentRow] = useState<any>();

  const [deletable, setDeletable] = useState(false);

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
    setDeletable(false);
    mutate();
  };

  const handleEditRow = async (id: number) => {
    setId(id);
    try {
      setInitial(await getClient(id));
      setEditable(true);
    } catch (exception: any) {}
  };

  useEffect(() => {
    if (editable) {
      handleClickOpenCreate();
    }
  }, [editable]);

  const handleDeleteRow = (id: number) => {
    setId(id);
    if (clientsData) {
      setCurrentRow(clientsData.filter((item: any) => item.id === id));
    }
    setDeletable(true);
  };

  useEffect(() => {
    if (deletable) {
      handleClickOpenDelete();
    }
  }, [deletable]);

  // const [loading, setLoading] = useState(false);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    try {
      await postClient(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      await putClient(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
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

  const { data: clients, mutate } = useSWR(
    makeUrl(API_URLS.URL_CLIENTS, query),
    getClients
  );

  useEffect(() => {
    if (clients) {
      const clientsFlaten = clients.results.map(function (element: any) {
        return flattenJSONProvider(element);
      });
      setClientData(clientsFlaten);
    }
  }, [clients]);

  return (
    <MainContainer>
      <Box sx={{ maxWidth: 400 }}>
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
      <Box display="flex" justifyContent="space-between" className="my-8">
        <ClientsButton onclick={handleClickOpenCreate} />
        <Box className="w-2/4">
          <Form
            initialValues={initFilterValues}
            onSubmit={handleFilter}
            autoSubmit
          >
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems={'center'}
            >
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
      {initialValues && currentRow && (
        <Alert
          open={openDelete}
          handleClose={handleCloseDelete}
          handleSubmit={handleSubmitDelete}
        >{`${t('Are you sure do you want to delete')} ${
          currentRow[0].first_name
        }?`}</Alert>
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
