import React from 'react';
import { Card, CardBody, Input, Button, Chip } from '@heroui/react';
import { Icon } from '@iconify/react';

const SkillsSection: React.FC = () => {
  const [newSkill, setNewSkill] = React.useState('');
  const [skills, setSkills] = React.useState([
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'JavaScript', level: 'Expert' },
    { id: 3, name: 'TypeScript', level: 'Advanced' },
    { id: 4, name: 'Node.js', level: 'Intermediate' },
    { id: 5, name: 'GraphQL', level: 'Intermediate' },
    { id: 6, name: 'AWS', level: 'Intermediate' },
    { id: 7, name: 'Docker', level: 'Beginner' },
    { id: 8, name: 'CI/CD', level: 'Intermediate' }
  ]);
  
  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    
    const newId = Math.max(...skills.map(s => s.id), 0) + 1;
    setSkills([...skills, { id: newId, name: newSkill, level: 'Intermediate' }]);
    setNewSkill('');
  };
  
  const handleRemoveSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };
  
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'success';
      case 'Advanced': return 'primary';
      case 'Intermediate': return 'warning';
      case 'Beginner': return 'default';
      default: return 'default';
    }
  };

  return (
    <Card>
      <CardBody className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end gap-4">
          <div className="flex-1">
            <Input
              label="Add Skill"
              placeholder="e.g., React, Python, Project Management"
              value={newSkill}
              onValueChange={setNewSkill}
              onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
            />
          </div>
          <Button 
            color="primary" 
            onPress={handleAddSkill}
            isDisabled={!newSkill.trim()}
          >
            Add Skill
          </Button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Your Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Chip
                key={skill.id}
                onClose={() => handleRemoveSkill(skill.id)}
                variant="flat"
                color={getLevelColor(skill.level) as any}
                classNames={{
                  base: "py-2 px-3",
                  content: "text-sm font-medium"
                }}
              >
                {skill.name}
                <span className="ml-2 text-xs opacity-70">{skill.level}</span>
              </Chip>
            ))}
          </div>
        </div>
        
        <div className="bg-content2 p-4 rounded-lg">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Icon icon="lucide:lightbulb" className="text-warning" />
            <span>Skills Tip</span>
          </h4>
          <p className="text-sm">
            Include a mix of technical skills (programming languages, tools) and soft skills (communication, leadership) relevant to your target roles. Regularly update your skills to reflect your current expertise level.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default SkillsSection;