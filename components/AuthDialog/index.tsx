import React from 'react';
import {Button, Dialog, DialogContent, DialogContentText, Divider, TextField, Typography} from "@material-ui/core";
import styles from './AuthDialog.module.scss';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { MainForm } from './forms/Main';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface AuthDialogProps {
    onClose?: () => void,
    visible: boolean
}

export const AuthDialog: React.FC<AuthDialogProps> = ({onClose, visible}) => {
    const [fromType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');
    return (
      <Dialog
          open={visible}
          onClose={onClose}
          maxWidth="xs"
          fullWidth
      >
          <DialogContent>
              <DialogContentText>
                  <div className={styles.content}>
                      <Typography className={styles.title}>
                          {fromType === 'main' ?
                              'Вход в TJ'
                              :
                              (
                                  <p onClick={() => setFormType('main')} className={styles.backTitle}>
                                    <ArrowBackIcon /> Войти через почту
                                  </p>
                              )
                          }
                      </Typography>
                      {
                          fromType === 'main' && <MainForm onOpenLogin = {() => setFormType('login')} />
                      }
                      {
                          fromType === 'login' && <LoginForm onOpenRegister = {() => setFormType('register')} />
                      }

                      {
                          fromType === 'register' && <RegisterForm onOpenLogin = {() => setFormType('login')} />
                      }
                  </div>
              </DialogContentText>
          </DialogContent>
      </Dialog>
    )
};
