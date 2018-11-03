import Vue from 'vue';
import Router from 'vue-router';
import welcome from '@/components/welcome';
import prevent from '@/components/prevent';
import signIn from '@/components/signIn';
import match from '@/components/match';
import sexMatch from '@/components/match/sexMatch';
import test from '@/components/match/test';
import type from '@/components/match/type';
import draw from '@/components/match/draw';
import question from '@/components/match/question';
import testResult from '@/components/match/testResult';
import success from '@/components/match/success';
import inquery from '@/components/inquery';
import know from '@/components/know';
import cancel from '@/components/cancel';
import second from '@/components/second';
import end from '@/components/end';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn,
    },
    {
      path: '/prevent',
      name: 'prevent',
      component: prevent,
    },
    {
      path: '/match',
      component: match,
      children: [
        {
          path: '/',
          name: 'sexMatch',
          component: sexMatch,
        },
        {
          path: 'test',
          component: test,
          children: [
            {
              path: '/',
              name: 'question1',
              component: question,
            },
            {
              path: 'question2',
              name: 'question2',
              component: question,
            },
            {
              path: 'question3',
              name: 'question3',
              component: question,
            },
            {
              path: 'question4',
              name: 'question4',
              component: question,
            },
            {
              path: 'question5',
              name: 'question5',
              component: question,
            },
            {
              path: 'question6',
              name: 'question6',
              component: question,
            },
            {
              path: 'question7',
              name: 'question7',
              component: question,
            },
            {
              path: 'question8',
              name: 'question8',
              component: question,
            },
            {
              path: 'question9',
              name: 'question9',
              component: question,
            },
            {
              path: 'question10',
              name: 'question10',
              component: question,
            },
            {
              path: 'question11',
              name: 'question11',
              component: question,
            },
          ],
        },
        {
          path: 'testResult',
          name: 'testResult',
          component: testResult,
        },
        {
          path: 'type',
          name: 'type',
          component: type,
        },
        {
          path: 'draw',
          name: 'draw',
          component: draw,
        },
        {
          path: '/success',
          name: 'success',
          component: success,
        },
      ],
    },
    {
      path: '/inquery',
      name: 'inquery',
      component: inquery,
    },
    {
      path: '/know',
      name: 'know',
      component: know,
    },
    {
      path: '/cancel',
      name: 'cancel',
      component: cancel,
    },
    {
      path: '/second',
      name: 'second',
      component: second,
    },
    {
      path: '/end',
      name: 'end',
      component: end,
    },
  ],
});
