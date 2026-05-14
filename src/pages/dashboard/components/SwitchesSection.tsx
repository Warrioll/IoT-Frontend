import {  SimpleGrid, Flex, Button } from '@mantine/core';
import CardWithSwitch from './CardWithSwitch';
import CustomCard from './CustomCard';
import { useState, useEffect } from 'react';
import { putSwitchMode } from '@/api/switch';



export default function SwitchesSection() {

const switch1 = useState<boolean| undefined>(undefined);
const switch2 = useState<boolean| undefined>(undefined);


useEffect(()=>{

  if(switch1[0]!==undefined){
    putSwitchMode(1, switch1[0] ? 'ON' : 'OFF');
  }

},[switch1[0]])


useEffect(()=>{  
  if(switch2[0]!==undefined){
    putSwitchMode(2, switch2[0] ? 'ON' : 'OFF');
  }

},[switch2[0]])
 

  return <Flex justify='center'><SimpleGrid m='xl' maw='80rem'w='100%' cols={{ base: 1, sm: 3 }}>
    <CardWithSwitch title='led 1' checkedState={switch1}/>
    <CardWithSwitch  title='led 1' checkedState={switch2}/>
    <CustomCard title='ESP connection' label='Chceck connection with device' >  <Flex w='100%' h='5rem' align='center' justify='center' px='xl'py='sm'><Button>Check connection</Button></Flex></CustomCard>
    </SimpleGrid></Flex>;
}