import React from 'react';
import { Card, CardBody, Button, Input, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';

interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
}

const EducationSection: React.FC = () => {
  const [educations, setEducations] = React.useState<Education[]>([
    {
      id: 1,
      school: 'University of California, Berkeley',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      location: 'Berkeley, CA',
      startDate: '2014-09',
      endDate: '2018-05',
      current: false
    }
  ]);
  
  const [isAdding, setIsAdding] = React.useState(false);
  const [newEducation, setNewEducation] = React.useState<Education>({
    id: 0,
    school: '',
    degree: '',
    field: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false
  });
  
  const handleAddEducation = () => {
    const newId = Math.max(...educations.map(edu => edu.id), 0) + 1;
    setEducations([
      { ...newEducation, id: newId },
      ...educations
    ]);
    setNewEducation({
      id: 0,
      school: '',
      degree: '',
      field: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false
    });
    setIsAdding(false);
  };
  
  const handleRemoveEducation = (id: number) => {
    setEducations(educations.filter(edu => edu.id !== id));
  };
  
  const handleCurrentChange = (checked: boolean) => {
    setNewEducation({
      ...newEducation,
      current: checked,
      endDate: checked ? '' : newEducation.endDate
    });
  };

  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Education</h3>
          {!isAdding && (
            <Button 
              color="primary" 
              onPress={() => setIsAdding(true)}
              startContent={<Icon icon="lucide:plus" />}
            >
              Add Education
            </Button>
          )}
        </div>
        
        {isAdding && (
          <div className="border rounded-lg p-4 space-y-4">
            <h4 className="font-semibold">Add New Education</h4>
            
            <Input 
              label="School/University" 
              placeholder="School or university name"
              value={newEducation.school}
              onValueChange={(value) => setNewEducation({...newEducation, school: value})}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Degree" 
                placeholder="e.g., Bachelor of Science"
                value={newEducation.degree}
                onValueChange={(value) => setNewEducation({...newEducation, degree: value})}
              />
              <Input 
                label="Field of Study" 
                placeholder="e.g., Computer Science"
                value={newEducation.field}
                onValueChange={(value) => setNewEducation({...newEducation, field: value})}
              />
            </div>
            
            <Input 
              label="Location" 
              placeholder="City, State, Country"
              value={newEducation.location}
              onValueChange={(value) => setNewEducation({...newEducation, location: value})}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input 
                label="Start Date" 
                placeholder="YYYY-MM"
                type="month"
                value={newEducation.startDate}
                onChange={(e) => setNewEducation({...newEducation, startDate: e.target.value})}
              />
              <div className="flex flex-col">
                <Input 
                  label="End Date" 
                  placeholder="YYYY-MM"
                  type="month"
                  isDisabled={newEducation.current}
                  value={newEducation.endDate}
                  onChange={(e) => setNewEducation({...newEducation, endDate: e.target.value})}
                />
                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={newEducation.current}
                    onChange={(e) => handleCurrentChange(e.target.checked)}
                    className="rounded text-primary focus:ring-primary"
                  />
                  <span className="text-sm">I'm currently studying here</span>
                </label>
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <Button 
                variant="flat" 
                onPress={() => setIsAdding(false)}
              >
                Cancel
              </Button>
              <Button 
                color="primary" 
                onPress={handleAddEducation}
                isDisabled={!newEducation.school || !newEducation.degree || !newEducation.startDate}
              >
                Save
              </Button>
            </div>
          </div>
        )}
        
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div key={edu.id} className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">{edu.school}</h4>
                  <p className="text-default-600">{edu.degree} in {edu.field}</p>
                  <p className="text-sm text-default-500">
                    {edu.location} • {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {
                      edu.current 
                        ? 'Present' 
                        : new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                    }
                  </p>
                </div>
                <Button 
                  isIconOnly 
                  variant="light" 
                  color="danger" 
                  onPress={() => handleRemoveEducation(edu.id)}
                >
                  <Icon icon="lucide:trash-2" />
                </Button>
              </div>
              {index < educations.length - 1 && <Divider className="mt-4" />}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationSection;