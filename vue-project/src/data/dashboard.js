export const dashboard_Performance_data = {
  totalAssets: { count: '1,247', changeThisMonth: 12, operationalPercentage: 85 },
  calibration: { due: 23, overdue: 5, overduePercentage: 22 },
  bookValue: { amount: '$2.4M', changeYTD: -3.2, percentageOfOriginal: 68 },
  serviceContracts: { count: 89, expiringSoon: 12, activePercentage: 87 },
  complianceRate: { percentage: 94.2, changeThisMonth: 2.1, status: 'Ecellent Compliance' },
}

export const critical_alert_data = [
  {
    color: 'red',
    picon: 'mdi-scale-balance',
    aicon: 'mdi-numeric-5',
    title: 'Overdue Calibrations',
    subtitle: 'Immediate attention required',
  },
  {
    color: 'orange',
    picon: 'mdi-tools',
    aicon: 'mdi-numeric-8',
    title: 'Maintainence Overdue',
    subtitle: 'Schedule Within 48 hours',
  },
  {
    color: 'green',
    picon: 'mdi-file-document-plus-outline',
    aicon: 'mdi-numeric-9',
    title: 'Contract expiring',
    subtitle: 'Within next 30 days',
  },
]

export const service_contracts_overview = [
  { color: 'green', title: 'Active Contracts', value: 65, bg: '#E8F5E9' },
  { color: 'orange', title: 'Expiring Soon', value: 12, bg: '#FFF3E0' },
  { color: 'red', title: 'Renewel Due', value: 8, bg: '#FFEBEE' },
  { color: 'grey', title: 'Active Contracts', value: 4, bg: '#FAFAFA' },
]
