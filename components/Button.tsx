import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { MaterialSymbols } from './MaterialSymbols';

interface ButtonProps extends TouchableOpacityProps {
    label: string;
    iconName?: string;
    variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = ({ label, iconName, variant = 'primary', className, ...props }) => {
    const baseStyle = "flex-row items-center justify-center rounded-xl px-5 h-14 gap-3 active:scale-[0.98] transition-transform";

    const variants = {
        primary: "bg-primary shadow-lg shadow-primary/20",
        secondary: "bg-slate-100 dark:bg-slate-800",
        ghost: "bg-transparent"
    };

    const textVariants = {
        primary: "text-white text-base font-bold",
        secondary: "text-slate-600 dark:text-white text-base font-semibold",
        ghost: "text-primary text-sm font-semibold"
    };

    return (
        <TouchableOpacity
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {iconName && <MaterialSymbols name={iconName} size={24} color={variant === 'primary' ? 'white' : 'currentColor'} />}
            <Text className={textVariants[variant]}>{label}</Text>
        </TouchableOpacity>
    );
};
