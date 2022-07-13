import type { NextPage } from 'next';
import MainContainer from '@components/layout/MainContainer';
import { Box } from '@mui/system';
import { ENTITYS } from '@components/data/Entitys';
import Card from '@components/Card';

const Providers: NextPage = () => {

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
        <Card name={ENTITYS[4].name}
          icon={ENTITYS[4].icon}
          color={ENTITYS[4].color}
          description={ENTITYS[4].description}
          link={ENTITYS[4].link}
          style={stylesCard} />
      </Box>
      {/* <MiTable rows={clientData}></MiTable> */}
    </MainContainer>
  );
};

export default Providers;
