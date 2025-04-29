import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from '@heroui/react';

// Pages
import LandingPage from './pages/landing';
import SignUpPage from './pages/auth/sign-up';
import SignInPage from './pages/auth/sign-in';
import UserProfilePage from './pages/profile';
import AIChatInterviewPage from './pages/interview/chat-interview';
import AIInterviewPracticePage from './pages/interview/practice';
import UploadResumePage from './pages/resume/upload';
import ResumeAnalysisPage from './pages/resume/analysis';
import DashboardPage from './pages/dashboard';
import JobsPage from './pages/jobs';
import JobSuggestionPage from './pages/jobs/suggestions';
import CareerPathsPage from './pages/career-paths';
import CareerDetailsPage from './pages/career-paths/career-details';

// Layouts
import MainLayout from './layouts/main-layout';
import AuthLayout from './layouts/auth-layout';
import DashboardLayout from './layouts/dashboard-layout';

const App: React.FC = () => {
  return (
    <Router>
      <ToastProvider placement="top-center" />
      <Switch>
        {/* Public routes */}
        <Route exact path="/">
          <MainLayout>
            <LandingPage />
          </MainLayout>
        </Route>
        
        {/* Auth routes */}
        <Route path="/sign-up">
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        </Route>
        <Route path="/sign-in">
          <AuthLayout>
            <SignInPage />
          </AuthLayout>
        </Route>
        
        {/* Dashboard routes */}
        <Route exact path="/dashboard">
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        </Route>
        <Route path="/jobs">
          <DashboardLayout>
            <JobsPage />
          </DashboardLayout>
        </Route>
        <Route path="/profile">
          <DashboardLayout>
            <UserProfilePage />
          </DashboardLayout>
        </Route>
        <Route path="/interview/chat">
          <DashboardLayout>
            <AIChatInterviewPage />
          </DashboardLayout>
        </Route>
        <Route path="/interview/practice">
          <DashboardLayout>
            <AIInterviewPracticePage />
          </DashboardLayout>
        </Route>
        <Route path="/resume/upload">
          <DashboardLayout>
            <UploadResumePage />
          </DashboardLayout>
        </Route>
        <Route path="/resume/analysis">
          <DashboardLayout>
            <ResumeAnalysisPage />
          </DashboardLayout>
        </Route>
        <Route path="/jobs/suggestions">
          <DashboardLayout>
            <JobSuggestionPage />
          </DashboardLayout>
        </Route>
        <Route path="/career-paths" exact>
          <DashboardLayout>
            <CareerPathsPage />
          </DashboardLayout>
        </Route>
        <Route path="/career-paths/:id">
          <DashboardLayout>
            <CareerDetailsPage />
          </DashboardLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;