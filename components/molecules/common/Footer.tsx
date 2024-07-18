import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
}

const FooterComponent: React.FC<Props> = ({ title, subtitle }) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack justifyContent="flex-end">
      <XStack justifyContent="center" gap={8} bottom={10}>
        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400">
          {title}
        </Text>

        <Text
          fontSize={12}
          fontWeight="bold"
          color={colors.midnightBlue}>
          {subtitle}
        </Text>
      </XStack>
    </YStack>

  )
}

export default FooterComponent
