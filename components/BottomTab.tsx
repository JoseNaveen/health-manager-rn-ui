import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialSymbols } from './MaterialSymbols';

interface TabItem {
    name: string;
    label: string;
    icon: string;
    path: string;
}

const TABS: TabItem[] = [
    { name: 'home', label: 'Home', icon: 'grid_view', path: '/' },
    { name: 'calendar', label: 'Calendar', icon: 'calendar_month', path: '/calendar' },
    { name: 'trends', label: 'Trends', icon: 'insights', path: '/trends' },
    { name: 'profile', label: 'Profile', icon: 'person', path: '/profile' },
];

export const BottomTab: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const insets = useSafeAreaInsets();

    return (
        <View
            className="absolute bottom-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex-row justify-around pt-2 z-20"
            style={{ paddingBottom: Math.max(insets.bottom, 24) }}
        >
            {TABS.map((tab) => {
                const isActive = pathname === tab.path || (tab.path === '/' && pathname === '/index');
                return (
                    <TouchableOpacity
                        key={tab.name}
                        className="items-center gap-1 min-w-[60px]"
                        onPress={() => router.push(tab.path as any)}
                    >
                        <MaterialSymbols
                            name={tab.icon}
                            size={24}
                            className={isActive ? "text-primary" : "text-white"}
                        />
                        <Text className={`text-[10px] font-bold ${isActive ? "text-primary" : "text-white"}`}>
                            {tab.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
