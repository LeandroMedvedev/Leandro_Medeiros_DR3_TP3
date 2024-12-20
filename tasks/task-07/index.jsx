import { SafeAreaView, StyleSheet } from 'react-native';

import { ProductListScreen } from './screens';
import { colors } from '../../styles/globalStyles';

export default function Task07() {
  return (
    <SafeAreaView style={styles.container}>
      <ProductListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ebony,
  },
});
