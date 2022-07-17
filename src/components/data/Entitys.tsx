import { SERVER_URLS } from '@config';

import BadgeIcon from '@mui/icons-material/Badge';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import HandymanIcon from '@mui/icons-material/Handyman';
import HomeIcon from '@mui/icons-material/Home';

const { URL_BUSINESS, URL_CLIENTS, URL_EMPLOYEES, URL_PROVIDERS, URL_LANDING } =
  SERVER_URLS;

const fullWidth = { width: '100%', height: '100%' };

export const ENTITYS = [
  {
    name: 'home',
    icon: <HomeIcon />,
    link: URL_LANDING,
    color: '#FFFFFF',
    description: 'Dashboard with navigation options',
  },
  {
    name: 'businesses',
    icon: <BusinessIcon />,
    link: URL_BUSINESS,
    color: '#F29A86',
    description:
      'Organizations of people and resources that seek to achieve an economic benefit with the development of a particular activity.',
  },
  {
    name: 'particular clients',
    icon: <GroupIcon />,
    link: URL_CLIENTS,
    color: '#58C3BB',
    description:
      'People who use the services of a professional or a company, especially those who do so regularly.',
  },
  {
    name: 'employees',
    icon: <BadgeIcon />,
    link: URL_EMPLOYEES,
    color: '#BD87BB',
    description:
      'They provide their services in exchange for a salary from an employer. Thus, the details of this link are defined in a contract (verbal or written).',
  },
  {
    name: 'providers',
    icon: <HandymanIcon />,
    link: URL_PROVIDERS,
    color: '#D6234A',
    description:
      'They professionally provide or supply a certain good or service to other individuals or companies.',
  },
];
