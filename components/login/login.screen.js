import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Field } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone';

const LoginScreen = (props) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={(values) => console.log(values)}
    validationSchema={yup.object().shape({
      email: yup.string(),
      //        .email(),
      //        .required('Campo obrigatório'),

      telefone: yup.string(),
      // .phone(),
      //      .required('Campo obrigatório'),

      EmailorPhone: yup.bool().when(['email', ' telefone'], {
        is: (email, telefone) =>
          (!email && !telefone) || (!!email && !!telefone),
        then: yup
          .bool()
          .required(
            'O email ou número de telefone inserido não corresponde a nenhuma conta.'
          ),
        otherwise: yup.bool(),
      }),

      password: yup
        .string('A senha inserida está incorreta.')
        .required('Campo obrigatório'),
    })}>
    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          placeholder="E-mail ou telefone"
        />
        {errors.EmailorPhone && (
          <Text style={{ fontSize: 10, color: 'red' }}>
            {errors.EmailorPhone}
          </Text>
        )}
        <TextInput
          secureTextEntry={true}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          placeholder="Senha"
        />
        {errors.password && (
          <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
        )}

        <Button disabled={!isValid} onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

export default LoginScreen;
