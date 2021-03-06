import React, { useState } from "react";
import {
  TextField,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Box,
  Menu,
  MenuItem,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CancelIcon from "@material-ui/icons/Cancel";
import Editable from "./Editable";

export const Content = (props) => {
  const [content, setContent] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const { data, deleteItem } = props;

  const handleChange = (e, key) => {
    setContent((prevState) => {
      return { ...prevState, [key]: e.target.value };
    });
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="content" my={2}>
      <Card>
        <CardHeader
          avatar={<Avatar aria-label="content">{data.title[0]}</Avatar>}
          action={
            data.content ? (
              <>
                <IconButton
                  aria-label="settings"
                  aria-controls="card-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="card-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      deleteItem();
                      handleClose();
                    }}
                  >
                    <DeleteIcon color="secondary" />
                    Delete
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <IconButton onClick={deleteItem}>
                <CancelIcon color="secondary" />
              </IconButton>
            )
          }
          title={
            <Editable
              text={content.title || data.title}
              type="text"
              key={data.title}
            >
              <TextField
                variant="outlined"
                size="small"
                margin="dense"
                label={data.title}
                value={content.title || ""}
                onChange={(e) => handleChange(e, "title")}
                autoFocus
                fullWidth
              />
            </Editable>
          }
          subheader={
            <>
              <Editable
                text={content.subheader || data.subheader || " "}
                type="subheader"
                key={data.subheader}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  margin="dense"
                  label={data.subheader}
                  value={content.subheader || ""}
                  onChange={(e) => handleChange(e, "subheader")}
                  autoFocus
                  fullWidth
                />
              </Editable>
              <Editable
                text={content.subheader2 || data.subheader2 || " "}
                type="subheader"
                key={data.subheader2}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  margin="dense"
                  label={data.subheader2}
                  value={content.subheader2 || ""}
                  onChange={(e) => handleChange(e, "subheader2")}
                  autoFocus
                  fullWidth
                />
              </Editable>
            </>
          }
        />
        {data.content && (
          <CardContent>
            <Editable
              text={content.content || data.content}
              type="content"
              key={data.content}
            >
              <TextField
                variant="outlined"
                size="small"
                margin="dense"
                label={data.content}
                value={content.content || ""}
                onChange={(e) => handleChange(e, "content")}
                autoFocus
                fullWidth
              />
            </Editable>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};
