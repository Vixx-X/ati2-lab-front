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
    charge: 'propietaria',
    first_name: 'maria',
    last_name: 'gonzalez',
    email: 'user@example.com',
  },
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
  phone_number: '+584245554433',
  document_id: 'V26956022',
  contract_modality: 'Honorarios profesionales',
  business_email: 'user@example.com',
  local_phone_number: '+582125554433',
  business: 0,
};

const Employees: NextPage = () => {
  const t = useTranslate();

  const [employeesData, setEmployeeData] = useState();

  const [openCreate, setOpenCreate] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [editable, setEditable] = useState(false);

  const [initialValues, setInitial] = useState(initValues);

  const [currentId, setId] = useState<number>();

  const [currentRow, setCurrentRow] = useState();

  const [deletable,setDeletable] = useState(false);

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
      setEditable(true)
    } catch (exception: any) {
    }
  };

  useEffect(() => {
    if (editable) {
      handleClickOpenCreate();
    }
  }, [editable]);

  const handleDeleteRow = (id: number) => {
    console.log('He aqui el id', id);
    setId(id);
    if(deletable){
      console.log(employeesData);
      setCurrentRow(employeesData.filter((item:any)=>(item.id === id)));
    }
    setDeletable(true)
  };

  useEffect(()=>{
    if(deletable){
      handleClickOpenDelete();
    }
  },[deletable])

  // const [loading, setLoading] = useState(false);

  const handleSubmitCreate = async (
    values: FormikValues,
    { setStatus }: any
  ) => {
    console.log('OnSubmit():', values);
    try {
      await postEmployee(values);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log('exceptions:', exception);
      setStatus(exception.data.detail);
      // setLoading(false);
    }
  };

  const handleSubmitEdit = async (values: FormikValues, { setStatus }: any) => {
    try {
      console.log('edit', values, currentId);
      await putEmployee(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log('exceptions:', exception);
      setStatus(exception.data.detail);
    }
  };

  const handleSubmitDelete = async () => {
    try {
      await deleteEmployee(currentId);
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
    getEmployee,
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
        >{`${t('Are you sure do you want to delete')} ${currentRow[0].first_name}?`}</Alert>
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
