import { GestureHandlerRootView } from 'react-native-gesture-handler';
const style = {
  container: {
    flex: 1,
  },
};

export function GestureProvider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={style.container}>
      <>{children}</>
    </GestureHandlerRootView>
  );
}
