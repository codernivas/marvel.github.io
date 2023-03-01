import React, { useState } from 'react';

type StepProps = {
  step: number;
  activeStep: number;
  children: React.ReactNode;
  isValid: boolean;
};

const Step: React.FC<StepProps> = ({ step, activeStep, children, isValid }) => {
  if (step !== activeStep) return null;
  return <div>{isValid ? children : <p>Please fill out all fields before proceeding</p>}</div>;
};

type StepperProps = {
  children: React.ReactNode[];
  onSubmit: () => void;
};

const Stepper: React.FC<StepperProps> = ({ children, onSubmit }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < children.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      onSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        const stepProps: StepProps = {
          step: index,
          activeStep,
          isValid: true, // replace with your validation logic
          children: child.props.children,
        };

        return React.cloneElement(child, stepProps);
      })}
      <button onClick={handleBack} disabled={activeStep === 0}>
        Back
      </button>
      <button onClick={handleNext} disabled={!children[activeStep].props.isValid}>
        {activeStep < children.length - 1 ? 'Next' : 'Submit'}
      </button>
    </div>
  );
};

export default Stepper;