import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Text,
  Alert,
  AlertIcon,
  AlertDescription,
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthProvider';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, isLoading, initError, login } = useAuth();
  const navigate = useNavigate();

  // Redirect to /user if already authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/user', { replace: true });
    }
  }, [isAuthenticated, isLoading, navigate]);

  // Capture errors returned by Keycloak in the redirect URL (e.g. access_denied)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const errorParam = params.get('error');
    const errorDesc = params.get('error_description');
    if (errorParam) {
      const message = errorDesc
        ? decodeURIComponent(errorDesc.replace(/\+/g, ' '))
        : 'Login failed. Please try again.';
      setError(message);
    }
  }, []);

  useEffect(() => {
    if (initError) setError(initError);
  }, [initError]);

  const handleLogin = () => {
    if (!username.trim()) {
      setError('Please enter your username.');
      return;
    }
    setError(null);
    // Initiates the Authorization Code + PKCE flow.
    // The username is forwarded as login_hint so Keycloak can pre-fill it.
    // Authentication (password verification) is handled securely by Keycloak.
    login(username.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        bg="white"
        borderRadius="2xl"
        boxShadow="lg"
        p={{ base: 8, md: 12 }}
        w="full"
        maxW="420px"
        mx={4}
      >
        <VStack spacing={8} align="stretch">
          {/* Header */}
          <VStack spacing={1}>
            <Heading size="lg" fontWeight="700" color="gray.800" textAlign="center">
              Welcome back
            </Heading>
            <Text color="gray.500" fontSize="sm" textAlign="center">
              Sign in to your account
            </Text>
          </VStack>

          {/* Error alert */}
          {error && (
            <Alert status="error" borderRadius="lg" fontSize="sm">
              <AlertIcon />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Form */}
          <VStack spacing={5}>
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="500" color="gray.700" mb={1.5}>
                Username
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" h="full">
                  <EmailIcon color="gray.400" boxSize={4} />
                </InputLeftElement>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your username"
                  size="md"
                  focusBorderColor="blue.500"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'gray.300' }}
                  autoComplete="username"
                  autoFocus
                />
              </InputGroup>
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" fontWeight="500" color="gray.700" mb={1.5}>
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" h="full">
                  <LockIcon color="gray.400" boxSize={4} />
                </InputLeftElement>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your password"
                  size="md"
                  focusBorderColor="blue.500"
                  borderColor="gray.200"
                  _hover={{ borderColor: 'gray.300' }}
                  autoComplete="current-password"
                />
              </InputGroup>
            </FormControl>
          </VStack>

          <Divider borderColor="gray.100" />

          {/* Login button */}
          <Button
            colorScheme="blue"
            size="lg"
            w="full"
            onClick={handleLogin}
            isLoading={isLoading}
            loadingText="Signing in..."
            fontWeight="600"
            borderRadius="lg"
            _hover={{ transform: 'translateY(-1px)', boxShadow: 'md' }}
            transition="all 0.15s"
          >
            Sign In
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default LoginPage;
