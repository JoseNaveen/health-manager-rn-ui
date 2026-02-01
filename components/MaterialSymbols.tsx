import { MaterialIcons } from '@expo/vector-icons';
import { cssInterop, useColorScheme } from 'nativewind';
import React from 'react';

// Allow MaterialIcons to accept className and map color style to color prop
cssInterop(MaterialIcons, {
    className: {
        target: "style",
        nativeStyleToProp: {
            color: true,
        },
    },
});

// Mapping "Material Symbols" names to closest "MaterialIcons"
const ICON_MAPPING: Record<string, keyof typeof MaterialIcons.glyphMap> = {
    notifications: 'notifications',
    trending_down: 'trending-down',
    add_circle: 'add-circle',
    bolt: 'bolt',
    waves: 'waves',
    grid_view: 'grid-view',
    calendar_month: 'calendar-today',
    insights: 'insights',
    settings: 'settings',
};

interface MaterialSymbolsProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
}

export const MaterialSymbols: React.FC<MaterialSymbolsProps> = ({ name, size = 24, color, className }) => {
    const { colorScheme } = useColorScheme();
    const iconName = ICON_MAPPING[name] || 'help'; // Fallback

    // Default colors
    // If color is not provided, we can default based on theme context if needed, 
    // but usually parent passes color or className handles it

    return (
        <MaterialIcons
            name={iconName}
            size={size}
            color={color}
            className={className}
        />
    );
};
