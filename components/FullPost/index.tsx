import React from 'react'
import { Button, Paper, Typography } from "@material-ui/core";
import {PostActions} from "../PostActions";
import MessageIcon from '@material-ui/icons/TextsmsOutlined';
import UserAddIcon from '@material-ui/icons/PersonAddOutlined';

import styles from './FullPost.module.scss';

export const FullPost = () => {
  return (
      <Paper elevation={0} className={styles.paper}>
          <div className="container">
              <Typography variant="h4" className={styles.title}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt iure numquam odit officia voluptate voluptatem voluptatibus? Aliquid, dolorem impedit iusto labore perspiciatis quasi reiciendis repellat reprehenderit saepe tenetur ut.
              </Typography>
              <div>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt iure numquam odit officia voluptate voluptatem voluptatibus? Aliquid, dolorem impedit iusto labore perspiciatis quasi reiciendis repellat reprehenderit saepe tenetur ut.
                  </Typography>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt iure numquam odit officia voluptate voluptatem voluptatibus? Aliquid, dolorem impedit iusto labore perspiciatis quasi reiciendis repellat reprehenderit saepe tenetur ut.
                  </Typography>
                  <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis incidunt iure numquam odit officia voluptate voluptatem voluptatibus? Aliquid, dolorem impedit iusto labore perspiciatis quasi reiciendis repellat reprehenderit saepe tenetur ut.
                  </Typography>
                  <div style={{width: 250, marginLeft: -14}}>
                      <PostActions />
                  </div>
                  <div className="d-flex justify-between align-center mt-30 md-30">
                      <div className={styles.userInfo}>
                          <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzu9XZtjP9cIqIlYdMgF1iDHFfzChH6wLKuQ&usqp=CAU"
                              alt="Avatar"
                          />
                          <b>Donnie Darko</b>
                          <span>+168</span>
                      </div>
                      <div>
                          <Button variant="contained" className="mr-15">
                              <MessageIcon />
                          </Button>
                          <Button variant="contained" className="mr-15">
                              <MessageIcon />
                          </Button>
                      </div>
                  </div>
              </div>
          </div>
      </Paper>
  )
};
