import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  radio:{
      marign: theme.spacing(0),
  }
}));

export default function SignIn() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Form Informaiton
        </Typography>
        <form className={classes.form} noValidate>   
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="fname"
                        label="First Name"
                        name="fname"
                        autoComplete="fname"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="lname"
                        label="Last Name"
                        name="lname"
                        autoComplete="lname"
                        autoFocus
                    />
                </Grid>
            </Grid>
          <TextField 
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField 
            // variant="outlined"
            margin="normal"
            fullWidth
            name="phone"
            label="Phone"
            id="phone"
            autoFocus
          />
          {/* <FormControl > */}
                {/* <label>Gender</label> */}
                <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange} row>
                 {/* <FormLabel component="legend">Gender</FormLabel> */}
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
             {/* </form></FormControl> */}
          <Grid container spacing={3}>
         
          <Grid item xs={12} >
            <TextField id="dateofBirth" name="dateOfBirth" label="YYYY/MM/DD" fullWidth />
            </Grid>
            <Grid item xs={12}>
            <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete=" billing address-line1"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="billing address-line2"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="billing address-level2"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="billing postal-code"
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="billing country"
            />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="describe"
                    label="Describe"
                    fullWidth
                    multiline
                    rows="4"
                    margin="normal"
                    variant="outlined"
                    />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
         
        </form>
      </div>
    </Container>
  );
}
