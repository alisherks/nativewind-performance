/// <reference types="nativewind/types" />
import './global.css';
import { View } from 'react-native';

const boxes = Array(1000).fill(null).map((_, i) => <View key={i} className="bg-slate-500 dark:bg-amber-500 w-5 h-5" />);

export default function App() {
  return (
    <View className="grow flex-row flex-wrap gap-2 justify-center">
      {boxes}
    </View>
  );
}