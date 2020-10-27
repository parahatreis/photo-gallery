import React, {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MonochromePhotosIcon from '@material-ui/icons/MonochromePhotos';

const Navbar = () => {



   return (
      <Fragment>
         <AppBar className="bar" color="transparent" style={{boxShadow: 'none',transition:"0.5s"}}>
          <Toolbar>
            <Typography style={{color: 'white',fontSize: '1.5rem'}} variant="h6"><MonochromePhotosIcon/> glassPoint</Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
   )
}

export default Navbar
