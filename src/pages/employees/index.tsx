import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import Card from '@components/Card';
import Loader from '@components/Loader';
import { ENTITYS } from '@components/data/Entitys';
import { EmployeesHeaders } from '@components/data/Headers';
import { FlagSelector } from '@components/forms/FlagSelector';
import Form from '@components/forms/Form';
import Alert from '@components/layout/Alert';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import SearchBar from '@components/layout/SearchBar';
import { CreateForm } from '@components/pages/employees/CreateForm';
import MiTable from '@components/table/MiTable';

import { API_URLS } from '@config';

import {
  deleteEmployee,
  getEmployee,
  getEmployees,
  postEmployee,
  putEmployee,
} from '@fetches/employees';

import useTranslate from '@hooks/useTranslate';

import { flattenJSONProvider } from '@utils/flattenJSON';
import { makeUrl } from '@utils/makeUrl';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import useSWR from 'swr';

const EmployeesButton = ({ onclick }: any) => {
  const t = useTranslate();

  return (
    <Button endIcon={<AddIcon />} onclick={onclick}>
      {t('add employee')}
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
  phone_number: '',
  document_id: '',
  contract_modality: '',
  business_email: '',
  local_phone_number: '',
  business: 0,
};

const Employees: NextPage = () => {
  const t = useTranslate();

  const [employeesData, setEmployeeData] = useState<any>();

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
      setInitial(await getEmployee(id));
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
      setCurrentRow(employeesData.filter((item: any) => item.id === id));
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
      await postEmployee(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      await putEmployee(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteEmployee(currentId);
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
    contract_modality: query?.contract_modality ?? '',
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

  const { data: employees, mutate } = useSWR(
    makeUrl(API_URLS.URL_EMPLOYEES, query),
    getEmployees
  );

  useEffect(() => {
    if (employees) {
      const employeesFlaten = employees.results.map(function (element: any) {
        return flattenJSONProvider(element);
      });
      setEmployeeData(employeesFlaten);
    }
  }, [employees]);

  return (
    <MainContainer>
      <Box sx={{ maxWidth: 400 }}>
        <Card
          name={ENTITYS[3].name}
          icon={ENTITYS[3].icon}
          color={ENTITYS[3].color}
          description={ENTITYS[3].description}
          link={ENTITYS[3].link}
          style={stylesCard}
        />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <EmployeesButton onclick={handleClickOpenCreate} />
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
                <SearchBar name="contract_modality" />
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
      {employeesData ? (
        <MiTable
          rows={employeesData}
          headTable={EmployeesHeaders}
          handleEditRow={handleEditRow}
          handleDeleteRow={handleDeleteRow}
        ></MiTable>
      ) : (
        <Loader />
      )}
    </MainContainer>
  );
};

export default Employees;
