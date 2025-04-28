import React from 'react';
import { Card, CardBody, CardHeader, Input, Button, Textarea, Divider, Avatar, Chip, Tabs, Tab } from '@heroui/react';
import { Icon } from '@iconify/react';
import SkillsSection from '../../components/profile/skills-section';
import ExperienceSection from '../../components/profile/experience-section';
import EducationSection from '../../components/profile/education-section';

const UserProfilePage: React.FC = () => {
  const [selected, setSelected] = React.useState("basic");
  
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Profile</h1>
          <Button 
            color="primary"
            startContent={<Icon icon="lucide:save" />}
          >
            Save Changes
          </Button>
        </div>
        
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col items-center gap-2">
                <Avatar 
                  src="https://img.heroui.chat/image/avatar?w=200&h=200&u=1" 
                  className="w-24 h-24"
                />
                <Button size="sm" variant="flat">
                  Change Photo
                </Button>
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Full Name" 
                    placeholder="Enter your full name"
                    defaultValue="John Doe"
                  />
                  <Input 
                    label="Job Title" 
                    placeholder="Enter your job title"
                    defaultValue="Senior Software Engineer"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="Email" 
                    placeholder="Enter your email"
                    defaultValue="john.doe@example.com"
                    type="email"
                  />
                  <Input 
                    label="Phone" 
                    placeholder="Enter your phone number"
                    defaultValue="(555) 123-4567"
                  />
                </div>
                <Input 
                  label="Location" 
                  placeholder="City, State, Country"
                  defaultValue="San Francisco, CA, USA"
                />
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Tabs 
          aria-label="Profile sections" 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
          className="w-full"
        >
          <Tab key="basic" title="Basic Information">
            <Card>
              <CardBody className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Professional Summary</h3>
                  <Textarea 
                    placeholder="Write a brief professional summary"
                    defaultValue="Experienced software engineer with 8+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies. Passionate about building scalable and user-friendly applications."
                    minRows={4}
                  />
                </div>
                
                <Divider />
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Career Objectives</h3>
                  <Textarea 
                    placeholder="What are your career goals?"
                    defaultValue="Looking to advance into a technical leadership role where I can leverage my expertise in software architecture and team mentoring to drive innovation and deliver high-quality products."
                    minRows={3}
                  />
                </div>
                
                <Divider />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Job Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      label="Desired Role" 
                      placeholder="e.g., Senior Developer"
                      defaultValue="Lead Software Engineer"
                    />
                    <Input 
                      label="Desired Salary" 
                      placeholder="e.g., $100,000"
                      defaultValue="$150,000"
                    />
                    <Input 
                      label="Work Type" 
                      placeholder="e.g., Remote, Hybrid, On-site"
                      defaultValue="Remote or Hybrid"
                    />
                    <Input 
                      label="Availability" 
                      placeholder="e.g., Immediately, 2 weeks notice"
                      defaultValue="2 weeks notice"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="skills" title="Skills">
            <SkillsSection />
          </Tab>
          <Tab key="experience" title="Experience">
            <ExperienceSection />
          </Tab>
          <Tab key="education" title="Education">
            <EducationSection />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfilePage;