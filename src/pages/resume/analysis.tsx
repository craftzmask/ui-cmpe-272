import React from 'react';
import { Card, CardBody, CardHeader, Button, Progress, Chip, Divider, Tabs, Tab } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';

const ResumeAnalysisPage: React.FC = () => {
  const [selected, setSelected] = React.useState("overview");
  
  const overallScore = 78;
  const sections = [
    { name: "Format & Structure", score: 85 },
    { name: "Content Quality", score: 75 },
    { name: "Skills Relevance", score: 82 },
    { name: "ATS Compatibility", score: 68 },
    { name: "Grammar & Spelling", score: 92 }
  ];
  
  const getScoreColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "danger";
  };
  
  const suggestions = [
    {
      category: "Content",
      items: [
        "Add more quantifiable achievements to your work experience",
        "Include specific technologies and tools you've used in each role",
        "Expand on your leadership experience with concrete examples"
      ]
    },
    {
      category: "Format",
      items: [
        "Consider using a more modern resume template",
        "Improve section headings for better visual hierarchy",
        "Ensure consistent spacing between sections"
      ]
    },
    {
      category: "ATS Optimization",
      items: [
        "Add more industry-specific keywords from job descriptions",
        "Remove complex formatting that might confuse ATS systems",
        "Use standard section headings (e.g., 'Work Experience' instead of 'Professional Journey')"
      ]
    }
  ];
  
  const keywordMatches = [
    { keyword: "React", count: 5, recommended: 3 },
    { keyword: "JavaScript", count: 3, recommended: 4 },
    { keyword: "TypeScript", count: 1, recommended: 3 },
    { keyword: "Node.js", count: 2, recommended: 2 },
    { keyword: "API", count: 4, recommended: 2 },
    { keyword: "Agile", count: 0, recommended: 2 },
    { keyword: "Testing", count: 1, recommended: 3 }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resume Analysis</h1>
          <div className="flex gap-2">
            <Button 
              as={RouterLink} 
              to="/resume/upload" 
              variant="flat"
              startContent={<Icon icon="lucide:upload" />}
            >
              Upload New Resume
            </Button>
            <Button 
              color="primary"
              startContent={<Icon icon="lucide:download" />}
            >
              Download Report
            </Button>
          </div>
        </div>
        
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3 flex flex-col items-center justify-center">
                <div className="relative">
                  <svg className="w-36 h-36">
                    <circle
                      className="text-gray-200"
                      strokeWidth="10"
                      stroke="currentColor"
                      fill="transparent"
                      r="60"
                      cx="72"
                      cy="72"
                    />
                    <circle
                      className={`text-${getScoreColor(overallScore)}`}
                      strokeWidth="10"
                      strokeDasharray={60 * 2 * Math.PI}
                      strokeDashoffset={60 * 2 * Math.PI * (1 - overallScore / 100)}
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="transparent"
                      r="60"
                      cx="72"
                      cy="72"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold">{overallScore}%</span>
                  </div>
                </div>
                <p className="mt-2 text-default-600 font-medium">Overall Score</p>
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <h2 className="text-xl font-semibold">Resume Health</h2>
                {sections.map((section) => (
                  <div key={section.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{section.name}</span>
                      <span className="text-sm font-medium">{section.score}%</span>
                    </div>
                    <Progress 
                      value={section.score} 
                      color={getScoreColor(section.score) as any}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Tabs 
          aria-label="Resume analysis sections" 
          selectedKey={selected} 
          onSelectionChange={setSelected as any}
        >
          <Tab key="overview" title="Overview">
            <Card>
              <CardBody className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Key Findings</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-success-50">
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:check-circle" className="text-success" />
                          <span>Strengths</span>
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li>• Strong technical skills section</li>
                          <li>• Clear work history chronology</li>
                          <li>• Excellent grammar and spelling</li>
                        </ul>
                      </CardBody>
                    </Card>
                    
                    <Card className="bg-warning-50">
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:alert-triangle" className="text-warning" />
                          <span>Areas to Improve</span>
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li>• Lack of quantifiable achievements</li>
                          <li>• Missing relevant keywords</li>
                          <li>• Professional summary needs focus</li>
                        </ul>
                      </CardBody>
                    </Card>
                    
                    <Card className="bg-danger-50">
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:x-circle" className="text-danger" />
                          <span>Critical Issues</span>
                        </h4>
                        <ul className="text-sm space-y-2">
                          <li>• ATS compatibility issues</li>
                          <li>• Outdated skills section</li>
                          <li>• Contact information incomplete</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                
                <Divider />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Improvement Suggestions</h3>
                  <div className="space-y-4">
                    {suggestions.map((category) => (
                      <div key={category.category}>
                        <h4 className="font-medium mb-2">{category.category}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Icon icon="lucide:arrow-right" className="text-primary mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-4">
                  <Button 
                    color="primary"
                    startContent={<Icon icon="lucide:edit-3" />}
                  >
                    Apply AI Suggestions
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="keywords" title="Keyword Analysis">
            <Card>
              <CardBody className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Keyword Matches</h3>
                  <p className="text-default-500 mb-4">
                    Based on job descriptions for React Developer positions, here's how your resume matches up with commonly required keywords:
                  </p>
                  
                  <div className="space-y-4">
                    {keywordMatches.map((keyword) => (
                      <div key={keyword.keyword}>
                        <div className="flex justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{keyword.keyword}</span>
                            {keyword.count >= keyword.recommended ? (
                              <Chip size="sm" color="success" variant="flat">Good</Chip>
                            ) : keyword.count > 0 ? (
                              <Chip size="sm" color="warning" variant="flat">Improve</Chip>
                            ) : (
                              <Chip size="sm" color="danger" variant="flat">Missing</Chip>
                            )}
                          </div>
                          <span className="text-sm">
                            {keyword.count} / {keyword.recommended} recommended
                          </span>
                        </div>
                        <Progress 
                          value={(keyword.count / keyword.recommended) * 100} 
                          maxValue={100}
                          color={
                            keyword.count >= keyword.recommended 
                              ? "success" 
                              : keyword.count > 0 
                                ? "warning" 
                                : "danger"
                          }
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                <Divider />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Suggested Keywords to Add</h3>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="primary" variant="flat">React Hooks</Chip>
                    <Chip color="primary" variant="flat">Redux</Chip>
                    <Chip color="primary" variant="flat">Unit Testing</Chip>
                    <Chip color="primary" variant="flat">CI/CD</Chip>
                    <Chip color="primary" variant="flat">Agile</Chip>
                    <Chip color="primary" variant="flat">REST APIs</Chip>
                    <Chip color="primary" variant="flat">GraphQL</Chip>
                    <Chip color="primary" variant="flat">Responsive Design</Chip>
                    <Chip color="primary" variant="flat">Performance Optimization</Chip>
                  </div>
                </div>
                
                <div className="bg-content2 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Pro Tip</h4>
                  <p className="text-sm">
                    Tailor your resume for each job application by analyzing the specific job description and incorporating relevant keywords. This helps your resume pass through Applicant Tracking Systems (ATS) and increases your chances of getting an interview.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Tab>
          
          <Tab key="ats" title="ATS Compatibility">
            <Card>
              <CardBody className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">ATS Compatibility Score</h3>
                    <Chip 
                      color={getScoreColor(68) as any} 
                      variant="flat"
                    >
                      68%
                    </Chip>
                  </div>
                  
                  <p className="text-default-500 mb-4">
                    Your resume has some issues that might prevent it from being properly parsed by Applicant Tracking Systems. Here are the key issues and how to fix them:
                  </p>
                  
                  <div className="space-y-4">
                    <Card>
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:layout" className="text-danger" />
                          <span>Complex Formatting</span>
                        </h4>
                        <p className="text-sm mb-2">
                          Your resume uses tables and multi-column layouts that can confuse ATS systems.
                        </p>
                        <div className="bg-danger-50 p-2 rounded text-sm">
                          <strong>Fix:</strong> Use a simple, single-column layout with standard headings and bullet points.
                        </div>
                      </CardBody>
                    </Card>
                    
                    <Card>
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:type" className="text-danger" />
                          <span>Non-Standard Section Headings</span>
                        </h4>
                        <p className="text-sm mb-2">
                          You're using creative section titles like "Professional Journey" instead of standard "Work Experience".
                        </p>
                        <div className="bg-danger-50 p-2 rounded text-sm">
                          <strong>Fix:</strong> Use standard section headings: "Work Experience", "Education", "Skills", etc.
                        </div>
                      </CardBody>
                    </Card>
                    
                    <Card>
                      <CardBody className="p-4">
                        <h4 className="font-medium flex items-center gap-2 mb-2">
                          <Icon icon="lucide:image" className="text-warning" />
                          <span>Graphics and Images</span>
                        </h4>
                        <p className="text-sm mb-2">
                          Your resume contains graphics and a profile photo that ATS systems cannot read.
                        </p>
                        <div className="bg-warning-50 p-2 rounded text-sm">
                          <strong>Fix:</strong> Remove images, graphics, and icons. Use text-based alternatives.
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
                
                <Divider />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">ATS-Friendly Template</h3>
                  <p className="text-default-500 mb-4">
                    We can convert your resume to an ATS-friendly format while preserving your content. This will significantly improve your chances of getting past automated screening systems.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button 
                      color="primary"
                      startContent={<Icon icon="lucide:refresh-cw" />}
                    >
                      Convert to ATS-Friendly Format
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ResumeAnalysisPage;