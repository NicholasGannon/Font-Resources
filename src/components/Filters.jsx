import Button from "./Button";

export default function Filters({ selectedFilter, setSelectedFilter }) {
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <section className="flex justify-center gap-4 my-10 font-Inter">
            <Button buttonText="All" onClick={() => handleFilterChange('All')} />
            <Button buttonText="Fonts" onClick={() => handleFilterChange('Fonts')} />
            <Button buttonText="Foundries" onClick={() => handleFilterChange('Foundries')} />
            <Button buttonText="Learning" onClick={() => handleFilterChange('Learning')} />
        </section>
    );
}
