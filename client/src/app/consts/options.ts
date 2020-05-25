import { IOption, CustomerOption } from '@app/interfaces/app';

export const CUSTOMER_OPTIONS: IOption<CustomerOption>[] = [
  {
    title: 'Меня интересует',
    value: null,
    disabled: true,
  },
  {
    title: 'Разработка web SPA',
    value: 'spa',
  },
  {
    title: 'Серверные решения и API',
    value: 'api',
  },
  {
    title: 'Тестирование',
    value: 'testing',
  },
  {
    title: 'Мобильная разработка',
    value: 'mobile',
  },
  {
    title: 'Десктопные приложения',
    value: 'desktop',
  },
];
