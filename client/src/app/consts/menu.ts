import { IMenuItem } from '@app/interfaces/app';

export const MENU: IMenuItem[] = [
  {
    title: 'О нас',
    route: '#about',
  },
  {
    title: 'Команда',
    route: '#team',
  },
  {
    title: 'Проекты',
    route: '#projects',
  },
  {
    title: 'Услуги',
    route: '#services',
  },
  {
    title: 'Контакты',
    route: '#contacts',
  },
];

export const SOCIAL: IMenuItem[] = [
  {
    title: 'VK',
    route: 'https://vk.com/code_of_power',
  },
  {
    title: 'Twitter',
    route: 'https://twitter.com/code_of_power',
  },
  {
    title: 'Facebook',
    route: 'fb.me/codeofpower',
  },
  {
    title: 'Instagram',
    route: 'https://instagram.com/code_of_power',
  },
  {
    title: 'Telegram',
    route: 't.me/code_of_power',
  },
];

export const CODE_SOCIAL: IMenuItem[] = [
  {
    title: 'NPM',
    route: '',
  },
  {
    title: 'GitHub',
    route: 'https://github.com/Code-of-Power',
  },
];

export const FOOTER_WIDHT = 200;
