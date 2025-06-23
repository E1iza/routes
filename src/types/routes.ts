export interface Route {
  uuid: string;
  address: string;
  mask: string;
  gateway: string;
  interface: string;
}

export const routesData: Route[] = [
  { uuid: '1', address: '192.168.1.0', mask: '24', gateway: '192.168.1.1', interface: 'Подключение Ethernet' },
  { uuid: '2', address: '10.0.0.0', mask: '8', gateway: '10.0.0.1', interface: 'Гостевая сеть' },
  { uuid: '3', address: '172.16.0.0', mask: '16', gateway: '172.16.0.1', interface: 'Домашняя сеть' },
  { uuid: '4', address: '192.168.0.0', mask: '24', gateway: '192.168.0.1', interface: 'Подключение Ethernet' },
  { uuid: '5', address: '10.1.0.0', mask: '16', gateway: '10.1.0.1', interface: 'Гостевая сеть' },
  { uuid: '6', address: '172.17.0.0', mask: '16', gateway: '172.17.0.1', interface: 'Домашняя сеть' },
  { uuid: '7', address: '192.168.2.0', mask: '24', gateway: '192.168.2.1', interface: 'Подключение Ethernet' },
  { uuid: '8', address: '10.2.0.0', mask: '16', gateway: '10.2.0.1', interface: 'Гостевая сеть' },
];
