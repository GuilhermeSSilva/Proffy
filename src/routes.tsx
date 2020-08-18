import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './assets/pages/Landing';
import TeacherList from './assets/pages/Landing/TeacherList';
import TeacherForm from './assets/pages/Landing/TeacherForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
}

export default Routes;