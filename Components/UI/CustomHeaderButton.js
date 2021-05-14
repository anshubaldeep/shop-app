import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';
import { Platform } from 'react-native';

const CustomHeaderButton=(props)=>{
        return(
            <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={35}
            color={Platform.OS==='android'?'white':colors.primary}
            >

            </HeaderButton>
        );
};


export default CustomHeaderButton;