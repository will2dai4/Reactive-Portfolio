export interface ColorScheme {
    bgColor: string;
    bgColor2: string;
    primaryColor: string;
    secondaryColor: string;
}

export const colorSchemes: Record<string, ColorScheme> = {
    racer: {
        bgColor: '#14213D',
        bgColor2: '#000000',
        primaryColor: '#E5E5E5',
        secondaryColor: '#FCA311'
    },
};