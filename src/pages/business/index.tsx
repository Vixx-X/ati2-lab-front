import type { NextPage } from 'next';
import { FlagSelector } from '@components/forms/FlagSelector';
import MainContainer from '@components/layout/MainContainer';

import { Box } from '@mui/system';

import SearchBar from '../../components/layout/SearchBar';
import MiTable from '../../components/table/MiTable';

const businessData = [
  {
    id: 1,
    nombre: 'Edu',
    telefono: '123-123123',
    servicios: 'Hombre de compañia',
    curso: 'baile exotico',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.eduguapo.com',
  },
  {
    id: 2,
    nombre: 'Gabriela Valentina',
    telefono: '123-123123',
    servicios: 'Estudiante',
    curso: 'estudiante',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.gabisegundonombrevalentina.com',
  },
  {
    id: 3,
    nombre: 'Edu',
    telefono: '123-123123',
    servicios: 'Hombre de compañia',
    curso: 'baile exotico',
    frencuencia: 'mucha',
    ciudad: 'caracas',
    pais: 'venezuela',
    numero_tributario: '123',
    direccion: 'por ahi al lado de la mata de mango',
    web: 'www.eduguapo.com',
  },
];

const Business: NextPage = () => {

  const handleSelectFlag = (e:any) =>{
    console.log("Se selecciono la bandera de:", e);
  }

  return (
    <MainContainer>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <SearchBar></SearchBar>
      </Box>
      <FlagSelector
        onSelect={handleSelectFlag}
      ></FlagSelector>
      <MiTable rows={businessData}></MiTable>
    </MainContainer>
  );
};

export default Business;
