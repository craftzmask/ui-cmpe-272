import React from 'react';
import { Card, CardBody, Button, Input, Textarea, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = React.useState<Experience[]>([
    {
      id: 1,
      company: 'Tech Innovations Inc.',
      position: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      startDate: '2020-06',
      endDate: '',
      current: true,
      description: 'Led the development of a React-based dashboard application for enterprise clients. Implemented state management using Redux and optimized performance. Mentored junior developers and conducted code reviews.'
    },
    {
      id: 2,
      company: 'Digital Solutions LLC',
      position: 'Software Developer',
      location: 'Austin, TX',
      startDate: '2018-03',
      endDate: '2020-05',
      current: false,
      description: 'Developed and maintained multiple web applications using React, Node.js, and MongoDB. Collaborated with UX designers to implement responsive interfaces. Participated in Agile development processes.'
    }
  ]);
  
  const [isAdding, setIsAdding] = React.useState(false);
  const [newExperience, setNewExperience] = React.useState<Experience>({
    id: 0,
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  });
  
  const handleAddExperience = () => {
    const newId = Math.max(...experiences.map(exp => exp.id), 0) + 1;
    setExperiences([
      { ...newExperience, id: newId },
      ...experiences
    ]);
    setNewExperience({
      id: 0,
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    });
    setIsAdding(false);
  };
  
  const handleRemoveExperience = (id: number) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };
  
  const handleCurrentChange = (checked: boolean) => {
    setNewExperience({
      ...newExperience,
      current: checked,
      endDate: checked ? '' : newExperience.endDate
    });
  };

  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Work Experience</h3>
          {!isAdding && (
            <Button 
              color="primary" 
              onPress={() => setIsAdding(true)}
              startContent={<Icon icon="lucide:plus" />}
            >
              Add Experience
            </Button>
          )}
        </div>
        
        {isAdding && (
          <div className="border rounded-lg p-4 space-y-4">
            <h4 className="font-semibold">Add New Experience</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Company" 
                placeholder="Company name"
                value={newExperience.company}
                onValueChange={(value) => setNewExperience({...newExperience, company: value})}
              />
              <Input 
                label="Position" 
                placeholder="Your job title"
                value={newExperience.position}
                onValueChange={(value) => setNewExperience({...newExperience, position: value})}
              />
            </div>
            
            <Input 
              label="Location" 
              placeholder="City, State, Country"
              value={newExperience.location}
              onValueChange={(value) => setNewExperience({...newExperience, location: value})}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Start Date" 
                placeholder="YYYY-MM"
                type="month"
                value={newExperience.startDate}
                onChange={(e) => setNewExperience({...newExperience, startDate: e.target.value})}
              />
              <div className="flex flex-col">
                <Input 
                  label="End Date" 
                  placeholder="YYYY-MM"
                  type="month"
                  isDisabled={newExperience.current}
                  value={newExperience.endDate}
                  onChange={(e) => setNewExperience({...newExperience, endDate: e.target.value})}
                />
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={newExperience.current}
                    onChange={(e) => handleCurrentChange(e.target.checked)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span className="text-sm">I currently work here</span>
                </label>
              </div>
            </div>
            
            <Textarea 
              label="Description" 
              placeholder="Describe your responsibilities and achievements"
              value={newExperience.description}
              onValueChange={(value) => setNewExperience({...newExperience, description: value})}
              minRows={3}
            />
            
            <div className="flex justify-end gap-2">
              <Button 
                variant="flat" 
                onPress={() => setIsAdding(false)}
              >
                Cancel
              </Button>
              <Button 
                color="primary" 
                onPress={handleAddExperience}
                isDisabled={!newExperience.company || !newExperience.position || !newExperience.startDate}
              >
                Save
              </Button>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="space-y-4">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-default-600">{exp.company} • {exp.location}</p>
                  <p className="text-sm text-default-500">
                    {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {
                      exp.current 
                        ? 'Present' 
                        : new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                    }
                  </p>
                </div>
                <Button 
                  isIconOnly 
                  variant="light" 
                  color="danger" 
                  onPress={() => handleRemoveExperience(exp.id)}
                >
                  <Icon icon="lucide:trash-2" />
                </Button>
              </div>
              <p className="text-default-600">{exp.description}</p>
              {index < experiences.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default ExperienceSection;