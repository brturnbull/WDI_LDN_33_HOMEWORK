import React from 'react';

const BandForm = ({ handleChange, handleSubmit, data, errors }) => {
  const formInvalid = Object.keys(errors).some(key => errors[key]);
  return (
    <form onSubmit={ handleSubmit }>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" className="input" placeholder="Name"  onChange={handleChange} value={data.name} />
      </div>
      {errors.name && <small>{errors.name}</small>}
      <div className="field">
        <label htmlFor="genre">Genre</label>
        <input id="genre" name="genre" className="input" placeholder="Genre"  onChange={handleChange} value={data.genre} />
      </div>
      {errors.genre && <small>{errors.genre}</small>}
      <div className="field">
        <label htmlFor="image">Image</label>
        <input id="image" name="image" className="input" placeholder="Image"  onChange={handleChange} value={data.image} />
      </div>
      <button disable={formInvalid} className="button is-primary">Submit</button>
    </form>
  );
};

export default BandForm;
