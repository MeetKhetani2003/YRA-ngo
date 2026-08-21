export type RegistrationRecord = {
  id: string; name: string; mobile: string; district: string; taluka: string; village: string;
  payment: "Paid" | "Pending" | "Failed"; status: "Successful" | "Pending" | "Failed"; date: string;
  education: string; employment: string; loan: string;
};

export const registrations: RegistrationRecord[] = [
  { id: "YRA-2026-00001", name: "Rohit Kumar", mobile: "98765 43210", district: "Pune", taluka: "Haveli", village: "Kondhwa", payment: "Paid", status: "Successful", date: "18 Aug 2026", education: "Graduate", employment: "Job Seeker", loan: "No" },
  { id: "YRA-2026-00002", name: "Sunita Patil", mobile: "97654 32109", district: "Pune", taluka: "Haveli", village: "Hadapsar", payment: "Pending", status: "Pending", date: "18 Aug 2026", education: "Diploma", employment: "Student", loan: "Yes · ₹2,00,000" },
  { id: "YRA-2026-00003", name: "Amit Sharma", mobile: "96543 21098", district: "Mumbai Suburban", taluka: "Kurla", village: "Kalina", payment: "Paid", status: "Successful", date: "17 Aug 2026", education: "Graduate", employment: "Employed", loan: "No" },
  { id: "YRA-2026-00004", name: "Neha Deshmukh", mobile: "95432 10987", district: "Nashik", taluka: "Nashik", village: "Deolali", payment: "Failed", status: "Failed", date: "17 Aug 2026", education: "Postgraduate", employment: "Job Seeker", loan: "No" },
  { id: "YRA-2026-00005", name: "Imran Shaikh", mobile: "94321 09876", district: "Nagpur", taluka: "Hingna", village: "Wanadongri", payment: "Paid", status: "Successful", date: "16 Aug 2026", education: "Higher Secondary", employment: "Self-Employed", loan: "Yes · ₹3,50,000" },
  { id: "YRA-2026-00006", name: "Kavita More", mobile: "93210 98765", district: "Aurangabad", taluka: "Paithan", village: "Bidkin", payment: "Paid", status: "Pending", date: "16 Aug 2026", education: "Diploma", employment: "Student", loan: "Yes · ₹1,00,000" },
];

export const dashboardStats = [
  { label: "Total Registrations", value: "12,560", delta: "+8.2%", tone: "teal" },
  { label: "Paid Registrations", value: "10,245", delta: "81.6%", tone: "green" },
  { label: "Pending Payments", value: "1,482", delta: "11.8%", tone: "orange" },
  { label: "Failed Payments", value: "833", delta: "6.6%", tone: "red" },
];

export const trendData = [620, 780, 710, 1040, 1280, 1120, 1070, 1420, 1510];
export const districtData = [
  { label: "Pune", value: 2560 }, { label: "Mumbai", value: 2145 }, { label: "Nagpur", value: 1890 },
  { label: "Nashik", value: 1450 }, { label: "Aurangabad", value: 1250 },
];

export const coordinators = [
  { name: "Anjali Kulkarni", mobile: "98221 12001", district: "Pune", taluka: "Haveli", status: "Active" },
  { name: "Sameer Khan", mobile: "98221 12002", district: "Nagpur", taluka: "Hingna", status: "Active" },
  { name: "Meera Jadhav", mobile: "98221 12003", district: "Nashik", taluka: "Sinnar", status: "Inactive" },
  { name: "Rahul Pawar", mobile: "98221 12004", district: "Aurangabad", taluka: "Paithan", status: "Active" },
];

export const documents = [
  { applicant: "Rohit Kumar", document: "Applicant photo", date: "18 Aug 2026", status: "Verified" },
  { applicant: "Sunita Patil", document: "Applicant photo", date: "18 Aug 2026", status: "Pending" },
  { applicant: "Amit Sharma", document: "Education certificate", date: "17 Aug 2026", status: "Verified" },
  { applicant: "Neha Deshmukh", document: "Applicant photo", date: "17 Aug 2026", status: "Rejected" },
];
