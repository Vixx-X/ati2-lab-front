import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { FlagSelector } from '@components/forms/FlagSelector';
import Button from '@components/layout/Button';
import MainContainer from '@components/layout/MainContainer';
import { CreateForm } from '@components/pages/employees/CreateForm';
import { deleteEmployee, getEmployee, getEmployees, postEmployee, putEmployee } from '@fetches/employees';
import { Box } from '@mui/system';
import { FormikValues } from 'formik';
import MiTable from '@components/table/MiTable';
import SearchBar from '@components/layout/SearchBar';
import useSWR from 'swr';
import Loader from '@components/Loader';
import { EmployeesHeaders } from '@components/data/Headers';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';
import Alert from '@components/layout/Alert';
import AddIcon from '@mui/icons-material/Add';
import { flattenJSON } from '@utils/flattenJSON';
import useTranslate from '@hooks/useTranslate';
const EmployeesButton = ({ onclick }: any) => {

  const t = useTranslate();

  return (
    <Button endIcon={<AddIcon />} onclick={onclick}>
      {t("add employee")}
    </Button>
  );
};

let initValues = {
    user: {
      charge: "propietaria",
      first_name: "maria",
      last_name: "gonzalez",
      email: "user@example.com"
    },
    addresses: [
      {
        line1: "casita1",
        line2: "la calle bonita",
        city: "caracas",
        state: "distrito capital",
        country: "ve"
      }
    ],
    socials: [
      {
        name: "instagram",
        value: "@micasita"
      }
    ],
    phone_number: "+584245554433",
    document_id: "V26956022",
    contract_modality: "Honorarios profesionales",
    business_email: "user@example.com",
    local_phone_number: "+582125554433",
    business: 32
};

const Employees: NextPage = () => {

  const t = useTranslate()

  const [employeesData, setEmployeeData] = useState()

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
    setId(id)
    setEditable(true);
    try {
      initValues = await getEmployee(id);;
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

  const { data: employees, mutate} = useSWR('employees', getEmployees);

  useEffect(() => {
    if (employees) {
      console.log('111', employees);
      const employeesFlaten = employees.results.map(function (element: any) {
        return flattenJSON(element);
      });
      console.log("holi", employeesFlaten)
      setEmployeeData(employeesFlaten)
    }
  }, [employees]);

  const handleSubmitCreate = async (values: FormikValues, { setStatus }: any) => {
    console.log("OnSubmit():", values);
    try {
      await postEmployee(values);
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
      console.log("edit", values, currentId)
      await putEmployee(values, currentId);
      setStatus({});
      handleCloseCreate();
    } catch (exception: any) {
      console.log("exceptions:", exception);
      setStatus(exception.data.detail);
    }
  }

  const handleSubmitDelete = async () => {
    try {
      await deleteEmployee(currentId);
      // setStatus({});
      handleCloseDelete();
    } catch (e) {
      // setStatus(exception.data.detail);
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
    getEmployee
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
        <Card name={ENTITYS[3].name}
          icon={ENTITYS[3].icon}
          color={ENTITYS[3].color}
          description={ENTITYS[3].description}
          link={ENTITYS[3].link}
          style={stylesCard} />
      </Box>
      <Box display="flex" justifyContent="space-between" className="my-8">
        <EmployeesButton onclick={handleClickOpenCreate} />
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
        handleSubmit={handleSubmitDelete}>{`${t("Are you sure do you want to delete")} ${currentId}?`}</Alert>}
      {employeesData ? <MiTable rows={employeesData}
        headTable={EmployeesHeaders}
        handleEditRow={handleEditRow}
        handleDeleteRow={handleDeleteRow}></MiTable>
        : <Loader />}
    </MainContainer>
  );
};

export default Employees;
