import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Box
} from '@mantine/core';
import classes from './LoginPage.module.css'

export default function LoginPage() {
  return (
    <Box className={classes.bg}>
      <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome!
      </Title>

      <Text className={classes.subtitle}>
        This is private IoT dashboard project.
      </Text>

      <Paper withBorder shadow="lg" p={22} mt={30} radius="lg">
        <TextInput variant='filled' label="Username" placeholder="Enter username" required  />
        <PasswordInput  variant='filled' label="Password" placeholder="Enter password" required mt="md" />
        <Button fullWidth mt="xl" >
          Sign in
        </Button>
      </Paper>
    </Container>
    </Box>
  );
}
