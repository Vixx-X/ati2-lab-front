import type { NextPage } from 'next';
import authStore from '@stores/AuthStore';
import userStore from '@stores/UserStore';
import MainContainer from '@components/layout/MainContainer';
import Grid from '@mui/material/Grid';
import Card from '@components/card';
import BusinessImage from '@public/assets/empresa.png';


const ENTITYS = [
  {name:"empresas", img:BusinessImage, color:"white", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. suscipit facere quos iure voluptates sunt"},
  {name:"clientes particulares", img:BusinessImage, color:"white", description:"Obcaecati corrupti provident mollitia perferendis suscipit facere quos iure voluptates sunt?"},
  {name:"empleados", img:BusinessImage, color:"white", description:"Dignissimos commodi voluptates minima ex facilis ipsam repellat! suscipit facere quos iure voluptates sunt"},
  {name:"proveedores", img:BusinessImage, color:"white", description:"Placeat, reiciendis qui?Placeat, reiciendis qui?Placeat, reiciendis qui? Placeat, reiciendis qui?"}
]

const Home: NextPage = () => {
  const logout = authStore((state: any) => state.logout);
  const user = userStore((state: any) => state.user);
  return (
    <MainContainer>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {ENTITYS .map(({name, img, color, description}, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card name={name} img={img.src} color={color} description={description}/>
            </Grid>
          ))}
        </Grid>
    </MainContainer>
  );
};

export default Home;
