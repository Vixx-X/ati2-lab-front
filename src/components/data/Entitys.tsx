import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import { SERVER_URLS } from '@config';

const { URL_BUSINESS, URL_CLIENTS, URL_EMPLOYEES,
    URL_PROVIDERS, URL_LANDING } = SERVER_URLS;

const fullWidth = {width: '100%', height: '100%'}

export const ENTITYS = [
    {
        name: "home",
        icon: <HomeIcon />,
        link: URL_LANDING,
        color: "#FFFFFF",
        description: "Dashboard con opciones de navegacion"
    },
    {
        name: "empresas",
        icon: <BusinessIcon />,
        link: URL_BUSINESS,
        color: "#F29A86",
        description: "Organizaciones de personas y recursos que buscan la consecución de un beneficio económico con el desarrollo de una actividad en particular."
    },
    {
        name: "clientes particulares",
        icon: <GroupIcon />,
        link: URL_CLIENTS,
        color: "#58C3BB",
        description: "Personas que utilizan los servicios de un profesional o de una empresa, especialmente la que lo hace regularmente."
    },
    {
        name: "empleados",
        icon: <BadgeIcon />,
        link: URL_EMPLOYEES,
        color: "#BD87BB",
        description: "Brindan sus servicios a cambio de un salario por parte de un empleador. Así, los detalles de este vínculo son definidos en un contrato (verbal o escrito)."
    },
    {
        name: "proveedores",
        icon: <HandymanIcon />,
        link: URL_PROVIDERS,
        color: "#D6234A",
        description: "Proveen o suministran profesionalmente de un determinado bien o servicio a otros individuos o sociedades."
    }
] 