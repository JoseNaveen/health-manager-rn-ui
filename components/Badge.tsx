import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { MaterialSymbols } from './MaterialSymbols';

interface BadgeProps extends ViewProps {
    label: string;
    iconName?: string;
    variant?: 'emerald' | 'orange' | 'blue' | 'slate';
    size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
    label,
    iconName,
    variant = 'emerald',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        emerald: "bg-emerald-100 dark:bg-emerald-900/30",
        orange: "bg-orange-100 dark:bg-orange-900/30",
        blue: "bg-blue-100 dark:bg-blue-900/30",
        slate: "bg-slate-100 dark:bg-slate-800",
    };

    const textVariants = {
        emerald: "text-emerald-600 dark:text-emerald-400",
        orange: "text-orange-600 dark:text-orange-400",
        blue: "text-blue-600 dark:text-blue-400",
        slate: "text-slate-600 dark:text-slate-400",
    };

    const containerSizes = {
        sm: "px-2 py-1 rounded-lg gap-1",
        md: "p-4 rounded-xl gap-2", // Used for the large stats cards icons
    };

    const textSizes = {
        sm: "text-xs font-bold",
        md: "text-xl font-bold",
    };

    return (
        <View
            className={`flex-row items-center justify-center ${variants[variant]} ${containerSizes[size]} ${className}`}
            {...props}
        >
            {iconName && (
                <MaterialSymbols
                    name={iconName}
                    size={size === 'sm' ? 14 : 24}
                    className={textVariants[variant]}
                />
            )}
            {label && <Text className={`${textVariants[variant]} ${textSizes[size]}`}>{label}</Text>}
        </View>
    );
};
