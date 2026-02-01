import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Badge } from '../components/Badge';
import { BottomTab } from '../components/BottomTab';
import { CalendarWidget } from '../components/CalendarWidget';
import { Card } from '../components/Card';
import { MaterialSymbols } from '../components/MaterialSymbols';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function CalendarScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-background-light dark:bg-background-dark">
            {/* Top Navigation Bar */}
            <View
                className="flex-row items-center justify-between px-4 pb-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10"
                style={{ paddingTop: insets.top + 8 }}
            >
                <TouchableOpacity
                    className="size-10 items-center justify-center rounded-full active:bg-slate-100 dark:active:bg-slate-800"
                    onPress={() => router.back()}
                >
                    <MaterialSymbols name="chevron_left" size={28} className="text-slate-900 dark:text-white" />
                </TouchableOpacity>

                <Text className="text-lg font-bold text-slate-900 dark:text-white">Incident Calendar</Text>

                <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <MaterialSymbols name="add" size={24} className="text-primary" />
                </TouchableOpacity>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Calendar Picker Section */}
                <View className="p-4">
                    <CalendarWidget />
                </View>

                {/* Section Header */}
                <View className="flex-row items-center justify-between px-6 pt-2 pb-2">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white">Tuesday, Oct 24</Text>
                    <Text className="text-xs font-semibold uppercase tracking-wider text-slate-400">2 Incidents</Text>
                </View>

                {/* Incident List */}
                <View className="px-4 gap-3">
                    {/* Incident Card 1 */}
                    <Card className="flex-row items-center gap-4">
                        <View className="size-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                            <MaterialSymbols name="neurology" size={24} className="text-primary" />
                        </View>
                        <View className="flex-1 justify-center">
                            <Text className="text-base font-bold text-slate-900 dark:text-white">Migraine</Text>
                            <View className="flex-row items-center gap-1 mt-0.5">
                                <MaterialSymbols name="schedule" size={14} className="text-slate-400" />
                                <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">2:00 PM</Text>
                            </View>
                        </View>
                        <View className="items-end">
                            <Badge label="Intensity 7" variant="slate" size="sm" className="bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400" />
                            <Text className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Severe</Text>
                        </View>
                    </Card>

                    {/* Incident Card 2 */}
                    <Card className="flex-row items-center gap-4">
                        <View className="size-12 items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/20">
                            <MaterialSymbols name="psychology" size={24} className="text-primary" />
                        </View>
                        <View className="flex-1 justify-center">
                            <Text className="text-base font-bold text-slate-900 dark:text-white">Tension Headache</Text>
                            <View className="flex-row items-center gap-1 mt-0.5">
                                <MaterialSymbols name="schedule" size={14} className="text-slate-400" />
                                <Text className="text-xs font-medium text-slate-500 dark:text-slate-400">9:30 AM</Text>
                            </View>
                        </View>
                        <View className="items-end">
                            <Badge label="Intensity 3" variant="slate" size="sm" className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400" />
                            <Text className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Mild</Text>
                        </View>
                    </Card>
                </View>

                {/* Tomorrow Preview Placeholder */}
                <View className="mt-8 px-6">
                    <Text className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Upcoming Log</Text>
                    <View className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-6 items-center justify-center">
                        <MaterialSymbols name="event_available" size={32} className="text-slate-300 dark:text-slate-700 mb-2" />
                        <Text className="text-sm font-medium text-slate-400">No incidents planned for tomorrow.</Text>
                        <TouchableOpacity className="mt-4">
                            <Text className="text-xs font-bold text-primary">Log Preventive Entry</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <BottomTab />
        </View>
    );
};
