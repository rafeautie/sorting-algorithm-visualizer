import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default () => {
  return (
    <Card raised={true} className="stats">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>Swaps:</Typography>
        <Typography color="textSecondary" gutterBottom>Comparisons:</Typography>
      </CardContent>
    </Card>
  );
}