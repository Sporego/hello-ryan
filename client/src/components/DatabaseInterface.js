import React, { useContext } from 'react';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import axios from 'axios';

import { ThemeContext } from '../contexts/ThemeContext';
import { ApplicantsContext} from '../contexts/ApplicantsContext'

function DatabaseInterface() {
  const { lightMode, setLightMode } = useContext(ThemeContext);
  const {applicantsArray, setApplicantsArray} = useContext(ThemeContext);

  function validateFirstName(value) {
    let error;
    if (!value) {
      error = 'First name is required';
    }
    return error;
  }

  function validateLastName(value) {
    let error;
    if (!value) {
      error = 'Last name is required';
    }
    return error;
  }

  return (
    <>
      <Box
        w="100%"
        py="4"
        color={lightMode === 'light' ? 'black' : 'gray.100'}
        bg={lightMode === 'light' ? 'white' : 'gray.700'}
      >
        <Center>
          <Flex
            direction="row"
            align="center"
            justify="space-around"
            w={{ base: '95%', md: '80%' }}
          >
            <VStack>
              <Heading>Applicant Tracking Interface</Heading>
              <Heading size="md">POST</Heading>
              <Formik
                initialValues={{}}
                onSubmit={async (values, actions) => {
                  values.skills = values.skills.split(',');
                  alert("payload : "+JSON.stringify(values, null, 2));
                  try {
                    const response = await axios.post('api/applicants', values);
                    alert('Success! Applicant ID: ' + response.body);
                    actions.setSubmitting(false);
                  } catch (error) {
                    actions.setSubmitting(false);
                    alert(error);
                  }
                }}
              >
                {({ values }) => (
                  <Form>
                    <HStack>
                      <Field name="firstName" validate={validateFirstName}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.firstName && form.touched.firstName
                            }
                          >
                            <FormLabel htmlFor="firstName">
                              First name
                            </FormLabel>
                            <Input
                              {...field}
                              id="firstName"
                              placeholder="First name"
                            />
                            <FormErrorMessage>
                              {form.errors.firstName}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Field name="lastName" validate={validateLastName}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.lastName && form.touched.lastName
                            }
                          >
                            <FormLabel htmlFor="lastName">Last name</FormLabel>
                            <Input
                              {...field}
                              id="lastName"
                              placeholder="Last name"
                            />
                            <FormErrorMessage>
                              {form.errors.lastName}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </HStack>
                    <Field name="skills">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.skills && form.touched.skills}
                        >
                          <FormLabel htmlFor="skills">Skills</FormLabel>
                          <Input
                            {...field}
                            id="skills"
                            placeholder="git,react,node"
                          />
                          <FormErrorMessage>
                            {form.errors.skills}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme="green"
                      isLoading={values.isSubmitting}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
              <Heading size="md">GET</Heading>
              <Formik
                initialValues={{}}
                onSubmit={async (values, actions) => {
                  values.skills = values.skills.split(',');
                  alert("payload : "+JSON.stringify(values, null, 2));
                  try {
                    const response = await axios.get('api/applicants', values);
                    setApplicantsArray(response)
                    actions.setSubmitting(false);
                  } catch (error) {
                    actions.setSubmitting(false);
                    alert(error);
                  }
                }}
              >
                {({ values }) => (
                  <Form>
                    <Field name="skills">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.skills && form.touched.skills}
                        >
                          <FormLabel htmlFor="skills">Skills</FormLabel>
                          <Input
                            {...field}
                            id="skills"
                            placeholder="git,react,node"
                          />
                          <FormErrorMessage>
                            {form.errors.skills}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Button
                      mt={4}
                      colorScheme="green"
                      isLoading={values.isSubmitting}
                      type="submit"
                      isDisabled="true"
                    >
                      Find (via aggregate)
                    </Button>
                  </Form>
                )}
              </Formik>
              <Heading size="md">API routes to try with tools like Postman</Heading>
              <Heading size="sm">(GET) https://hello-ryan.herokuapp.com/api/applicant</Heading>
              <Heading size="sm">(POST) https://hello-ryan.herokuapp.com/api/applicant</Heading>
            </VStack>
          </Flex>
        </Center>
      </Box>
    </>
  );
}

export default DatabaseInterface;
