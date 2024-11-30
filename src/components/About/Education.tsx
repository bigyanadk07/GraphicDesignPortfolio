import React from 'react';

const Education:React.FC = () =>{
  return (
    <div>
      <h2 className="text-2xl fraunces mb-6">Educ<span className='text-orange-400'>ation</span></h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-medium">Undergrad Level</h3>
          <p className="text-sm text-gray-600">Session: 2021-25</p>
          <p className="text-sm text-gray-600">Academia Int'l College - Tribhubhan University</p>
          <p className='text-sm text-gray-600'>Course: BSc.CSIT</p>
        </div>
        <div>
          <h3 className="font-medium">College Level</h3>
          <p className="text-sm text-gray-600">Session: 2018-2020</p>
          <p className="text-sm text-gray-600">D.A.V. College | Background: Computer Science</p>
        </div>
        <div>
          <h3 className="font-medium">High School Level</h3>
          <p className="text-sm text-gray-600">Session: 2018</p>
          <p className="text-sm text-gray-600">Adarsha Vidya Mandir High School | Background: Science</p>
        </div>
      </div>
    </div>
  );
}

export default Education;