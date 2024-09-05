import Button from "./Button"

export default function Filters() {
    return (
        <section className="flex justify-center gap-4 my-10">
            <Button buttonText="All" />
            <Button buttonText="Fonts" />
            <Button buttonText="Foundries" />
            <Button buttonText="Learning" />
        </section>
    )
}