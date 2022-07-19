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

import useTranslate from '@hooks/useTranslate';

import { flattenJSONProvider } from '@utils/flattenJSON';
import { makeUrl } from '@utils/makeUrl';

import DomainAddIcon from '@mui/icons-material/DomainAdd';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useSWR from 'swr';

const BusinessButton = ({ onclick }: any) => {
  const t = useTranslate();

  return (
    <Button endIcon={<DomainAddIcon />} onclick={onclick}>
      {t('Add Business')}
    </Button>
  );
};

let initValues = {
  client: {
    phone_number: '',
    fav_course: '',
    notification_frecuency: '',
    offered_services: '',
    whatsapp: '',
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
  },
  name: '',
  email: '',
  services: '',
  tax_id: '',
  website: '',
};

const Business: NextPage = () => {
  const [businessData, setBusinessData] = useState<any>();

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
    setDeletable(false);
    mutate();
  };

  const handleEditRow = async (id: number) => {
    setId(id);
    try {
      setInitial(await getBusiness(id));
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
    if (businessData) {
      setCurrentRow(businessData.filter((item: any) => item.id === id));
    }
    setDeletable(true);
  };

  useEffect(() => {
    if (deletable) {
      handleClickOpenDelete();
    }
  }, [deletable]);

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

  const { data: business, mutate } = useSWR(
    makeUrl(API_URLS.URL_BUSINESSES, query),
    getBusinesses
  );

  useEffect(() => {
    if (business) {
      const businessFlaten = business.results.map(function (element: any) {
        return flattenJSONProvider(element);
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
    } catch (e) {
      // setStatus(exception.data.detail);
      // setLoading(false);
    }
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
      <Box sx={{ maxWidth: 400 }}>
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
              <Box width="45%">
                <FlagSelector name="country" />
              </Box>
              <Box width="45%">
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
        >{`${t('Are you sure do you want to delete')} ${
          currentRow[0].name
        }?`}</Alert>
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
