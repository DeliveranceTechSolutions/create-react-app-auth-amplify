import React from 'react';
import './Toolbar.css';
import MainDrawer from '../Drawer/Drawer.tsx';
import { ZoomControl } from 'react-leaflet';

export default function Toolbar() {
    return (
        <div >
            <MainDrawer />
        </div>
    )
}
