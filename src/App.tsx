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
      </Switch>
    </Router>
  );
};

export default App;