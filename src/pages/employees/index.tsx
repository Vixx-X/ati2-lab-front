import type { NextPage } from 'next';
import MainContainer from '@components/layout/MainContainer';
import { Box } from '@mui/system';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';

const clientData = [
  {

  }
]

const Employees: NextPage = () => {

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
      {/* <MiTable rows={clientData}></MiTable> */}
    </MainContainer>
  );
};

export default Employees;
