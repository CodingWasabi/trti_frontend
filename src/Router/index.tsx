import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

const GroupCreatePage = loadable(() => import('@/pages/GroupCreatePage'));
const GroupListPage = loadable(() => import('@/pages/GroupListPage'));
const LoginPage = loadable(() => import('@/pages/LoginPage'));
const MainPage = loadable(() => import('@/pages/MainPage'));
const MyProfilePage = loadable(() => import('@/pages/MyProfilePage'));
const NotFoundPage = loadable(() => import('@/pages/NotFoundPage'));
const RegionDetailPage = loadable(() => import('@/pages/RegionDetailPage'));
const RegionListPage = loadable(() => import('@/pages/RegionListPage'));
const TripDetailPage = loadable(() => import('@/pages/TripDetailPage'));
const TripListPage = loadable(() => import('@/pages/TripListPage'));
const TripTendencyPage = loadable(() => import('@/pages/TripTendencyPage'));
const TripTreatyPage = loadable(() => import('@/pages/TripTreatyPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/groups" component={GroupListPage} exact />
        <Route path="/group/create" component={GroupCreatePage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={MyProfilePage} exact />
        <Route path="/tendency" component={TripTendencyPage} exact />
        <Route path="/regions" component={RegionListPage} exact />
        <Route path="/regions/:id" component={RegionDetailPage} exact />
        <Route path="/trips" component={TripListPage} exact />
        <Route path="/trips/:id" component={TripDetailPage} exact />
        <Route path="/trips/:id/treaty" component={TripTreatyPage} exact />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
