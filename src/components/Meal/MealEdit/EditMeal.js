import React from 'react';

const EditMeal = ({title, handleChange, handleSave, handleDelete}) => {
    return (
            <div className="Meal">
                <input type="text" value={title} onChange={handleChange} />
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
        );
};

export default EditMeal;
