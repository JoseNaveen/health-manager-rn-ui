import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';
import { Badge } from '../components/Badge';
import { BottomTab } from '../components/BottomTab';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { MaterialSymbols } from '../components/MaterialSymbols';

export default function Dashboard() {
    const router = useRouter();
    return (
        <View className="flex-1 bg-background-light dark:bg-background-dark">
            <Header />

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 100 }}>
                {/* Quick Summary Stats */}
                <View className="p-4 pt-2">
                    <Card className="flex-row items-center justify-between">
                        <View className="gap-1">
                            <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">Incidents this week</Text>
                            <View className="flex-row items-end gap-2">
                                <Text className="text-slate-900 dark:text-white text-3xl font-extrabold leading-tight">3</Text>
                                <View className="flex-row items-center mb-1">
                                    <MaterialSymbols name="trending_down" size={16} className="text-emerald-500" />
                                    <Text className="text-emerald-500 text-sm font-bold">25%</Text>
                                </View>
                            </View>
                            <Text className="text-slate-400 text-xs">Improved since last week</Text>
                        </View>
                    </Card>
                </View>

                {/* Primary Action Button */}
                <View className="px-4 py-2">
                    <Button label="Log New Incident" iconName="add_circle" onPress={() => router.push('/log-incident')} />
                </View>

                {/* Recent Trends Section */}
                <View className="mt-4">
                    <View className="flex-row items-center justify-between px-4 pb-2">
                        <Text className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">Recent Trends</Text>
                        <TouchableOpacity>
                            <Text className="text-primary text-sm font-semibold">View History</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="px-4 py-2">
                        <Card>
                            <View className="flex-row justify-between items-start mb-4">
                                <View>
                                    <Text className="text-slate-500 dark:text-slate-400 text-sm font-medium">7-Day Frequency</Text>
                                    <Text className="text-slate-900 dark:text-white text-2xl font-bold">Migraines</Text>
                                </View>
                                <View className="items-end">
                                    <Badge label="-10%" variant="emerald" size="sm" />
                                    <Text className="text-slate-400 text-[10px] mt-1">vs Average</Text>
                                </View>
                            </View>

                            {/* Chart */}
                            <View className="h-40 w-full mb-2">
                                <Svg height="100%" width="100%" viewBox="0 0 472 150" preserveAspectRatio="none">
                                    <Defs>
                                        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                            <Stop offset="0" stopColor="#135bec" stopOpacity="0.2" />
                                            <Stop offset="1" stopColor="#135bec" stopOpacity="0" />
                                        </LinearGradient>
                                    </Defs>
                                    <Path
                                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                                        fill="url(#grad)"
                                    />
                                    <Path
                                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                                        stroke="#135bec"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </Svg>
                            </View>

                            {/* Days of Week */}
                            <View className="flex-row justify-between px-1">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <Text key={day} className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase">{day}</Text>
                                ))}
                            </View>
                        </Card>
                    </View>
                </View>

                {/* Recent Records Header */}
                <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight px-4 pb-2 pt-6">Recent Records</Text>

                {/* Logs List */}
                <View className="flex-col gap-3 px-4 pb-20">
                    {/* Log Item 1 */}
                    <Card className="flex-row items-center gap-4">
                        <Badge iconName="bolt" variant="orange" size="md" className="size-12 rounded-lg" />
                        <View className="flex-1">
                            <Text className="text-slate-900 dark:text-white font-bold">Severe Migraine</Text>
                            <Text className="text-slate-500 dark:text-slate-400 text-xs">Thursday, 2:30 PM • 4h duration</Text>
                        </View>
                        <View className="items-end gap-1">
                            <View className="flex-row gap-1">
                                <View className="size-2 rounded-full bg-primary" />
                                <View className="size-2 rounded-full bg-primary" />
                                <View className="size-2 rounded-full bg-primary" />
                            </View>
                            <Text className="text-[10px] text-slate-400 font-bold uppercase">Intensity</Text>
                        </View>
                    </Card>

                    {/* Log Item 2 */}
                    <Card className="flex-row items-center gap-4 opacity-90">
                        <Badge iconName="waves" variant="blue" size="md" className="size-12 rounded-lg" />
                        <View className="flex-1">
                            <Text className="text-slate-900 dark:text-white font-bold">Mild Pressure</Text>
                            <Text className="text-slate-500 dark:text-slate-400 text-xs">Tuesday, 9:15 AM • 1h duration</Text>
                        </View>
                        <View className="items-end gap-1">
                            <View className="flex-row gap-1">
                                <View className="size-2 rounded-full bg-primary" />
                                <View className="size-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <View className="size-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                            </View>
                            <Text className="text-[10px] text-slate-400 font-bold uppercase">Intensity</Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>

            <BottomTab />
        </View>
    );
};
