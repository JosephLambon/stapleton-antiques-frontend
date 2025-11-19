import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Popover } from "@mui/material";
import { useState } from "react";
import FilterListIcon from '@mui/icons-material/FilterList';

function Filter() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [selectedStatuses, setSelectedStatuses] = useState({
        available: true,
        sold: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        const selectionCount = Object.values(selectedStatuses).filter(s=>s===true).length;

        if(!checked && selectionCount === 1) {
            return;
        }
        
        setSelectedStatuses({
        ...selectedStatuses,
        [name]: checked,
        });
    };

    const { available, sold } = selectedStatuses;
    const error = [available, sold].filter((v) => v).length <= 1;


    return(
        <>
            <Button aria-describedby={id} size="small" color="secondary" variant="contained" onClick={handleClick}>
                <FilterListIcon sx={{ mr: 1 }} />
                Filter
            </Button>
            
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
                <FormControl error={error} sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Select status</FormLabel>
                    <FormGroup sx={{
                    padding:3,
                    color: 'black'
                }} >
                        <FormControlLabel color="primary"
                            control={
                            <Checkbox defaultChecked
                                checked={available}
                                onChange={handleChange}
                                name="available"
                             />
                            }
                            label="Available" />
                        <FormControlLabel 
                            control={
                            <Checkbox
                                checked={sold}
                                onChange={handleChange}
                                name="sold"
                                />
                            } label="Sold"
                            />
                    </FormGroup>
                </FormControl>
            </Popover>
        </>
    )
}

export default Filter;