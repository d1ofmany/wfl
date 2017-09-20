import React from 'react';

const ShowMeal = ({title, handleEdit}) => {
    return (
            <div className="Meal">
                <div>
                    {title}
                </div>
                <button type="button" onClick={handleEdit}>Edit</button>
            </div>
        );
};

export default ShowMeal;
