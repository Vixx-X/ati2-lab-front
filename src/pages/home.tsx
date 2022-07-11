import type { NextPage } from 'next';
import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';
import MainContainer from '@components/layout/MainContainer';
import Grid from '@mui/material/Grid';
import Card from '@components/card';
import BusinessImage from '@public/assets/empresa.png';
import { ENTITYS } from '@components/data/Entitys';


const Home: NextPage = () => {
  const logout = authStore((state: any) => state.logout);
  const user = userStore((state: any) => state.user);
  return (
    <MainContainer>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {ENTITYS.slice(1).map(({name, icon, color, description, link}, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card name={name} icon={icon} color={color} description={description} link={link}/>
            </Grid>
          ))}
        </Grid>
    </MainContainer>
  );
};

export default Home;
