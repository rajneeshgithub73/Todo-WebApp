import './todoform.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const formHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(text));
        setText('');
    }
    
    return ( 
        <>
            <form className='form' onSubmit={formHandler}>
                <div className='form-main'>
                    <div className='form-title-div'>
                        <input type="text" 
                        placeholder='title'
                        value={text}
                        onChange={(e)=> setText(e.target.value)}/>
                    </div>
                    <div className='form-desc-div'>
                        <textarea name="" id="" cols="30" rows="10" placeholder='description'></textarea>
                    </div>
                    <div className='form-btn-div'>
                        <button type="submit">Add TODO</button>
                    </div>
                </div>
            </form>
        </>
     );
}

export default TodoForm;