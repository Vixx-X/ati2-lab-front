import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { ProvidersHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/providers/CreateForm';
import MiTable from '@components/table/MiTable';

import { API_URLS } from '@config';

import {
  deleteProvider,
  getProvider,
  getProviders,
  postProvider,
  putProvider,
} from '@fetches/providers';

import useTranslate from '@hooks/useTranslate';

import { flattenJSONProvider } from '@utils/flattenJSON';
import { makeUrl } from '@utils/makeUrl';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useSWR from 'swr';

const ProvidersButton = ({ onclick }: any) => {
  const t = useTranslate();

  return (
    <Button endIcon={<AddIcon />} onclick={onclick}>
      {t('add provider')}
    </Button>
  );
};

let initValues = {
  representant: {
    addresses: [
      {
        line1: '',
        line2: '',
        country: '',
        city: '',
        state: '',
      },
    ],
    socials: [
      {
        name: '',
        value: '',
      },
    ],
    user: {
      charge: '',
      email: '', //
      first_name: '', //
      last_name: '', //
    },
    phone_number: '', //
    local_phone: '', //
    fav_course: '', // No debe estar
    notification_frecuency: '', // No debe estar
    business_email: '', //
  },
  addresses: [
    {
      line1: '',
      line2: '',
      country: '',
      city: '',
      state: '',
    },
  ],
  socials: [
    {
      name: '',
      value: '',
    },
  ],
  tax_id: '', // Se deben enviar
  website: '', //
  phone_number: '', //
  fav_course: '', // NO
  notification_frecuency: '', // NO
  name: '', //
  email: '', //
  businesses: [], // NO
  services: ""
};
// as ProviderForm

const Provider: NextPage = () => {
  const [providerData, setProviderData] = useState<any>();

  const [openCreate, setOpenCreate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [editable, setEditable] = useState(false);

  const [initialValues, setInitial] = useState(initValues);

  const [currentId, setId] = useState<number>();

  const [currentRow, setCurrentRow] = useState<any>();

  const [deletable, setDeletable] = useState(false);

  const t = useTranslate();

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
    try {
      setInitial(await getProvider(id));
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
    if (deletable) {
      setCurrentRow(providerData.filter((item: any) => item.id === id));
    }
    setDeletable(true);
  };

  useEffect(() => {
    if (deletable) {
      handleClickOpenDelete();
    }
  }, [deletable]);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    try {
      await postProvider(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      await putProvider(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteProvider(currentId);
      handleCloseDelete();
    } catch (e) {}
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
    name: query?.name ?? '',
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

  const { data: provider, mutate } = useSWR(
    makeUrl(API_URLS.URL_PROVIDERS, query),
    getProviders
  );

  useEffect(() => {
    if (provider) {
      const providerFlaten = provider.results.map(function (element: any) {
        return flattenJSONProvider(element);
      });
      setProviderData(providerFlaten);
    }
  }, [provider]);

  return (
    <MainContainer>
      <Box sx={{ maxWidth: 400 }}>
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
                <SearchBar name="name" />
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
        >{`${t('Are you sure do you want to delete')} ${currentRow[0].name}`}</Alert>
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
