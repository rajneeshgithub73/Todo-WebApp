import './todoItem.css'

function TodoItem() {
    return ( 
        <>
            <div className="item-main">
                <div className='checkbox-div'>
                    <input type="checkbox" name="" id="" checked="true"/>
                </div>
                <div className='item-title-div'>
                    <h2>Title</h2>
                </div>
                <div className='item-update-btn-div'>
                    <button>📁</button>
                </div>
                <div className='item-delete-btn-div'>
                <button>❌</button>
                </div>
            </div>
        </>
     );
}

export default TodoItem;