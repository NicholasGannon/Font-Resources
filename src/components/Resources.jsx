import Card from "./Card"
import GoogleFonts from "../assets/GoogleFonts.png"
import AdobeFonts from "../assets/AdobeFonts.png"
import FontShare from "../assets/FontShare.png"
import Monotype from "../assets/Monotype.png"
import Uncut from "../assets/Uncut.png"

export default function Resources() {
    return (
        <section className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card 
                image={GoogleFonts}
                altDescription="Google Fonts"
            />
            <Card 
                image={AdobeFonts}
                altDescription="Adobe Fonts"
            />
            <Card 
                image={FontShare}
                altDescription="FontShare"
            />
            <Card 
                image={Monotype}
                altDescription="Monotype"
            />
            <Card 
                image={Uncut}
                altDescription="Uncut"
            />
        </section>
    )
}