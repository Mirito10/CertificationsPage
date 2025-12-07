import { CertiSection } from "../components/CertiSection"
import { Footer } from "../components/Footer"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return <div className="min-h-screen bg-background overflow-x-hidden">
        
        {/* Theme Toggle */}

            <ThemeToggle />

        {/* BackGround */}

            <StarBackground />

        {/* Main */}

            <CertiSection />

        {/* Footer */}

            <Footer />

    </div>
}