import React from 'react';
import { Card, CardBody, Input, Button, Link, Checkbox, Divider } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [isVisible, setIsVisible] = React.useState(false);
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log({ name, email, password, agreedToTerms });
  };

  return (
    <Card className="border-none shadow-none">
      <CardBody className="gap-4">
        <div className="flex justify-center md:hidden mb-4">
          <Link as={RouterLink} to="/" className="flex items-center gap-2 text-primary font-bold text-2xl">
            <Icon icon="lucide:briefcase" width={32} height={32} />
            JobMatcher
          </Link>
        </div>
        
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Create an Account</h1>
          <p className="text-default-500">Join JobMatcher to find your dream job</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onValueChange={setName}
            startContent={<Icon icon="lucide:user" className="text-default-400" />}
            isRequired
          />
          
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onValueChange={setEmail}
            startContent={<Icon icon="lucide:mail" className="text-default-400" />}
            isRequired
          />
          
          <Input
            label="Password"
            placeholder="Enter your password"
            value={password}
            onValueChange={setPassword}
            startContent={<Icon icon="lucide:lock" className="text-default-400" />}
            endContent={
              <button type="button" onClick={toggleVisibility} className="focus:outline-none">
                {isVisible ? (
                  <Icon icon="lucide:eye-off" className="text-default-400" />
                ) : (
                  <Icon icon="lucide:eye" className="text-default-400" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            isRequired
          />
          
          <Checkbox 
            isSelected={agreedToTerms}
            onValueChange={setAgreedToTerms}
          >
            I agree to the <Link href="#" size="sm">Terms of Service</Link> and <Link href="#" size="sm">Privacy Policy</Link>
          </Checkbox>
          
          <Button 
            type="submit" 
            color="primary" 
            fullWidth
            isDisabled={!agreedToTerms}
          >
            Create Account
          </Button>
        </form>
        
        <div className="flex items-center gap-4 my-4">
          <Divider className="flex-1" />
          <p className="text-default-500 text-sm">OR CONTINUE WITH</p>
          <Divider className="flex-1" />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="bordered" 
            startContent={<Icon icon="logos:google-icon" />}
            fullWidth
          >
            Google
          </Button>
          <Button 
            variant="bordered" 
            startContent={<Icon icon="logos:linkedin-icon" />}
            fullWidth
          >
            LinkedIn
          </Button>
        </div>
        
        <p className="text-center text-default-500 mt-4">
          Already have an account? <Link as={RouterLink} to="/sign-in">Sign In</Link>
        </p>
      </CardBody>
    </Card>
  );
};

export default SignUpPage;