import Button from "../Button"

const AttributeButtons = () => {
    return (
        <div className="flex flex-col gap-y-[10px]
            md:px-[18px] lg:px-[24px] xl:px-[30px] 
            md:py-[12px] lg:py-[16px] xl:py-[20px]">
            <Button
                value='neckaceGolo'
                label="Acc."
            />
            <Button
                value='red'
                label="Eyes"
            />
            <Button
                value='horn'
                label="Hair"
            />
            <Button
                value='Brown'
                label="Color."
            />
            <Button
                value='YellowGeneric'
                label="Dutfit"
            />
            <Button
                value='Brown'
                label="Skin"
            />
            <Button
                value='MagicianM'
                label="Type"
            />
        </div>
    )
}

export default AttributeButtons