import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import * as React from 'react';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from '../../../hooks/useSelector';
import './LangToggle.scss'

type PropsType = {
}

const LangToggle: React.FC<PropsType> = () => {

    const lang = useSelector(state => state.language.language);
    const { setLanguage } = useActions();

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        value: string | null,
      ) => {
          if(value){
            setLanguage(value);
          }
      };

    return (
        <ToggleButtonGroup
            size="small"
            color="primary"
            value={lang}
            exclusive
            className="toggle-group"
            onChange={handleChange}
        >
            <ToggleButton className="toggle-group-item" value="en">En</ToggleButton>
            <ToggleButton className="toggle-group-item" value="ru">Ru</ToggleButton>
        </ToggleButtonGroup>
    );
}

export default LangToggle;