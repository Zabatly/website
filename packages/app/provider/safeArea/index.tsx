import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
const insets = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const frame = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

const initialMetrics = { insets, frame };
export function SafeProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <>{children}</>
    </SafeAreaProvider>
  );
}
