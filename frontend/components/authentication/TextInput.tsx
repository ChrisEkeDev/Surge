import * as React from 'react'
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native'
import { FieldError } from 'react-hook-form';
import { inputs } from "../../styles/MasterStyles";
import { MaterialIcons } from '@expo/vector-icons';

export interface Props extends TextInputProps {
  icon: any
  name: string
  label?: string
  labelStyle?: TextStyle
  error?: FieldError | undefined
}

export default React.forwardRef<any, Props>(
    (props, ref): React.ReactElement => {
      const { icon, label, labelStyle, error, ...inputProps } = props

      return (
        <View  style={inputs.inputContainer}>
          {label && <Text style={[inputs.label, labelStyle]}>{label}</Text>}
          {
                icon ?
                <View style={inputs.icon}>
                    {icon}
                </View> :
                null
            }
            <View style={inputs.inputContents}>
              <TextInput
                autoCapitalize="none"
                ref={ref}
                style={[                  inputs.inputContainer,
                  { borderColor: error ? '#fc6d47' : '#c0cbd3' },
                ]}
                {...inputProps}
              />
              <MaterialIcons name='circle' style={inputs.errorIcon} size={20} color="red"/>
            </View>
              <Text style={inputs.textError}>{error && error.message}</Text>

        </View>
      )
    }
  )



  const styles = StyleSheet.create({

  })
