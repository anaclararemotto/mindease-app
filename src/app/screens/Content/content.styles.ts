import { Colors } from '@/src/shared/theme/colors';
import { typography } from '@/src/shared/theme/typography';
import { StyleSheet } from 'react-native';

export const contentStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingHorizontal: 30,
      paddingVertical: 90,
      height: '100%',
      gap: 20
    },
    inlineContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inline: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',        
    },
    containerColumn: {
      gap: 10
    },
    title: {
      ...typography.headingxs,
      color: colors.brandAlternative
    },
    subtitle: {
      ...typography.bodymd,
      color: colors.brandAlternative
    },
    carouselContainer: {
  marginTop: 16,
},
carouselContent: {
  gap: 12, 
},
  });