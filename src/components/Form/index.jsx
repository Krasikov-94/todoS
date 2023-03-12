import React from 'react';

export const Form = ({ addToList }) => {
  const [value, setValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    addToList(value);

    return setValue('');
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event)}
      className="d-flex flex-column align-items-center mt-3">
      <div className="mb-3">
        <label className="form-label">Todo list</label>
        <input
          required
          placeholder="Tell me the task"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-3">
        Add Todo
      </button>
    </form>
  );
};
