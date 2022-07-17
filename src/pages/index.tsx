import type { NextPage } from 'next';

import Card from '@components/Card';
import { ENTITYS } from '@components/data/Entitys';
import MainContainer from '@components/layout/MainContainer';

import useTranslate from '@hooks/useTranslate';

import Grid from '@mui/material/Grid';

const Home: NextPage = () => {
  const t = useTranslate();
  return (
    <MainContainer>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {ENTITYS.slice(1).map(
          ({ name, icon, color, description, link }, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                name={t(name)}
                icon={icon}
                color={color}
                description={t(description)}
                link={link}
              />
            </Grid>
          )
        )}
      </Grid>
    </MainContainer>
  );
};

export default Home;
