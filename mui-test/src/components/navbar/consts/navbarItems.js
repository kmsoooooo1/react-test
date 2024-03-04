import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavbarItems = [
    {
        id :0,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id :1,
        icon: <StorageIcon />,
        label: 'Database',
        route: 'database',
    },
    {
        id :2,
        icon: <InsertPhotoIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id :3,
        icon: <LanguageIcon />,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id :4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id :5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine Learning',
        route: 'machine-learning',
    },
];