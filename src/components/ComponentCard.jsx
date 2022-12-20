import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import CustomButton from './resizeable components/CustomButton'
import CustomInputField from './resizeable components/CustomInputField';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '100%',
    objectFit: 'contain'
  },
});

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  // @media (min-width: 600px) {
  //   width: 50%;
  // }
  // @media (min-width: 960px) {
  //   width: 33.3333%;
  // }
`;

const ComponentCard = ({ component, compId }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <StyledCard className={classes.root}>
      {component}
      {/* <Link to='/editor'> */}
      <CustomButton bgColor='#002b36' color='#b58900' width='100%' to='/editor' onClick={() => { localStorage.setItem('activeComponent', compId); navigate('/editor')}} >Edit</CustomButton>
      {/* </Link> */}
    </StyledCard>
  );
};

export default ComponentCard;
