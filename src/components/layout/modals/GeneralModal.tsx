import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Modal({open, handleClose, CancelButton, AcceptButton, children }: any) {

    const styles = {
        '& .MuiPaper-root': {
            maxWidth: '900px'
        },
    }

    return (
        <div>
            <Dialog open={open} onClose={handleClose} sx={styles}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}