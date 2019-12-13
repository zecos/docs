/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles, ThemeProvider } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReactMarkdown from 'react-markdown'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom"
import overview from "./pages/overview.md"
import createInputPage from "./pages/input/create-input.md"
import createLayoutPage from "./pages/input/create-layout.md"
import createMultiPage from "./pages/input/create-multi.md"
import fieldPage from './pages/field.md'
import inputMuiPage from './pages/input-mui.md'
import inputBasicPage from './pages/input-basic.md'
import inputPickerPage from './pages/input-picker.md'
import validatePage from './pages/validate.md'
import ScrollMemory from 'react-router-scroll-memory'

import {theme} from "./theme"

import clsx from 'clsx'
import { CodeBlock } from './CodeBlock/CodeBlock';


const getMd = (file: string) => {
  const [cmpt, setCmpt] = useState(<div>Loading...</div>)
  useEffect(() => {
    (async () => {
      try {
        const text = await fetch(file).then(res => res.text())
        setCmpt(<ReactMarkdown
          source={text}
          renderers={{
            code: CodeBlock,
          }}
        />)
      } catch {
        console.log("couldn't fetch file " + file)
      }
    })()
  }, [file])
  return cmpt
}
const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    white: {
      color: "white",
    },
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: 0,
      paddingBottom: theme.spacing(6),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: drawerWidth,
    },
  }),
)
let lsMenuOpen = true
if (typeof localStorage !== "undefined"
  && typeof localStorage["menu-open"] !== "undefined") {
    lsMenuOpen = JSON.parse(localStorage["menu-open"])
}

const renderMenuLink = ({title, link, code}) => (
  <Link to={link} key={link}>
    <ListItem button>
    <ListItemText primary={code ? <code>{title}</code> : title} />
    </ListItem>
  </Link>
)

const renderSection = ({name, children}, i) => (
  <span key={name || i}>
    <ListItem>
      {name !== "" ? (
        <Typography variant="h6" noWrap>
          {name}
        </Typography>
      ): ""}
    </ListItem>
    {children.map(renderMenuLink)}
    <Divider />
  </span>
)

const renderSectionRoutes = ({children}) => children.map(renderRoute)
const renderRoute = ({cmpt, link}) => {
  return <Route exact path={link}>
    {cmpt}
  </Route>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(lsMenuOpen)
  const toggleMenuOpen = () => {
    localStorage["menu-open"] = !menuOpen
    setMenuOpen(!menuOpen)
  }
  const classes = useStyles()
  const sections = [{
    name: "",
    children: [{
      title: "Overview",
      link: "/",
      cmpt: getMd(overview),
    }]
  }, {
    name: "@zecos/input",
    children: [{
      title: "createInput",
      code: true,
      link: "/input/create-input",
      cmpt: getMd(createInputPage),
    }, {
      title: "createLayout",
      link: "/input/create-layout",
      cmpt: getMd(createLayoutPage),
      code: true,
    }, {
      title: "createMulti",
      link: "/input/create-multi",
      cmpt: getMd(createMultiPage),
      code: true,
    }],
  }, {
    name: "UI Libraries",
    children: [{
      title: "@zecos/input-basic",
      link: "/input-basic",
      cmpt: getMd(inputBasicPage),
    }, {
      title: "@zecos/input-mui",
      link: "/input-mui",
      cmpt: getMd(inputMuiPage),
    }, {
      title: "@zecos/input-picker",
      link: "/input-picker",
      cmpt: getMd(inputPickerPage),
    }]
  }, {
    name: "General",
    children: [{
      title: "@zecos/field",
      link: "/field",
      cmpt: getMd(fieldPage),
    }, {
      title: "@zecos/validate",
      link: "/validate",
      cmpt: getMd(validatePage),
    }]
  }]
  
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ScrollMemory />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: menuOpen,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMenuOpen}
            edge="start"
            className={clsx(classes.menuButton, menuOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography variant="h6" noWrap>
              <span className={classes.white}>@zecos</span>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={menuOpen}
        onClose={toggleMenuOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleMenuOpen}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      <List>
        {sections.map(renderSection)}
      </List>
      </Drawer>
      <div className={classes.drawerHeader} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: menuOpen,
        })}
      >
        <Switch>
          {sections.map(renderSectionRoutes)}
        </Switch>
      </main>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
