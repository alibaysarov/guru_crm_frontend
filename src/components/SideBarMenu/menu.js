import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
export const menuList = [
    {
        name:'Главная',
        icon:HomeIcon,
        link:'/',
    },
    {
        name:'Пользователи',
        icon:PersonIcon,
        link:'/users'
    },
    {
        name:'Группы',
        icon:GroupIcon,
        link:'/groups'
    },
    {
        name:'Сообщения',
        icon:EmailIcon,
        link:'/messages'
    },
    {
        name:'Тэги',
        icon:Grid3x3Icon,
        link:'/tags'
    },
]