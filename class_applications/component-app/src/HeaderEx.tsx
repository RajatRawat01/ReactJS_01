import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(
    {
        "my_heading":{

            color:"green",
            fontWeight:700,
            textAlign:"center"
        }
    }
    );
export default function HeaderEx()
{  
    
    const classes:any = useStyles();
   return(
       <p className={classes.my_heading}> Ecommerce application Soon...!
     
       </p>
   )

};