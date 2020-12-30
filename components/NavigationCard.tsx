import {ButtonBase, Card, CardContent, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

interface Props {
  href: string
  title: string
  description: string
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  },
});

export const NavigationCard = (props: Props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <ButtonBase
        className={classes.cardAction}
        href={props.href}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body2"
            component="p"
          >
            {props.description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </Card>
  )
}
