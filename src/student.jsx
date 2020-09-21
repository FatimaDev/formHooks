import React,{useState , useContext} from 'react';
import {StudentContext} from './context/index';



function Student() { 

    
    const [name , setName] = useState('');
    const [age , setAge] = useState(0);
    const [level , setLevel] = useState('');
    const {addStudent} = useContext(StudentContext);



    //console.log(name);
    //console.log(age);
    //console.log(level);

   const handleFormSubmit = (e) => {
        e.preventDefault();
        const student = {
            name,
            age,
            level 
        }
        addStudent(student);
        setName('');
        setAge(0);
        setLevel('');

    }

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                  <input 
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                   type="text" 
                   placeholder="name " 
                   className="form-control"
                   />
              </div>
              <div className="form-group">
                  <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                   type="number" 
                   placeholder="age" 
                   className="form-control"
                   />
              </div>
              <div className="form-group">
                  <input 
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  type="text"
                   placeholder="level " 
                   className="form-control"
                   />
              </div>
              <div className="form-group">
                  <button type="submit">Submit</button>             
             </div>
            </form>
        </div>
    )
}
export default Student;
