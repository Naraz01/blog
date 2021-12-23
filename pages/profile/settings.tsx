import { Button, Divider, Paper, TextField, Typography } from '@material-ui/core';
import {MainLayout} from '../../layouts/MainLayout';

export default function Settings() {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6">
                    Основные настройки
                </Typography>
                <Divider className="mt-20 md-30" />
                <form>
                    <TextField
                        className="md-20"
                        size="small"
                        label="Никнейм"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        className="mb-20"
                        size="small"
                        label="Эл. почта"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <TextField
                        size="small"
                        label="Пароль"
                        variant="outlined"
                        fullWidth
                        required
                    />
                    <Divider className="mt-30 md-20"/>
                    <Button color="primary" variant="contained">
                        Сохранить  изменения
                    </Button>
                </form>
            </Paper>
        </MainLayout>
    )
}
