import react, { useState } from 'react';

function ToDo() {
    const [input,setInput] = useState('');
    const [toDo,setToDo] = useState([]);

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo([...toDo, input.trim()]);
        setInput('');
    }

    const deleteToDo = (key) => {
        const newToDoList = toDo.filter((_,i) => i !== key);
        setToDo(newToDoList);
    }

    return (
        <section className='container'>
            <div className='inputContainer'>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="toDo" value={input} id="" placeholder='Enter your Schedule Here' required onChange={handleInput}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='toDoContainer'>
                {toDo.length > 0 && (<ol>
                    {toDo.map((task,index)=>{
                        return <li key={index}>{task}<button className='btn-delete' onClick={()=>deleteToDo(index)} >Delete</button></li>
                    })}
                </ol>)}
            </div>
        </section>
    )
};
export default ToDo;