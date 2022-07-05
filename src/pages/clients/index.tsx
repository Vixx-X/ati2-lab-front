import type { NextPage } from 'next';
import MainContainer from '@components/layout/MainContainer';
import MiTable from '../../components/table/MiTable';

const clientData = [
  {
    
  }
]

const Clients: NextPage = () => {
  return (
    <MainContainer>
        <MiTable rows={clientData}></MiTable>
    </MainContainer>
  );
};

export default Clients;
