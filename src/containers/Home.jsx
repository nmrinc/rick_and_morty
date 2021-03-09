import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_characters } from '../actions/charactersActions';

const Home = () => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_characters());
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-12"><h1>Home</h1></div>
    </div>);
}

export default Home;