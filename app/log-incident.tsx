import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { MaterialSymbols } from '../components/MaterialSymbols';

export default function LogIncidentScreen() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    // Form State
    const [severity, setSeverity] = useState(7);
    const [notes, setNotes] = useState('');
    const [questionnaire, setQuestionnaire] = useState({
        stressed: true,
        outdoors: false,
        activity: false,
        sleep: true,
        skippedMeals: false,
    });

    const symptoms = ['Sensitivity to Light', 'Nausea', 'Aura', 'Throbbing Pain', 'Dizziness'];
    const [selectedSymptoms, setSelectedSymptoms] = useState(['Sensitivity to Light', 'Throbbing Pain']);

    const toggleSymptom = (symptom: string) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    };

    return (
        <View className="flex-1 bg-background-light dark:bg-background-dark">
            {/* Header */}
            <View
                className="flex-row items-center justify-between px-4 pb-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10"
                style={{ paddingTop: insets.top + 8 }}
            >
                <TouchableOpacity onPress={() => router.back()}>
                    <Text className="text-primary font-medium text-base">Cancel</Text>
                </TouchableOpacity>
                <Text className="text-lg font-bold text-slate-900 dark:text-white">Log New Incident</Text>
                <TouchableOpacity className="w-12 items-end">
                    <MaterialSymbols name="info" size={24} className="text-primary" />
                </TouchableOpacity>
            </View>

            {/* Progress Bar */}
            <View className="flex-row justify-center gap-3 py-3 bg-background-light/95 dark:bg-background-dark/95">
                <View className="h-1.5 w-8 rounded-full bg-primary" />
                <View className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
                <View className="h-1.5 w-8 rounded-full bg-slate-300 dark:bg-slate-700" />
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 120 }}>
                {/* Severity Section */}
                <View className="px-4 py-6">
                    <Text className="text-2xl font-bold text-slate-900 dark:text-white mb-6">How severe is it?</Text>
                    <View className="bg-white dark:bg-slate-900/50 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                        <View className="flex-row justify-between items-end mb-4">
                            <View>
                                <Text className="text-4xl">😖</Text>
                                <Text className="text-sm font-medium mt-2 text-slate-500 dark:text-slate-400 uppercase tracking-wider">Level {severity}</Text>
                            </View>
                            <Text className="text-3xl font-bold text-primary">High</Text>
                        </View>

                        {/* Custom Slider Visualization (Mock interactive) */}
                        <View className="gap-3">
                            <View className="h-6 justify-center">
                                <View className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                                    <View className="absolute inset-0 bg-primary opacity-20" />
                                    {/* Simple fill representation */}
                                    <View style={{ width: `${severity * 10}%` }} className="h-full bg-primary rounded-full" />
                                </View>
                                {/* Thumb */}
                                <View style={{ left: `${severity * 10}%` }} className="absolute size-6 rounded-full bg-white border-4 border-primary shadow-lg -ml-3" />
                            </View>
                            <View className="flex-row justify-between px-1">
                                <Text className="text-xs font-medium text-slate-400">1</Text>
                                <Text className="text-xs font-medium text-slate-400">5</Text>
                                <Text className="text-xs font-medium text-slate-400">10</Text>
                            </View>
                            {/* Simple touch area to simulate changing values for demo */}
                            <View className="flex-row justify-between mt-2">
                                <TouchableOpacity onPress={() => setSeverity(Math.max(1, severity - 1))} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><MaterialSymbols name="remove" size={20} className="text-slate-600 dark:text-slate-300" /></TouchableOpacity>
                                <TouchableOpacity onPress={() => setSeverity(Math.min(10, severity + 1))} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg"><MaterialSymbols name="add" size={20} className="text-slate-600 dark:text-slate-300" /></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Timing Section */}
                <View className="px-4 py-4">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-4">Timing</Text>
                    <View className="flex-row gap-4">
                        <View className="flex-1 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                            <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">Start Time</Text>
                            <View className="flex-row items-center gap-2">
                                <MaterialSymbols name="schedule" size={20} className="text-primary" />
                                <Text className="text-base font-bold text-slate-900 dark:text-white">10:45 AM</Text>
                            </View>
                        </View>
                        <View className="flex-1 bg-white dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                            <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase mb-2">End Time</Text>
                            <View className="flex-row items-center gap-2">
                                <MaterialSymbols name="history" size={20} className="text-slate-400" />
                                <Text className="text-base font-bold text-slate-400 italic">Ongoing</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Daily Questionnaire */}
                <View className="px-4 py-4">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-3">Daily Questionnaire</Text>
                    <View className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/50 overflow-hidden">
                        {[
                            { label: 'Were you feeling stressed today?', key: 'stressed' },
                            { label: 'Did you spend a long time outdoors?', key: 'outdoors' },
                            { label: 'Did you engage in intense physical activity?', key: 'activity' },
                            { label: 'Was your sleep quality poor last night?', key: 'sleep' },
                            { label: 'Have you skipped any meals today?', key: 'skippedMeals' },
                        ].map((item) => (
                            <View key={item.key} className="flex-row items-center justify-between p-4">
                                <Text className="flex-1 text-sm font-medium text-slate-900 dark:text-white pr-4">{item.label}</Text>
                                <Switch
                                    value={(questionnaire as any)[item.key]}
                                    onValueChange={(val) => setQuestionnaire(prev => ({ ...prev, [item.key]: val }))}
                                    trackColor={{ false: '#e2e8f0', true: '#135bec' }}
                                    thumbColor={'white'}
                                />
                            </View>
                        ))}
                    </View>
                </View>

                {/* Symptoms */}
                <View className="px-4 py-4">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-3">Symptoms</Text>
                    <View className="flex-row flex-wrap gap-2">
                        {symptoms.map(symptom => {
                            const isSelected = selectedSymptoms.includes(symptom);
                            return (
                                <TouchableOpacity
                                    key={symptom}
                                    onPress={() => toggleSymptom(symptom)}
                                    className={`px-4 py-2 rounded-full border ${isSelected ? 'bg-primary border-primary' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}
                                >
                                    <Text className={`text-sm font-medium ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{symptom}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>

                {/* Additional Details */}
                <View className="px-4 py-4">
                    <Text className="text-lg font-bold text-slate-900 dark:text-white mb-3">Additional Details</Text>
                    <TextInput
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-sm text-slate-900 dark:text-white min-h-[120px]"
                        placeholder="How are you feeling? Did you take any medication?"
                        placeholderTextColor="#94a3b8"
                        multiline
                        textAlignVertical="top"
                        value={notes}
                        onChangeText={setNotes}
                    />
                </View>

            </ScrollView>

            {/* Bottom Save Button */}
            <View
                className="absolute bottom-0 left-0 right-0 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 p-4 z-50"
                style={{ paddingBottom: Math.max(insets.bottom, 24) }}
            >
                <Button label="Save Log" iconName="save" onPress={() => router.back()} />
            </View>
        </View>
    );
}
