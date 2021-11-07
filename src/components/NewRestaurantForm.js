import {useState} from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {createRestaurant} from '../store/restaurants/actions';

export const NewRestaurantForm = ({createRestaurant}) => {
  const [name, setName] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    createRestaurant(name);
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Add Restaurant"
        fullWidth
        variant="filled"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        data-testid="new-restaurant-submit-button"
      >
        Add
      </Button>
    </form>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = {createRestaurant};

export default connect(mapStateToProps, mapDispatchToProps)(NewRestaurantForm);