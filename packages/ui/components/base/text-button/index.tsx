import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

interface TextButtonProps {
    children: React.ReactNode
    [x: string]: any
}

const StyledTextButton = styled(Button)(({ theme }) => ({
    fontSize: 16,
    lineHeight: '24px',
    fontFamily: 'Linik Sans Semi Bold',
    textTransform: 'capitalize',
}))

export const TextButton = ({ children, ...props }: TextButtonProps) => {
    return (
        <StyledTextButton variant="text" {...props} color="primary">
            {children}
        </StyledTextButton>
    )
}
