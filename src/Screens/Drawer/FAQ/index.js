import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {gloablStyles} from '../../../Styles/global.styles';
import useThemeToggler from '../../../Theme/hooks/useThemeToggler';
import {AppThemeScreen} from '../../../components';

export default function FAQScreen() {
  const {isThemeDark} = useThemeToggler();

  return (
    <AppThemeScreen>
      <View style={gloablStyles.container}>
        <Text style={{color: isThemeDark ? 'white' : 'black'}}>
          FAQ Screen ( Coming Soon... )
        </Text>
      </View>
    </AppThemeScreen>
  );
}

const styles = StyleSheet.create({});
