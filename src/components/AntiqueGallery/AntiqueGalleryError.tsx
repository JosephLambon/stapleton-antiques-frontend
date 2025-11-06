import { Box } from '@mui/material'
import { AntiqueGalleryErrorWrapper, ErrorMessageWrapper, ErrorMessage } from './AntiqueGalleryError.styling'

export function AntiqueGalleryError() {
    return(
        <AntiqueGalleryErrorWrapper>
            <ErrorMessageWrapper>
                <ErrorMessage>
                        <svg  xmlns="http://www.w3.org/2000/svg" color='rgba(255, 0, 0, 0.8)' width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                        <p >Unable to reach the server.</p>
                </ErrorMessage>
                <p>Please check your connection and try again.</p>
            </ErrorMessageWrapper>
        </AntiqueGalleryErrorWrapper>
    );
}