import Card from "./Card";
import GoogleFonts from "../assets/GoogleFonts.png";
import AdobeFonts from "../assets/AdobeFonts.png";
import FontShare from "../assets/FontShare.png";
import Monotype from "../assets/Monotype.png";
import Uncut from "../assets/Uncut.png";
import MyFonts from "../assets/MyFonts.png";
import TypeNetwork from "../assets/TypeNetwork.png";
import AtipoFoundry from "../assets/AtipoFoundry.png";
import PangramPangram from "../assets/PangramPangram.png";
import Hoefler from "../assets/Hoefler&Co..png";
import twoOFiveTF from "../assets/205TF.png";
import AtwoType from "../assets/A2Type.png";
import AvondaleTypeCo from "../assets/AvondaleTypeCo..png";
import Lineto from "../assets/Lineto.png";
import iframeTypeFoundry from "../assets/iframeTypeFoundry.png";
import Typewolf from "../assets/Typewolf.png";
import ProWebType from "../assets/ProWebType.png";
import TypoGuide from "../assets/TypoGuide.png";
import FontsInUse from "../assets/FontsInUse.png";
import Sociotype from "../assets/Sociotype.png";
import GoodType from "../assets/GoodTypeFoundry.png";
import GrilliType from "../assets/GrilliType.png";
import FluxAcademy from "../assets/FluxAcademy.png";

const resourcesData = [
    { imageLink: "https://fonts.google.com/", image: GoogleFonts, altDescription: "Google Fonts", category: "Fonts" },
    { imageLink: "https://fonts.adobe.com/", image: AdobeFonts, altDescription: "Adobe Fonts", category: "Fonts" },
    { imageLink: "https://www.fontshare.com/", image: FontShare, altDescription: "FontShare", category: "Fonts"},
    { imageLink: "https://www.monotype.com/", image: Monotype, altDescription: "Monotype", category: "Fonts"},
    { imageLink: "https://uncut.wtf/", image: Uncut, altDescription: "Uncut", category: "Fonts"},
    { imageLink: "https://www.myfonts.com/", image: MyFonts, altDescription: "Myfonts", category: "Fonts"},
    { imageLink: "https://typenetwork.com/", image: TypeNetwork, altDescription: "Typenetwork", category: "Fonts"},
    { imageLink: "https://www.atipofoundry.com/", image: AtipoFoundry, altDescription: "atipofoundry", category: "Foundries"},
    { imageLink: "https://pangrampangram.com/", image: PangramPangram, altDescription: "pangrampangram", category: "Foundries"},
    { imageLink: "https://typography.com/", image: Hoefler, altDescription: "Hoefler", category: "Foundries"},
    { imageLink: "https://www.205.tf/", image: twoOFiveTF, altDescription: "205TF", category: "Foundries"},
    { imageLink: "https://a2-type.co.uk/", image: AtwoType, altDescription: "A2type", category: "Foundries"},
    { imageLink: "https://avondaletypeco.com/", image: AvondaleTypeCo, altDescription: "Avondale", category: "Foundries"},
    { imageLink: "https://lineto.com/", image: Lineto, altDescription: "Lineto", category: "Foundries"},
    { imageLink: "https://iframefonts.com/", image: iframeTypeFoundry, altDescription: "Iframefonts", category: "Foundries"},
    { imageLink: "https://socio-type.com/", image: Sociotype, altDescription: "Socio-Type", category: "Foundries"},
    { imageLink: "https://goodtypefoundry.com/", image: GoodType, altDescription: "Good Type Foundry", category: "Foundries"},
    { imageLink: "https://www.grillitype.com/", image: GrilliType, altDescription: "GrilliType", category: "Foundries"},
    { imageLink: "https://www.typewolf.com/", image: Typewolf, altDescription: "Typewolf", category: "Learning"},
    { imageLink: "https://prowebtype.com/", image: ProWebType, altDescription: "Prowebtype", category: "Learning"},
    { imageLink: "http://www.typogui.de/", image: TypoGuide, altDescription: "Typoguide", category: "Learning"},
    { imageLink: "https://fontsinuse.com/", image: FontsInUse, altDescription: "Fontsinuse", category: "Learning"},
    { imageLink: "https://www.flux-academy.com/blog/the-ultimate-guide-to-choosing-fonts", image: FluxAcademy, altDescription: "FluxAcademy", category: "Learning"},
];

export default function Resources({ selectedFilter }) {
    const filteredResources = resourcesData.filter(resource => 
        selectedFilter === 'All' || resource.category === selectedFilter
    );

    return (
        <section className="flex flex-col items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredResources.map((resource, index) => (
                <Card 
                    key={index} 
                    imageLink={resource.imageLink} 
                    image={resource.image} 
                    altDescription={resource.altDescription} 
                />
            ))}
        </section>
    );
}
