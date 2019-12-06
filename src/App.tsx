/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  ListItemText,
  ListItem,
  List,
  Drawer
} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import ReactMarkdown from 'react-markdown'
import './App.css';
import overview from "./Overview.md"

const getMd = (file: string) => {
  const [cmpt, setCmpt] = useState(<div>Loading...</div>)
  useEffect(() => {
    (async () => {
      const text = await fetch(file).then(res => res.text())
      setCmpt(<ReactMarkdown source={text} />)
    })()
  })
  return cmpt
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenuOpen = () => setMenuOpen(!menuOpen)
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            @zecos/inputs
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={toggleMenuOpen}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {getMd(overview)}
    </div>
  )
}

export default App;
