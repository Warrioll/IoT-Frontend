import SwitchesSection from './components/SwitchesSection';

import { Box, Button, Flex, Title, Divider } from '@mantine/core';
import { putSwitchMode } from '@/api/switch';


export default function DashboardPage() {
  return (
    <Box w='100%' h='100%' bg='var(--mantine-color-gray-1)'>
    <Flex w='100vw' p='lg' ta='center' my='lg' justify='center'>
      <Title>Welcome to your dashboard!</Title>
    </Flex>

      <SwitchesSection/>
      <Divider  my='lg' mx='5rem' size="sm"  />
    </Box>
  );
}
