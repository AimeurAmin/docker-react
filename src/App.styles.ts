import { Stack, styled } from "@mui/material";

export const AppContainer = styled(Stack)({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

export const CounterContainer = styled(Stack)({
    flexDirection: 'column',
    justifyContent: 'center',
    '& .MuiTypography-root': {
        textAlign: 'center'
    }
})