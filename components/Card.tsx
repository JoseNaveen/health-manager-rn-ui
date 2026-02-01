import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
    return (
        <View
            className={`bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm ${className}`}
            {...props}
        >
            {children}
        </View>
    );
};
