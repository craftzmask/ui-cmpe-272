import React from 'react';
import { Card, CardBody, CardHeader, Button, Chip, Progress, Tabs, Tab, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface CareerPath {
  id: number;
  title: string;
  description: string;
  matchScore: number;
  salaryRange: string;
  growthRate: string;
  requiredSkills: string[];
  recommendedSkills: string[];
  userSkills: string[];
  certifications: {
    name: string;
    provider: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    url: string;
  }[];
  courses: {
    name: string;
    provider: string;
    duration: string;
    url: string;
  }[];
  category: string;
  fitReasons: {
    title: string;
    description: string;
    icon: string;
  }[];
}

const CareerPathsPage: React.FC = () => {
  const [selected, setSelected] = React.useState("best-match");
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
  const [selectedLevel, setSelectedLevel] = React.useState("All Levels");
  
  const careerPaths: CareerPath[] = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build user interfaces and interactive web applications using modern frameworks and libraries.",
      matchScore: 92,
      salaryRange: "$80K - $140K",
      growthRate: "+24% in 5 years",
      requiredSkills: ["HTML", "CSS", "JavaScript", "React"],
      recommendedSkills: ["TypeScript", "Redux", "GraphQL", "Testing"],
      userSkills: ["HTML", "CSS", "JavaScript"],
      certifications: [
        {
          name: "Meta Frontend Developer Professional Certificate",
          provider: "Coursera",
          difficulty: "Intermediate",
          duration: "6 months",
          url: "#"
        },
        {
          name: "JavaScript Algorithms and Data Structures",
          provider: "freeCodeCamp",
          difficulty: "Intermediate",
          duration: "300 hours",
          url: "#"
        }
      ],
      courses: [
        {
          name: "Complete React Developer Course",
          provider: "Udemy",
          duration: "40 hours",
          url: "#"
        },
        {
          name: "Advanced CSS and Sass",
          provider: "Udemy",
          duration: "28 hours",
          url: "#"
        }
      ],
      category: "Web Development",
      fitReasons: [
        {
          title: "Strong Technical Foundation",
          description: "Your expertise in JavaScript and React aligns perfectly with the core skills needed for frontend development.",
          icon: "lucide:code"
        },
        {
          title: "Relevant Experience",
          description: "Your 8+ years in software engineering provides the depth of experience valued in this role.",
          icon: "lucide:briefcase"
        },
        {
          title: "Project Background",
          description: "Your experience building dashboard applications demonstrates the exact type of work you'd be doing.",
          icon: "lucide:layout-dashboard"
        }
      ]
    },
    {
      id: 2,
      title: "Data Analyst",
      description: "Analyze complex datasets to extract insights and help organizations make data-driven decisions.",
      matchScore: 85,
      salaryRange: "$70K - $120K",
      growthRate: "+18% in 5 years",
      requiredSkills: ["SQL", "Excel", "Data Visualization", "Statistics"],
      recommendedSkills: ["Python", "R", "Tableau", "Power BI"],
      userSkills: ["Excel", "Statistics"],
      certifications: [
        {
          name: "Google Data Analytics Professional Certificate",
          provider: "Coursera",
          difficulty: "Beginner",
          duration: "6 months",
          url: "#"
        },
        {
          name: "Microsoft Certified: Data Analyst Associate",
          provider: "Microsoft",
          difficulty: "Intermediate",
          duration: "Self-paced",
          url: "#"
        }
      ],
      courses: [
        {
          name: "Data Analysis with Python",
          provider: "DataCamp",
          duration: "20 hours",
          url: "#"
        },
        {
          name: "SQL for Data Analysis",
          provider: "Udacity",
          duration: "4 weeks",
          url: "#"
        }
      ],
      category: "Data Science",
      fitReasons: [
        {
          title: "Analytical Mindset",
          description: "Your background in software engineering has developed your analytical thinking skills, essential for data analysis.",
          icon: "lucide:brain"
        },
        {
          title: "Technical Adaptability",
          description: "Your proven ability to learn new technologies will help you quickly master data analysis tools.",
          icon: "lucide:settings"
        },
        {
          title: "Problem-Solving Skills",
          description: "Your experience solving complex technical challenges translates well to finding insights in data.",
          icon: "lucide:puzzle"
        }
      ]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      description: "Create intuitive and engaging user experiences for websites and applications.",
      matchScore: 78,
      salaryRange: "$75K - $130K",
      growthRate: "+15% in 5 years",
      requiredSkills: ["UI Design", "User Research", "Wireframing", "Prototyping"],
      recommendedSkills: ["Figma", "Adobe XD", "User Testing", "Accessibility"],
      userSkills: ["UI Design"],
      certifications: [
        {
          name: "Google UX Design Professional Certificate",
          provider: "Coursera",
          difficulty: "Beginner",
          duration: "6 months",
          url: "#"
        },
        {
          name: "Certified User Experience Professional",
          provider: "Nielsen Norman Group",
          difficulty: "Advanced",
          duration: "Self-paced",
          url: "#"
        }
      ],
      courses: [
        {
          name: "UI/UX Design Specialization",
          provider: "Coursera",
          duration: "3 months",
          url: "#"
        },
        {
          name: "Design Thinking",
          provider: "IDEO",
          duration: "5 weeks",
          url: "#"
        }
      ],
      category: "Design",
      fitReasons: [
        {
          title: "Frontend Experience",
          description: "Your experience with frontend development gives you technical insight that many designers lack.",
          icon: "lucide:layout"
        },
        {
          title: "User-Centered Thinking",
          description: "Your focus on building user-friendly applications shows you already prioritize the user experience.",
          icon: "lucide:users"
        },
        {
          title: "Technical-Design Bridge",
          description: "Your ability to understand both code and design makes you valuable for translating designs to implementation.",
          icon: "lucide:git-merge"
        }
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      description: "Bridge development and operations to improve deployment frequency and reliability.",
      matchScore: 72,
      salaryRange: "$90K - $160K",
      growthRate: "+22% in 5 years",
      requiredSkills: ["Linux", "CI/CD", "Cloud Services", "Containerization"],
      recommendedSkills: ["Docker", "Kubernetes", "Terraform", "AWS/Azure"],
      userSkills: ["Linux"],
      certifications: [
        {
          name: "AWS Certified DevOps Engineer",
          provider: "Amazon",
          difficulty: "Advanced",
          duration: "Self-paced",
          url: "#"
        },
        {
          name: "Certified Kubernetes Administrator",
          provider: "Cloud Native Computing Foundation",
          difficulty: "Advanced",
          duration: "Self-paced",
          url: "#"
        }
      ],
      courses: [
        {
          name: "DevOps with Docker and Kubernetes",
          provider: "edX",
          duration: "8 weeks",
          url: "#"
        },
        {
          name: "CI/CD Pipelines with Jenkins",
          provider: "Pluralsight",
          duration: "15 hours",
          url: "#"
        }
      ],
      category: "DevOps",
      fitReasons: [
        {
          title: "Technical Expertise",
          description: "Your experience with Linux and containerization gives you a strong foundation for DevOps.",
          icon: "lucide:code"
        },
        {
          title: "Cloud Services Knowledge",
          description: "Your familiarity with AWS and Azure provides valuable insights into cloud-based operations.",
          icon: "lucide:cloud"
        },
        {
          title: "Problem-Solving Skills",
          description: "Your experience with CI/CD pipelines helps you quickly identify and resolve issues.",
          icon: "lucide:puzzle"
        }
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      description: "Lead product development from conception to launch, balancing business goals with user needs.",
      matchScore: 68,
      salaryRange: "$85K - $150K",
      growthRate: "+10% in 5 years",
      requiredSkills: ["Product Strategy", "User Stories", "Market Research", "Roadmapping"],
      recommendedSkills: ["Agile Methodologies", "Data Analysis", "A/B Testing", "Stakeholder Management"],
      userSkills: ["Market Research"],
      certifications: [
        {
          name: "Professional Scrum Product Owner",
          provider: "Scrum.org",
          difficulty: "Intermediate",
          duration: "Self-paced",
          url: "#"
        },
        {
          name: "Certified Product Manager",
          provider: "Product School",
          difficulty: "Advanced",
          duration: "8 weeks",
          url: "#"
        }
      ],
      courses: [
        {
          name: "Product Management Fundamentals",
          provider: "Product School",
          duration: "8 weeks",
          url: "#"
        },
        {
          name: "Agile Product Management",
          provider: "Coursera",
          duration: "4 weeks",
          url: "#"
        }
      ],
      category: "Product",
      fitReasons: [
        {
          title: "Business Acumen",
          description: "Your experience in product management helps you understand the business perspective.",
          icon: "lucide:briefcase"
        },
        {
          title: "User-Centric Approach",
          description: "Your focus on user stories and market research ensures that your products meet user needs.",
          icon: "lucide:users"
        },
        {
          title: "Problem-Solving Skills",
          description: "Your experience with Agile methodologies helps you manage complex projects effectively.",
          icon: "lucide:puzzle"
        }
      ]
    }
  ];

  const categories = ["All Categories", "Web Development", "Data Science", "Design", "DevOps", "Product", "Marketing", "Mobile Development"];
  const levels = ["All Levels", "Entry Level", "Mid Level", "Senior Level"];

  const getScoreColor = (score: number) => {
    if (score >= 85) return "success";
    if (score >= 70) return "warning";
    return "danger";
  };

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === "Beginner") return "success";
    if (difficulty === "Intermediate") return "warning";
    return "danger";
  };

  const filteredPaths = careerPaths.filter(path => {
    const matchesCategory = selectedCategory === "All Categories" || path.category === selectedCategory;
    const matchesLevel = selectedLevel === "All Levels" || 
      (selectedLevel === "Entry Level" && path.matchScore >= 80) ||
      (selectedLevel === "Mid Level" && path.matchScore >= 70 && path.matchScore < 80) ||
      (selectedLevel === "Senior Level" && path.matchScore < 70);
    
    return matchesCategory && matchesLevel;
  });

  const sortedPaths = [...filteredPaths].sort((a, b) => {
    if (selected === "best-match") {
      return b.matchScore - a.matchScore;
    } else if (selected === "salary") {
      const aSalary = parseInt(a.salaryRange.split('$')[1].split('K')[0]);
      const bSalary = parseInt(b.salaryRange.split('$')[1].split('K')[0]);
      return bSalary - aSalary;
    } else {
      // Growth rate sorting
      const aGrowth = parseInt(a.growthRate.split('+')[1].split('%')[0]);
      const bGrowth = parseInt(b.growthRate.split('+')[1].split('%')[0]);
      return bGrowth - aGrowth;
    }
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Career Path Suggestions</h1>
          <div className="flex gap-2">
            <Button 
              as={Link}
              to="/profile"
              variant="flat"
              startContent={<Icon icon="lucide:user" />}
            >
              Update Skills
            </Button>
            <Button 
              color="primary"
              startContent={<Icon icon="lucide:compass" />}
            >
              Career Assessment
            </Button>
          </div>
        </div>
        
        {/* Filters */}
        <Card>
          <CardBody>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex gap-2">
                <Tabs 
                  aria-label="Career path sorting options" 
                  selectedKey={selected} 
                  onSelectionChange={setSelected as any}
                >
                  <Tab key="best-match" title="Best Match" />
                  <Tab key="salary" title="Highest Salary" />
                  <Tab key="growth" title="Fastest Growing" />
                </Tabs>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="bordered"
                      endContent={<Icon icon="lucide:chevron-down" size={16} />}
                    >
                      {selectedCategory}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Category filter"
                    onAction={(key) => setSelectedCategory(key as string)}
                    selectedKeys={[selectedCategory]}
                    selectionMode="single"
                  >
                    {categories.map((category) => (
                      <DropdownItem key={category}>{category}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
                
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="bordered"
                      endContent={<Icon icon="lucide:chevron-down" size={16} />}
                    >
                      {selectedLevel}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Level filter"
                    onAction={(key) => setSelectedLevel(key as string)}
                    selectedKeys={[selectedLevel]}
                    selectionMode="single"
                  >
                    {levels.map((level) => (
                      <DropdownItem key={level}>{level}</DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </CardBody>
        </Card>
        
        {/* Career Path Suggestions */}
        <div className="space-y-6">
          {sortedPaths.length > 0 ? (
            sortedPaths.map((path) => (
              <Card key={path.id} className="hover:border-primary transition-colors">
                <CardHeader className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{path.title}</h2>
                    <p className="text-default-500">{path.category}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1">
                      <span className={`font-bold text-${getScoreColor(path.matchScore)}`}>{path.matchScore}%</span>
                      <span className="text-sm text-default-500">match</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Chip size="sm" variant="flat" color="success">{path.growthRate}</Chip>
                      <Chip size="sm" variant="flat">{path.salaryRange}</Chip>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="gap-6">
                  <p className="text-default-600">{path.description}</p>
                  
                  {/* Why You're a Good Fit Section */}
                  <div>
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <Icon icon="lucide:check-circle" className="text-success" />
                      <span>Why You're a Good Fit</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      {path.fitReasons.map((reason, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Icon icon={reason.icon} className="text-primary" />
                            </div>
                            <h4 className="font-medium">{reason.title}</h4>
                          </div>
                          <p className="text-sm text-default-600">{reason.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div>
                    <h3 className="font-medium mb-3">Skills Assessment</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Skills Match</span>
                      <span className="text-sm text-default-500">
                        {path.userSkills.length} of {path.requiredSkills.length} required skills
                      </span>
                    </div>
                    <Progress 
                      value={(path.userSkills.length / path.requiredSkills.length) * 100} 
                      color={getScoreColor(path.matchScore) as any}
                      className="mb-3"
                    />
                    <div className="flex flex-wrap gap-2 mb-3">
                      {path.requiredSkills.map((skill) => (
                        <Chip 
                          key={skill} 
                          color={path.userSkills.includes(skill) ? "success" : "default"} 
                          variant="flat" 
                          size="sm"
                        >
                          {skill}
                          {path.userSkills.includes(skill) && (
                            <Icon icon="lucide:check" className="ml-1" size={12} />
                          )}
                        </Chip>
                      ))}
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-default-500 mb-2">Recommended additional skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {path.recommendedSkills.map((skill) => (
                          <Chip key={skill} color="primary" variant="flat" size="sm">{skill}</Chip>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications and Courses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium mb-3">Recommended Certifications</h3>
                      <div className="space-y-3">
                        {path.certifications.map((cert, index) => (
                          <div key={index} className="border rounded-lg p-3">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium text-sm">{cert.name}</h4>
                              <Chip size="sm" color={getDifficultyColor(cert.difficulty) as any} variant="flat">
                                {cert.difficulty}
                              </Chip>
                            </div>
                            <p className="text-xs text-default-500 mt-1">
                              {cert.provider} • {cert.duration}
                            </p>
                            <Button 
                              size="sm" 
                              variant="flat" 
                              color="primary" 
                              className="mt-2"
                              endContent={<Icon icon="lucide:external-link" size={14} />}
                              as="a"
                              href={cert.url}
                              target="_blank"
                            >
                              Learn More
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Recommended Courses</h3>
                      <div className="space-y-3">
                        {path.courses.map((course, index) => (
                          <div key={index} className="border rounded-lg p-3">
                            <h4 className="font-medium text-sm">{course.name}</h4>
                            <p className="text-xs text-default-500 mt-1">
                              {course.provider} • {course.duration}
                            </p>
                            <Button 
                              size="sm" 
                              variant="flat" 
                              color="primary" 
                              className="mt-2"
                              endContent={<Icon icon="lucide:external-link" size={14} />}
                              as="a"
                              href={course.url}
                              target="_blank"
                            >
                              View Course
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2 mt-2">
                    <Button 
                      variant="flat"
                      startContent={<Icon icon="lucide:bookmark" />}
                    >
                      Save Path
                    </Button>
                    <Button 
                      color="primary"
                      startContent={<Icon icon="lucide:map" />}
                    >
                      View Career Roadmap
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))
          ) : (
            <Card>
              <CardBody>
                <div className="text-center py-8">
                  <Icon icon="lucide:search-x" className="mx-auto mb-4 text-default-400" width={48} height={48} />
                  <h3 className="text-xl font-semibold mb-2">No career paths found</h3>
                  <p className="text-default-500 mb-6">
                    Try adjusting your filters or updating your skills profile.
                  </p>
                  <Button 
                    color="primary"
                    onPress={() => {
                      setSelectedCategory('All Categories');
                      setSelectedLevel('All Levels');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerPathsPage;