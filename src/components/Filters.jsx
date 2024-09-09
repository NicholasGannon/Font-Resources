import Button from "./Button"

export default function Filters() {
    return (
        <section className="flex justify-center gap-4 my-10 font-Inter">
            <Button buttonText="All" />
            <Button buttonText="Fonts" />
            <Button buttonText="Foundries" />
            <Button buttonText="Learning" />
        </section>
    )
}