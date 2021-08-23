import { makeStyles, Paper, Typography, Card } from '@material-ui/core'
import React from 'react'



const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: "#F3F1F5"
    },
    pageHeader: {
        padding: theme.spacing(4),
        display: 'flex',
        //marginBottom: theme.spacing(2)
    },
    pageIcon: {
        // display:'inline-block',
        // padding:theme.spacing(2),
        color: "#3c44b1",
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '16px',
        paddingRight: '16px',
        backgroundColor: "#e3e3e3",
        cursor:'pointer',
    },
    pageTitle: {
        paddingLeft: theme.spacing(2),
        cursor:'pointer',
        // '&:hover': {
        // },
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        }
    }
}))
export default function PageHeader(props) {
    const classes = useStyle();
    const { icon, title, subtitle } = props
    return (
        <div>
            <Paper elevation={0} square className={classes.root}>
                <div className={classes.pageHeader}>
                    <Card className={classes.pageIcon}>{icon}</Card>
                    <div className={classes.pageTitle}>
                        <Typography variant="h6" component="div">
                            {title}
                        </Typography>

                        <Typography variant="subtitle2" component="div">
                            {subtitle}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
