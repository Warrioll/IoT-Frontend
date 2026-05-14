import { Dispatch,  SetStateAction } from "react"
import CustomCard from "./CustomCard"
import { Switch, Flex } from "@mantine/core"

type CardWithSwitchProps = {
    title: string
   // onChange?: ()=>void
    checkedState: [boolean| undefined,  Dispatch<SetStateAction<boolean | undefined>>]
}

export default function CardWithSwitch({title,  checkedState}:CardWithSwitchProps){
    const [checked, setChecked] = checkedState;

    return (<CustomCard  title={title}>
        <Flex w='100%' justify='center' p='xl'>
                        <Switch
              
              onLabel="ON" offLabel="OFF"
              size="xl"
               checked={checked}
            onChange={(event) => {setChecked(event.currentTarget.checked)}}
            /></Flex>

    </CustomCard>)
}