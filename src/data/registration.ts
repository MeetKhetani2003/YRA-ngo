export const registrationConfig = {
  fee: 100,
  idPrefix: "YRA",
  year: 2026,
  supportEmail: "support@yra.example",
  supportPhone: "+91 90000 00000",
};

export const registrationSteps = [
  { id: 1, label: "Personal", path: "/register/personal-details" },
  { id: 2, label: "Address", path: "/register/address-details" },
  { id: 3, label: "Education", path: "/register/education-employment" },
  { id: 4, label: "Loan", path: "/register/loan-requirement" },
  { id: 5, label: "Review", path: "/register/review" },
  { id: 6, label: "Payment", path: "/register/payment" },
];

export const educationOptions = ["Secondary", "Higher Secondary", "Diploma", "Graduate", "Postgraduate", "Other"];
export const employmentOptions = ["Student", "Job Seeker", "Employed", "Self-Employed", "Other"];
export const jobPreferences = ["Private Sector", "Public Opportunities", "Apprenticeship", "Flexible / Open"];
export const selfEmploymentPreferences = ["Interested", "Exploring", "Not currently interested"];
