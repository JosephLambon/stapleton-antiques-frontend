import { Box } from '@mui/material'

export function AntiqueGalleryError() {
    return(
        <Box sx={{
            textAlign: 'center',
            width: '90vw',
            height: '60vh',
            my: '5vh'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                }}>
                <svg style={{ flexShrink: 0 }} xmlns="http://www.w3.org/2000/svg" color='rgba(255, 0, 0, 0.8)' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                <p style={{ margin: 0 }}>Unable to reach the server.</p>
            </Box>
            <p>Please check your connection and try again.</p>
        </Box>
    );
}