import React, { useEffect, useState } from 'react';

const Fetching = ({setfetch}) => {
    const [state, setState] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [newItem, setNewItem] = useState({ title: '', status: '' });
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => setState(data));
    }, []);

    const handleDelete = (id) => {
        const updatedState = state.filter(item => item.id !== id);
        setState(updatedState);
    };

    const handleEdit = (id, currentTitle) => {
        let newTitle = prompt("Enter new title:", currentTitle);
        if (newTitle === null || newTitle === "") {
            return;
        }

        let newId = prompt("Enter new ID:", id);
        if (newId === null || newId === "" || isNaN(newId)) {
            return;
        }

        newId = parseInt(newId);

        setState(prevState =>
            prevState.map(todo =>
                todo.id === id ? { ...todo, id: newId, title: newTitle } : todo
            )
        );
    };
    const handleAdd = () => {
        const nextId = Math.max(...state.map(item => item.id), 0) + 1;
        const status = newItem.status.toLowerCase() === 'true'; 
        const newItemWithId = { ...newItem, id: nextId.toString(), completed: status };
        setState(prevState => [...prevState, newItemWithId]);
        setNewItem({ title: '', status: '' });
        setShowAddForm(false);
        alert("Data was added successfully check at end.");
    };
    
    

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredItems = state.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <input
                    placeholder='Search title...'
                    className='form-control w-50'
                    type="text"
                    value={searchQuery}
                    onChange={e => handleSearch(e.target.value)}
                />
                <button className='btn btn-outline-warning'>Search</button>
                <button className='btn btn-outline-primary' onClick={() => setShowAddForm(true)}>Add</button>
                <button className='btn btn-outline-primary' onClick={() => setfetch(true)}>logout</button>
            </div>
            {showAddForm && (
                <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
                    <input
                        type="text"
                        placeholder="Title" className='form-control'
                        value={newItem.title}
                        onChange={e => setNewItem({ ...newItem, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Status" className='form-control'
                        value={newItem.status}
                        onChange={e => setNewItem({ ...newItem, status: e.target.value })}
                    />
                    <button type="button" className='btn btn-outline-primary' onClick={handleAdd}>Add Item</button>
                </form>
            )}
            <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px', marginTop: '40px' }}>
                {filteredItems.map((elem, i) => (
                    <div style={{ display: 'flex', flexDirection: 'column', height: '350px', width: '650px',padding:"10px",boxShadow:"1px 1px 10px 1px", border: '1px solid red', justifyContent: 'center', alignItems: 'center' }} key={i}>
                        <h1><span style={{ color: "red" }}>id: </span>{elem.id}</h1>
                        <h1><span style={{ color: "blue" }}>title:</span> {elem.title}</h1>
                        <h1><span style={{ color: "green" }}>status:</span>{elem.completed?.toString()}</h1>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'cenetr', gap: '30px', marginTop: '10px' }}>
                            <button className='btn btn-primary' onClick={() => handleEdit(elem.id, elem.title)} >EDIT</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(elem.id)}>DELETE</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Fetching
