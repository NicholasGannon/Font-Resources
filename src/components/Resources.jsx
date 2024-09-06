import Card from "./Card"
import GoogleFonts from "../assets/GoogleFonts.png"
import AdobeFonts from "../assets/AdobeFonts.png"
import FontShare from "../assets/FontShare.png"
import Monotype from "../assets/Monotype.png"
import Uncut from "../assets/Uncut.png"
import MyFonts from "../assets/MyFonts.png"
import TypeNetwork from "../assets/TypeNetwork.png"
import AtipoFoundry from "../assets/AtipoFoundry.png"
import PangramPangram from "../assets/PangramPangram.png"
import Hoefler from "../assets/Hoefler&Co..png"
import twoOFiveTF from "../assets/205TF.png"
import AtwoType from "../assets/A2Type.png"
import AvondaleTypeCo from "../assets/AvondaleTypeCo..png"
import iframeTypeFoundry from "../assets/iframeTypeFoundry.png"
import Typewolf from "../assets/Typewolf.png"
import ProWebType from "../assets/ProWebType.png"
import TypoGuide from "../assets/TypoGuide.png"
import FontsInUse from "../assets/FontsInUse.png"

export default function Resources() {
    return (
        <section className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <Card imageLink="https://fonts.google.com/" image={GoogleFonts} altDescription="Google Fonts" />
            <Card imageLink="https://fonts.adobe.com/" image={AdobeFonts} altDescription="Adobe Fonts" />
            <Card imageLink="https://www.fontshare.com/" image={FontShare} altDescription="FontShare" />
            <Card imageLink="https://www.monotype.com/" image={Monotype} altDescription="Monotype" />
            <Card imageLink="https://uncut.wtf/" image={Uncut} altDescription="Uncut" />
            <Card imageLink="https://www.myfonts.com/" image={MyFonts} altDescription="My Fonts" />
            <Card imageLink="https://typenetwork.com/" image={TypeNetwork} altDescription="Type Network" />
            <Card imageLink="https://www.atipofoundry.com/" image={AtipoFoundry} altDescription="Atipo Foundry" />
            <Card imageLink="https://pangrampangram.com/" image={PangramPangram} altDescription="Pangram Pangram Foundry" />
            <Card imageLink="https://typography.com/" image={Hoefler} altDescription="Hoefler & Co." />
            <Card imageLink="https://www.205.tf/" image={twoOFiveTF} altDescription="205TF" />
            <Card imageLink="https://a2-type.co.uk/" image={AtwoType} altDescription="A2 Type" />
            <Card imageLink="https://avondaletypeco.com/" image={AvondaleTypeCo} altDescription="Avondale Type Co." />
            <Card imageLink="https://iframefonts.com/" image={iframeTypeFoundry} altDescription="iframe Type Foundry" />
            <Card imageLink="https://www.typewolf.com/" image={Typewolf} altDescription="Type Wolf" />
            <Card imageLink="https://prowebtype.com/" image={ProWebType} altDescription="Pro Web Type" />
            <Card imageLink="http://www.typogui.de/" image={TypoGuide} altDescription="TypOGuide" />
            <Card imageLink="https://fontsinuse.com/" image={FontsInUse} altDescription="Fonts In Use" />
        </section>
    )
}