import './todoform.css'

function TodoForm() {
    return ( 
        <>
            <form action="" className='form'>
                <div className='form-main'>
                    <div className='form-title-div'>
                        <input type="text" 
                        placeholder='title'/>
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