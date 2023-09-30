'use client';
import StepperForm from '@/components/StepperForm/StepperForm';
import GuardianInfo from '@/components/StudentForm/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentForm/LocalGuardianInfo';
import StudentBasicInfo from '@/components/StudentForm/StudentBasicInfo';
import StudentInfo from '@/components/StudentForm/StudentInfo';

const CreateStudentPage = () => {
  const steps = [
    {
      title: 'Student Information',
      content: <StudentInfo />,
    },
    {
      title: 'Basic Information',
      content: <StudentBasicInfo />,
    },
    {
      title: 'Guardian Information',
      content: <GuardianInfo />,
    },
    {
      title: 'Local Guardian Information',
      content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '36px' }}>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
