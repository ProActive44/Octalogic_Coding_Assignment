import React from 'react';
import { Button } from '../components/ui/button'

const Menu = ({name}) => {
    return (
        <div>
            {name}
            <Button className='px-8'>Click me</Button>
        </div>
    );
};

export default Menu;