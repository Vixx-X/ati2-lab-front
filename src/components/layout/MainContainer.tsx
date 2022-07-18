import * as React from 'react';

import Link from 'next/link';

import { ENTITYS } from '@components/data/Entitys';

import useTranslate from '@hooks/useTranslate';

import AccountCircle from '@mui/icons-material/AccountCircle';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LanguageSelect from './LanguageSelect';

const drawerWidth = 240;

export default function MainContainer({ children }: any) {
  const t = useTranslate();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ textTransform: 'uppercase' }}
          >
            {t('consultant x')}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <LanguageSelect />
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          bgColor: '#003366',
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {ENTITYS.map(({ name, icon, link }) => (
            <Link href={link} passHref key={name}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    sx={{ textTransform: 'capitalize' }}
                    primary={t(name)}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Box
          display="flex"
          alignItems="center"
          sx={{ height: 'calc(100vh - 64px)', bgColor: '#185583' }}
        >
          <Container
            className="mt-40 h-full"
            maxWidth="xl"
            sx={{ width: '100%' }}
          >
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
