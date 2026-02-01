import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialSymbols } from './MaterialSymbols';

export const CalendarWidget: React.FC = () => {
    const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    // Hardcoded October 2023 grid for demo matching the screenshot
    // Starts on Sunday (1st). 31 days.
    // We'll generate a simple array.
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const offset = 0; // Oct 1 2023 was Sunday

    return (
        <View className="bg-white dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-800/50">
            {/* Month Header */}
            <View className="flex-row items-center justify-between mb-4 px-2">
                <TouchableOpacity className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-transparent dark:hover:bg-slate-800 rounded-full">
                    <MaterialSymbols name="chevron_left" size={20} className="text-slate-600 dark:text-white" />
                </TouchableOpacity>
                <Text className="text-base font-bold text-slate-900 dark:text-white">October 2023</Text>
                <TouchableOpacity className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-transparent dark:hover:bg-slate-800 rounded-full">
                    <MaterialSymbols name="chevron_right" size={20} className="text-slate-600 dark:text-white" />
                </TouchableOpacity>
            </View>

            {/* Week Header */}
            <View className="flex-row justify-between mb-2">
                {daysOfWeek.map((d, i) => (
                    <Text key={i} className="text-slate-400 dark:text-slate-500 text-[12px] font-bold text-center w-[13%]">
                        {d}
                    </Text>
                ))}
            </View>

            {/* Grid */}
            <View className="flex-row flex-wrap justify-between gap-y-1">
                {/* Days */}
                {days.map((day) => {
                    // Demo logic: Active on 24th. Dots on 1, 3, 7, 11, 16, 21, 24.
                    const isActive = day === 24;
                    const hasDot = [1, 3, 7, 11, 16, 21, 24].includes(day);

                    return (
                        <TouchableOpacity key={day} className="h-10 w-[13%] flex-col items-center justify-center relative">
                            {isActive ? (
                                <View className="absolute inset-0 m-auto size-9 bg-primary rounded-full items-center justify-center">
                                    <Text className="text-sm font-bold text-white">{day}</Text>
                                </View>
                            ) : (
                                <Text className="text-sm font-medium text-slate-900 dark:text-white">{day}</Text>
                            )}

                            {hasDot && (
                                <View className={`absolute bottom-1.5 size-1 rounded-full ${isActive ? 'bg-white' : 'bg-primary'}`} />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};
