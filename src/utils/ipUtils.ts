export const ipToNumber = (ip: string): number => {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0);
};

export const compareIPs = (ipA: string, ipB: string): number => {
  const numA = ipToNumber(ipA);
  const numB = ipToNumber(ipB);
  return numA - numB;
};
