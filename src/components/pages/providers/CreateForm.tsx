import Button from '@components/layout/Button';
import Form from '@components/forms/Form';
import ErrorMsg from '@components/forms/ErrorMsg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SubmitButton from '@components/forms/SubmitButton'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import ProviderForm from './ProviderForm';
import RepresentantForm from './RepresentantForm';


export const CreateForm = ({ open, handleClose, handleSubmit, initValues, edit }: any) => {
    const [page, setPage] = useState<boolean>(true)

    const styles = {
        '& .MuiPaper-root': {
            maxWidth: '900px',
            minWidth: '900px'
        },
    }

    const handlePage = () => {
        console.log("paginita", page)
        setPage(!page);
    }

    return (
        <Dialog open={open} onClose={handleClose} sx={styles}>
            <DialogTitle>{!edit ? "Crear Proveedor" : "Editar Proveedor"}</DialogTitle>
            <Form initialValues={initValues} onSubmit={handleSubmit}>
                <DialogTitle className="py-0 text-base">{page ? "Datos proveedor" : "Datos representante"}</DialogTitle>
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
                        <Button onclick={handleClose}>Cancelar</Button>
                        {/* <button type="submit">{!edit ? "Crear" : "Editar"}</button> */}
                        <Button onclick={handlePage}>{page ? "Siguiente" : "Anterior"}</Button>
                        {!page && <SubmitButton>
                            {!edit ? "CREAR" : "EDITAR"}
                        </SubmitButton>}
                    </Box>
                </DialogActions>
            </Form>
        </Dialog>
    )
}