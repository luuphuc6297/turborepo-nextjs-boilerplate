import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/material/styles'

interface SubmitButtonProps {
    children: React.ReactNode
    [x: string]: any
}
const StyledButton = styled(LoadingButton)(({ theme }) => ({
    fontFamily: 'Linik Sans Bold',
    textTransform: 'initial',
    fontSize: 16,
    borderRadius: 4,
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        width: 320,
        fontSize: 14,
    },
    [theme.breakpoints.down(480)]: {
        width: 280,
        fontSize: 12,
    },
    '&:disabled': {
        backgroundColor: theme.palette.primary.main,
        opacity: 0.7,
    },
}))

export const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
    return (
        <StyledButton color="primary" variant="contained" type="submit" {...props}>
            {children}
        </StyledButton>
    )
}
