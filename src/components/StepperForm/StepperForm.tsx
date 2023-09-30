'use client';

import { getFromLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { Button, Steps, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  submitHandler: (el: any) => void;
  navigateLink?: string;
}

const StepperForm = ({ steps, submitHandler, navigateLink }: IStepsProps) => {
  const router = useRouter();

  const [current, setCurrent] = useState<number>(
    !!getFromLocalStorage('step')
      ? Number(JSON.parse(getFromLocalStorage('step') as string).step)
      : 0
  );

  useEffect(() => {
    setLocalStorage('step', JSON.stringify({ step: current }));
  }, [current]);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const methods = useForm();

  const { handleSubmit, reset } = methods;

  const handleStudentOnSubmit = (data: any) => {
    submitHandler(data);
    reset();
    setLocalStorage('step', JSON.stringify({ step: 0 }));
    navigateLink && router.push(navigateLink);
  };

  return (
    <>
      <Steps current={current} items={items} style={{ marginBottom: '36px' }} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleStudentOnSubmit)}>
          <div>{steps[current].content}</div>
          <div style={{ marginTop: 24 }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                htmlType="submit"
                onClick={() => message.success('Processing complete!')}
              >
                Submit
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default StepperForm;
