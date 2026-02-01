import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialSymbols } from './MaterialSymbols';

export const Header: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <View
            className="flex-row items-center justify-between px-4 pb-2 bg-background-light/95 dark:bg-background-dark/95 sticky top-0 z-10 backdrop-blur-md border-b border-slate-200 dark:border-slate-800"
            style={{ paddingTop: insets.top + 8 }}
        >
            {/* Profile Section */}
            <View className="flex-row items-center flex-1 gap-3">
                <View className="size-10 rounded-full border-2 border-primary/20 overflow-hidden">
                    <Image
                        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxSQ23i_fB-eh4cWDbzWIl3q4UD3VUEpXiYeB4Ktf-1Sm-XU0mJiQT3GYL1kxIJBOKVpTVttc97NyZU7qg3ILb25MkxBXtXTsNdosmxJ48c_3Ci9pYF2AwhpKciukeSZCyUzwzJoM_npakpe0saeksRycW4gOKPnWeFRcKMWdd7Sp_F89rzVpVYG35edSkj0Ee2aFeFza-KfRgF-yRlJRf8Gzg0fiba07JxiPm7DxzwFhnfZ9idZrZ3t5CA7vtNy2PS4tl-ofXd2Q" }}
                        className="size-full"
                        resizeMode="cover"
                    />
                </View>
                <View>
                    <Text className="text-xs text-slate-500 dark:text-slate-400 font-medium">Welcome back,</Text>
                    <Text className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Alex Rivera</Text>
                </View>
            </View>

            {/* Notification Button */}
            <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 border border-transparent dark:border-slate-700">
                <MaterialSymbols name="notifications" size={20} className="text-slate-600 dark:text-slate-200" />
            </TouchableOpacity>
        </View>
    );
};
