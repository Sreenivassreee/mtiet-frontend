
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'; // after installing the react-router-dom we will have to import it here
import Login from './components/login';
import TopHeader from './components/header';
import PersonalInfo from './components/studentslist';
import Data from './components/data';
import StepContext from './components/stepContext';
import StepContext1 from './components/stepContext1';
import Datas1 from './components/charts/datas';
import Chats1 from './components/charts/chat1';
import Chats2 from './components/charts/chat2';
import Chats3 from './components/charts/chat3';
import Chats4 from './components/charts/chat4';
import Chats5 from './components/charts/chat5';



function App() {

  if (localStorage.getItem("userid") == null) {
    var page = <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </>
  } else {
    var page = <>
      <Routes>
        <Route exact path="/" element={<TopHeader />} />
        <Route exact path="/personal" element={<PersonalInfo />} />
        {/* <Route exact path="/:rollnumber/data" element={<Data />} /> */}
        <Route exact path="/:rollnumber/data" element={<Datas1 />} >
          <Route path="chats1" element={<Chats1 />} />
          <Route path="chats2" element={<Chats2 />} />
          <Route path="chats3" element={<Chats3 />} />
          <Route path="chats4" element={<Chats4 />} />
          <Route path="chats5" element={<Chats5 />} />
        </Route>
        <Route exact path="/submission" element={<StepContext />} />
        <Route exact path="/update/:id" element={<StepContext1 />} />

      </Routes>
    </>
  }
  return (
    <HashRouter>
      {page}

    </HashRouter>
  );
}


export default App;