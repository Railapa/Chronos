import { Container } from "../../components/Container/Container"
import { Logo } from "../../components/Logo/Logo"
import { Menu } from "../../components/Menu/Menu"
import { Footer } from "../../components/Footer/Footer"

type MainTemplateProps = {
    children: React.ReactNode
}

export const MainTemplate = ({ children }: MainTemplateProps) => {

    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    )
} 