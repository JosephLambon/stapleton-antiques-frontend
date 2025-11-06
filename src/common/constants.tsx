export const CONSTANTS = {
    COMPANY_NAME: "Stapleton Antiques",
    FADE_TIMEOUT: 650,
    
    MOBILE: {
        GALLERY_COLUMNS: 2,
        GALLERY_GAP: 3,
        SCREEN_THRESHOLD: 0.6,
        SKELETON_COUNT: 8
    },
    LARGER_SCREENS: {
        GALLERY_COLUMNS: 3,
        GALLERY_GAP: 16,
        SCREEN_THRESHOLD: 0.2,
        SKELETON_COUNT: 9
    }
} as const;

export default CONSTANTS;