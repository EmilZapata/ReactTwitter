import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

const HelloWorld: React.FC<HelloProps> = ({
  compiler,
  framework,
}) => {
  return (
    <h1>
      Holla from {compiler} and {framework}
    </h1>
  );
};

export default HelloWorld;
