import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { BusinessHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/business/CreateForm';
import MiTable from '@components/table/MiTable';

import { API_URLS } from '@config';

import {
  deleteBusiness,
  getBusiness,
  getBusinesses,
  postBusiness,
  putBusiness,
} from '@fetches/business';

import { flattenJSON } from '@utils/flattenJSON';
import { makeUrl } from '@utils/makeUrl';

import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useSWR from 'swr';

const BusinessButton = ({ onclick }: any) => {
  return (
    <Button endIcon={<DomainAddIcon />} onclick={onclick}>
      Añadir Empresa
    </Button>
  );
};

let initValues = {
  client: {
    phone_number: '+584241315948',
    fav_course: 'PHP',
    notification_frecuency: '1 vez al mes',
    offered_services: 'lulu',
    whatsapp: '+584241315946',
    addresses: [
      {
        line1: 'lin1',
        line2: 'lin2',
        country: '',
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
  },
  name: 'Pepa',
  email: 'gustariz@mahisoft.com',
  services: 'lili',
  tax_id: '2222222',
  website: 'https://mui.com/material-ui/api/button/',
};

const Business: NextPage = () => {
  const [businessData, setBusinessData] = useState();

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
      initValues = await getBusiness(id);
    } catch (exception: any) {
      // setLoading(false);
    }
    // get de la variable y setear initial values
    handleClickOpenCreate();
  };

  const handleDeleteRow = (id: number) => {
    setId(id);
    handleClickOpenDelete();
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

  const { data: business, mutate } = useSWR(
    makeUrl(API_URLS.URL_BUSINESSES, query),
    getBusinesses
  );

  useEffect(() => {
    if (business) {
      const businessFlaten = business.results.map(function (element: any) {
        return flattenJSON(element);
      });
      setBusinessData(businessFlaten);
    }
  }, [business]);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    try {
      await postBusiness(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      await putBusiness(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteBusiness(currentId);
      handleCloseDelete();
    } catch (e) {}
  };

  const styles = {
    '& form': {
      height: '100%',
    },
    getBusiness,
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
          name={ENTITYS[1].name}
          icon={ENTITYS[1].icon}
          color={ENTITYS[1].color}
          description={ENTITYS[1].description}
          link={ENTITYS[1].link}
          style={stylesCard}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <BusinessButton onclick={handleClickOpenCreate} />
        <Box
          className="w-1/2 gap-x-4"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Form
            initialValues={initFilterValues}
            onSubmit={handleFilter}
            autoSubmit
          >
            <SearchBar name="type" />
            <Box className="w-1/2">
              <FlagSelector name="country" />
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
        >{`¿Está seguro que desea eliminar a ${currentId}?`}</Alert>
      )}
      {businessData ? (
        <MiTable
          rows={businessData}
          headTable={BusinessHeaders}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        ></MiTable>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default Business;
