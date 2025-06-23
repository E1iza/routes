import React, { useState } from 'react';
import type {Route} from '../types/routes.ts';
import { compareIPs } from '../utils/ipUtils.ts';

type SortConfig = {
  key: keyof Route;
  direction: 'ascending' | 'descending';
};

interface RoutesTableProps {
  routes: Route[];
}

const RoutesTable: React.FC<RoutesTableProps> = ({ routes }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'address',
    direction: 'ascending',
  });

  const requestSort = (key: keyof Route) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedRoutes = React.useMemo(() => {
    const sortableRoutes = [...routes];
    sortableRoutes.sort((a, b) => {
      if (sortConfig.key === 'address' || sortConfig.key === 'gateway') {
        const compareResult = compareIPs(a[sortConfig.key], b[sortConfig.key]);
        return sortConfig.direction === 'ascending' ? compareResult : -compareResult;
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      }
    });
    return sortableRoutes;
  }, [routes, sortConfig]);

  const getSortIndicator = (key: keyof Route) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <table>
      <thead>
      <tr>
        <th onClick={() => requestSort('address')}>
          Адрес назначения {getSortIndicator('address')}
        </th>
        <th onClick={() => requestSort('gateway')}>
          Шлюз {getSortIndicator('gateway')}
        </th>
        <th onClick={() => requestSort('interface')}>
          Интерфейс {getSortIndicator('interface')}
        </th>
      </tr>
      </thead>
      <tbody>
      {sortedRoutes.map((route) => (
        <tr key={route.uuid}>
          <td>{`${route.address}/${route.mask}`}</td>
          <td>{route.gateway}</td>
          <td>{route.interface}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default RoutesTable;