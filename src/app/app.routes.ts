import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvailabilityComponent } from './availability/availability.component';
import { EventComponent } from './event/event.component';
import { LearnComponent } from './learn/learn.component';
import { LeaveComponent } from './leave/leave.component';
import { MessageComponent } from './message/message.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'availability',
        component: AvailabilityComponent
    },
    {
        path: 'event',
        component: EventComponent
    },
    {
        path: 'learn',
        component: LearnComponent
    },
    {
        path: 'leave',
        component: LeaveComponent
    },
    {
        path: 'message',
        component: MessageComponent
    },
];
