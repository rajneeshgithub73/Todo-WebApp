import './todoItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/todoSlice';

function TodoItem() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="item-main">
                <div className='checkbox-div'>
                    <input type="checkbox" name="" id="" checked="true" />
                </div>
                <div className='item-title-div'>
                    <h2>title</h2>
                </div>
                <div className='item-update-btn-div'>
                    <button>📁</button>
                </div>
                <div className='item-delete-btn-div'>
                    <button>❌</button>
                </div>
            </div>
            {
                todos.map((todo) => {
                    return (
                        <div className="item-main">
                            <div className='checkbox-div'>
                                <input type="checkbox" name="" id="" checked="true" />
                            </div>
                            <div className='item-title-div'>
                                <h2>{todo.title}</h2>
                            </div>
                            <div className='item-update-btn-div'>
                                <button>📁</button>
                            </div>
                            <div className='item-delete-btn-div'>
                                <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default TodoItem;