import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Library = lazy(() => import('@/pages/Library'));
const PromptDetail = lazy(() => import('@/pages/PromptDetail'));
const Compare = lazy(() => import('@/pages/Compare'));
const Categories = lazy(() => import('@/pages/Categories'));

function LoadingFallback() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:id" element={<PromptDetail />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
