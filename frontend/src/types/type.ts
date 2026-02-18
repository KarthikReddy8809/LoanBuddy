export type stats={
    totalapplications:number
    pending:number
    approved:number
    rejected:number
}

export type LoanApplication = {
  applicationnumber: string;       // e.g., "APP-2025-000003"
  name: string;                    // Student full name
  email: string;                   // Student email
  phone: string;                   // Student phone number
  dob: string;                     // Date of birth in YYYY-MM-DD
  gender: "Male" | "Female" | "Other";
  address: string;                 // Full address
  studentid: string;               // e.g., "STU20257891"
  course: string;                  // e.g., "Computer Science and Engineering"
  branch: string;                  // e.g., "CSE"
  year: number;                    // Current academic year
  cgpa: number;                    // CGPA (decimal)
  eamcetrank: number;              // EAMCET rank
  university: string;              // University name
  parentName: string;              // Parent/guardian name
  parentOccupation: string;        // Occupation of parent/guardian
  annualFamilyIncome: number;      // Family income in INR
  loanamountrequired: number;      // Loan amount in INR
  purposeOfLoan: string;           // Loan purpose
  status: "pending" | "approved" | "rejected"; // Current status of loan
};

