import React ,{useState , useEffect} from 'react';
import {StudentContext} from './context/index';
import './App.css';
import Student from './student';

function App() {

  const initialStudents =localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')):[];//component did mount

  const [students , setStudents] = useState(initialStudents);
  const addStudent = (student) => {
  const newStudents = [...students , student];
    setStudents(newStudents);
    
  }


  useEffect(() => { 
    localStorage.setItem('students', JSON.stringify(students));
   return () => {       
    console.log('component will unmount')

  }
 }, [students])
const removeStudent = (item) => {
 const newStudents = students.filter((student) => student.name !== item.name);
  setStudents(newStudents);
}

  return (
    <div className="App">
      {
        students.length > 0 && students.map((student, i) => <h1 key={i}  onClick={()=>removeStudent(student)}
         className="student-name" > {student.name} </h1>)
      }
      <StudentContext.Provider
      value={{ addStudent }}
      >

      <Student />
      </StudentContext.Provider>
    </div>
  );
}

export default App;
