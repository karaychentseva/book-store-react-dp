import Brightness4Icon from '@mui/icons-material/Brightness4';
import * as React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from '../../../hooks/useSelector';
import './ThemeToggle.scss'

type PropsType = {
}

const ThemeToggle: React.FC<PropsType> = () => {
    const { setTheme } = useActions();
    const theme = useSelector(state => state.theme.theme);

    const changeTheme = () => {
        if (theme === 'white') {
            setTheme('dark');
        } else {
            setTheme('white');
        }
    }
    return (
        <div className="theme-toggle" onClick={changeTheme}>
            <Brightness4Icon />
        </div>
    );
}

export default ThemeToggle;