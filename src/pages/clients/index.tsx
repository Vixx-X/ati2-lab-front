import type { NextPage } from 'next';
import MainContainer from '@components/layout/MainContainer';
import { Box } from '@mui/system';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';

const clientData = [
  {

  }
]

const Clients: NextPage = () => {

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
        <Card name={ENTITYS[2].name}
          icon={ENTITYS[2].icon}
          color={ENTITYS[2].color}
          description={ENTITYS[2].description}
          link={ENTITYS[2].link}
          style={stylesCard} />
      </Box>
      {/* <MiTable rows={clientData}></MiTable> */}
    </MainContainer>
  );
};

export default Clients;
