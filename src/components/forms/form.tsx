'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: React.ReactElement | React.ReactNode;
  submitHandler: SubmitHandler<any>;
  isReset?: boolean;
} & FormConfig;

function Form({
  children,
  submitHandler,
  defaultValues,
  isReset = true,
}: FormProps) {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig['defaultValues'] = defaultValues;

  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    isReset && reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

export default Form;
