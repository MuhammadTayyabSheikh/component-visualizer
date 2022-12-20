import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import ComponentCard from '../components/ComponentCard';
import styled from 'styled-components';
import CustomButton from '../components/resizeable components/CustomButton';
import CustomInputField from '../components/resizeable components/CustomInputField';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

const StyledGrid = styled(Grid)`
  margin-top: ${(props) => props.spacing}px;
`;

const ResponsiveCardGrid = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4" align="left">
        Components
      </Typography>
      <StyledGrid container spacing={3}>
        <Grid item xs={2}>
          <ComponentCard compId='0'  component={<CustomButton>Button</CustomButton>}/>
        </Grid>
        <Grid item xs={2}>
          <ComponentCard compId='1'  component={<CustomInputField placeholder='This is an input field'></CustomInputField> }/>
        </Grid>
        {/* <Grid item xs={2}>
          <ComponentCard />
        </Grid>
        <Grid item xs={2}>
          <ComponentCard />
        </Grid> */}
      </StyledGrid>
    </div>
  );
};

export default ResponsiveCardGrid;
