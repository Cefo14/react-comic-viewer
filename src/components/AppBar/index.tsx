import { FunctionComponent, memo } from 'react';

import AppBarMaterial from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import MenuIcon from '@material-ui/icons/Menu';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import GetAppIcon from '@material-ui/icons/GetApp';
import DeleteIcon from '@material-ui/icons/Delete';

import useOpen from '../../hooks/useOpen';

import IAppBarProps from './IAppBarProps';
import useStyles from './useStyles';

const AppBar: FunctionComponent<IAppBarProps> = ({
  title = '',
  files = [],
  isLoading = false,
  onSelectFile = () => {},
  onDownloadFile = () => {},
  onDeleteFile = () => {},
}) => {
  const classes = useStyles();

  const {
    isOpen: drawerIsOpen,
    open: openDrawer,
    close: closeDrawer,
  } = useOpen();

  const handleOnSelectFile = (index: number) => (event: any) => {
    onSelectFile(event, index);
    closeDrawer();
  };

  const handleOnDownloadFile = (index: number) => (event: any) => {
    onDownloadFile(event, index);
  };

  const handleOnDeleteFile = (index: number) => (event: any) => {
    onDeleteFile(event, index);
  };

  return (
    <>
      <AppBarMaterial
        position="sticky"
        color="default"
        className={classes.appBar}
        aria-label="AppBar"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open-drawer-menu"
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.textContainer}>
            <Typography variant="h6">
              { title }
            </Typography>
            <IconButton
              color="inherit"
              aria-label="add-documents"
            >
              <NoteAddIcon />
            </IconButton>
          </div>
        </Toolbar>
        { isLoading && <LinearProgress aria-label="loading" /> }
      </AppBarMaterial>
      <Drawer
        anchor="left"
        open={drawerIsOpen}
        onClose={closeDrawer}
        aria-label="drawer-menu"
      >
        <div className={classes.listContainer}>
          <List
            aria-label="file-list"
          >
            {
              files.map((file, index) => (
                <ListItem
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  button
                  onClick={handleOnSelectFile(index)}
                  aria-label="file-list-item"
                >
                  <ListItemText primary={file.name} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="inherit"
                      aria-label="download-file"
                      onClick={handleOnDownloadFile(index)}
                    >
                      <GetAppIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      aria-label="delete-file"
                      onClick={handleOnDeleteFile(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            }
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default memo(AppBar);
