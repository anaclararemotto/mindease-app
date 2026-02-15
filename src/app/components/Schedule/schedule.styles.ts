import { Colors } from '@/src/shared/theme/colors';
import { typography } from '@/src/shared/theme/typography';
import { Subtitles } from 'lucide-react';
import { StyleSheet } from 'react-native';

export const scheduleCardStyles = (colors: Colors) =>
  StyleSheet.create({
    containerCard: {
      borderColor: colors.backgroundCard,
      borderWidth: 1,
      borderRadius: 16,
      padding: 15,
      gap: 10
    },
    inline: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-end'
        
    },
    hour:{
        ...typography.headingmd,
        color: colors.colorPrimary
    },
    title:{
        ...typography.bodysm,
        color: colors.placeholder
    },
    subtitle:{
        ...typography.bodylg,
        color: colors.textColor
    },
  });