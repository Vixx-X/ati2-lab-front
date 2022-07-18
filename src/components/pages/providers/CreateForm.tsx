import { useState } from 'react';

import ErrorMsg from '@components/forms/ErrorMsg';
import Form from '@components/forms/Form';
import SubmitButton from '@components/forms/SubmitButton';
import Button from '@components/layout/Button';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import ProviderForm from './ProviderForm';
import RepresentantForm from './RepresentantForm';
import useTranslate from '@hooks/useTranslate';

export const CreateForm = ({
  open,
  handleClose,
  handleSubmit,
  initValues,
  edit,
}: any) => {

  const [page, setPage] = useState<boolean>(true);

  const t = useTranslate();

  const styles = {
    '& .MuiPaper-root': {
      maxWidth: '900px',
      minWidth: '900px'
    },
  }

  const handlePage = () => {
    setPage(!page);
  }

  return (
    <Dialog open={open} onClose={handleClose} sx={styles}>
      <DialogTitle>{!edit ? t("create provider") : t("edit provider")}</DialogTitle>
      <Form initialValues={initValues} onSubmit={handleSubmit}>
        <DialogTitle className="py-0 text-base">{page ? t("provider data") : t("representant data")}</DialogTitle>
        <Divider className="mx-4 mt-2"></Divider>
        <DialogContent sx={{ height: '580px' }}>
          {page ?
            <ProviderForm initValues={initValues} />
            :
            <RepresentantForm initValues={initValues} />
          }
          <ErrorMsg name="detail" />
        </DialogContent>
        <DialogActions>
          <Box display="flex" className="gap-x-4" justifyContent="space-between">
            <Button onclick={handleClose}>{t("Cancel")}</Button>
            {/* <button type="submit">{!edit ? "Crear" : "Editar"}</button> */}
            <Button onclick={handlePage}>{page ? `${t("next")}` : `${t("back")}`}</Button>
            {!page && <SubmitButton>
              {!edit ? `${t("Create")}` : `${t("Edit")}`}
            </SubmitButton>}
          </Box>
        </DialogActions>
      </Form>
    </Dialog>
  )
}
