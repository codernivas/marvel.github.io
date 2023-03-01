import React from "react";
import { Grid, Typography, Button, Card, CardContent } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    title: {
      marginBottom: theme.spacing(2),
      fontWeight: "bold",
    },
    subtitle: {
      marginBottom: theme.spacing(4),
    },
    price: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: theme.spacing(4),
    },
    feature: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: "auto",
    },
  })
);

interface Price {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
}

interface Props {
  prices: Price[];
}

const PricingPage: React.FC<Props> = ({ prices }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {prices.map((price) => (
          <Grid item xs={12} sm={6} md={4} key={price.title}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2" className={classes.title}>
                  {price.title}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  {price.subtitle}
                </Typography>
                <Typography variant="h4" component="p" className={classes.price}>
                  ${price.price}
                </Typography>
                {price.features.map((feature) => (
                  <Typography variant="body1" key={feature} className={classes.feature}>
                    {feature}
                  </Typography>
                ))}
                <Button variant="contained" color="primary" className={classes.button}>
                  Choose Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

// Sample JSON data
const pricesData: Price[] = [
  {
    title: "Basic Plan",
    subtitle: "For personal use",
    price: 9.99,
    features: ["1 user", "10 GB storage", "Email support"],
  },
  {
    title: "Pro Plan",
    subtitle: "For small businesses",
    price: 19.99,
    features: ["5 users", "50 GB storage", "Phone and email support"],
  },
  {
    title: "Enterprise Plan",
    subtitle: "For large organizations",
    price: 99.99,
    features: ["Unlimited users", "Unlimited storage", "24/7 support"],
  },
];

const App: React.FC = () => {
  return <PricingPage prices={pricesData} />;
};

export default App;
